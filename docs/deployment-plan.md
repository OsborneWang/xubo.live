# xubo.live 自动化发布方案

本文档用于记录 `xubo.live` 从 GitHub 自动发布到 Oracle Cloud VPS 的推荐方案。当前项目是 Astro 静态站点，生产构建产物位于 `dist/`，因此第一版推荐采用：

```text
GitHub Actions 构建 dist
  -> 通过 SSH/rsync 上传到 VPS
  -> Nginx 直接托管静态文件
```

该方案不需要在服务器上运行 Node.js 常驻进程，部署链路简单、稳定、资源占用低，适合个人主页和服务入口类站点。

## 1. 推荐发布架构

```text
本地开发
  -> git push 到 GitHub main 分支
  -> GitHub Actions 自动触发
  -> 安装依赖并执行 npm run build
  -> 将 dist/ 同步到 Oracle VPS
  -> Nginx 对外提供 https://xubo.live
```

服务器上建议目录：

```text
/var/www/xubo.live/
├── current/              # Nginx 实际托管目录
└── releases/             # 可选：保留历史版本，便于回滚
```

第一版可以只使用：

```text
/var/www/xubo.live/current/
```

## 2. 为什么当前项目适合静态发布

当前 `package.json` 中的核心脚本是：

```json
{
  "build": "astro build",
  "preview": "astro preview"
}
```

`astro build` 会生成静态产物到 `dist/`。生产环境只需要让 Nginx 托管这些 HTML、CSS、JS 和静态资源即可。

优点：

- VPS 不需要运行 Node 服务，减少内存占用。
- 线上没有 `npm install`，降低服务器环境差异。
- 构建失败会停在 GitHub Actions，不影响线上旧版本。
- 静态文件由 Nginx 直接返回，性能和稳定性都很好。

## 3. VPS 初始化步骤

以下命令在 Oracle VPS 上执行。建议使用非 root 用户，例如 `deploy`，并给它项目目录权限。

### 3.1 创建部署用户

如果你已经有合适的登录用户，可以跳过本节。

```bash
sudo adduser deploy
sudo usermod -aG sudo deploy
```

创建部署目录：

```bash
sudo mkdir -p /var/www/xubo.live/current
sudo chown -R deploy:deploy /var/www/xubo.live
```

### 3.2 配置 SSH 免密登录

在本地生成一对专用于部署的 SSH key：

```bash
ssh-keygen -t ed25519 -C "github-actions-xubo-live" -f ~/.ssh/xubo_live_deploy
```

将公钥内容追加到 VPS 的部署用户：

```bash
ssh deploy@你的服务器IP
mkdir -p ~/.ssh
chmod 700 ~/.ssh
nano ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

把 `~/.ssh/xubo_live_deploy.pub` 的内容粘贴进去。

本地测试：

```bash
ssh -i ~/.ssh/xubo_live_deploy deploy@你的服务器IP
```

确认可以免密登录后，再把私钥内容配置到 GitHub Secrets。

## 4. GitHub Secrets 配置

进入 GitHub 仓库：

```text
Settings -> Secrets and variables -> Actions -> New repository secret
```

建议添加：

| Secret 名称 | 说明 |
| --- | --- |
| `VPS_HOST` | Oracle VPS 公网 IP 或域名 |
| `VPS_USER` | 部署用户，例如 `deploy` |
| `VPS_SSH_KEY` | 部署私钥完整内容，即 `~/.ssh/xubo_live_deploy` |
| `VPS_PORT` | SSH 端口，通常是 `22` |
| `VPS_TARGET_DIR` | 目标目录，例如 `/var/www/xubo.live/current` |

注意：

- 不要把服务器密码写入仓库。
- 不要把私钥提交到 GitHub。
- 私钥只放在 GitHub Secrets 中。
- `.env`、证书、token 等敏感文件不要写入文档或日志。

## 5. GitHub Actions 工作流

建议新增文件：

```text
.github/workflows/deploy.yml
```

内容示例：

```yaml
name: Deploy xubo.live

on:
  push:
    branches:
      - main
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload dist to VPS
        uses: easingthemes/ssh-deploy@v5.1.0
        env:
          SSH_PRIVATE_KEY: ${{ secrets.VPS_SSH_KEY }}
          REMOTE_HOST: ${{ secrets.VPS_HOST }}
          REMOTE_USER: ${{ secrets.VPS_USER }}
          REMOTE_PORT: ${{ secrets.VPS_PORT }}
          SOURCE: dist/
          TARGET: ${{ secrets.VPS_TARGET_DIR }}
          ARGS: -rlgoDzvc --delete
```

说明：

- `npm ci` 会严格按照 `package-lock.json` 安装依赖，更适合 CI 环境。
- `npm run build` 在 GitHub Actions 中完成，服务器只接收构建产物。
- `--delete` 会删除服务器目标目录中本次构建不存在的旧文件，避免遗留过期资源。
- `workflow_dispatch` 允许你在 GitHub 页面手动触发发布。

风险提示：

- `--delete` 只应该用于专门的静态站目标目录，例如 `/var/www/xubo.live/current`。
- 不要把 `TARGET` 配成 `/var/www/`、`/home/deploy/` 或其他混有重要文件的目录。

## 6. Nginx 配置

在 VPS 上安装 Nginx：

```bash
sudo apt update
sudo apt install nginx
```

新增站点配置：

```bash
sudo nano /etc/nginx/sites-available/xubo.live
```

示例配置：

```nginx
server {
    listen 80;
    listen [::]:80;

    server_name xubo.live www.xubo.live;

    root /var/www/xubo.live/current;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|webp|woff|woff2)$ {
        expires 30d;
        add_header Cache-Control "public, immutable";
        try_files $uri =404;
    }
}
```

启用配置：

```bash
sudo ln -s /etc/nginx/sites-available/xubo.live /etc/nginx/sites-enabled/xubo.live
sudo nginx -t
sudo systemctl reload nginx
```

如果默认站点占用了域名，可以删除默认软链接：

```bash
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

删除配置属于有影响的操作，执行前确认默认站点没有承载其他内容。

## 7. HTTPS 证书

推荐使用 Certbot 配置 Let's Encrypt 证书：

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d xubo.live -d www.xubo.live
```

完成后测试自动续期：

```bash
sudo certbot renew --dry-run
```

Oracle Cloud 还需要确认：

- VPS 系统防火墙允许 `80` 和 `443`。
- Oracle Cloud 安全列表或 NSG 放行 `80` 和 `443`。
- 域名 DNS 的 A 记录指向 VPS 公网 IP。

## 8. 首次发布流程

1. VPS 创建 `/var/www/xubo.live/current`。
2. VPS 配置 Nginx，并确认 `nginx -t` 通过。
3. GitHub 添加 Secrets。
4. 仓库新增 `.github/workflows/deploy.yml`。
5. 推送到 `main` 分支。
6. 在 GitHub Actions 页面查看部署日志。
7. 打开 `https://xubo.live` 验证页面。

## 9. 回滚方案

第一版简单方案是：

```text
git revert 出问题的提交
push 到 main
GitHub Actions 自动重新发布上一个正确版本
```

如果希望服务器保留历史版本，可以升级为 release 目录方案：

```text
/var/www/xubo.live/releases/20260528-210000/
/var/www/xubo.live/releases/20260528-213000/
/var/www/xubo.live/current -> /var/www/xubo.live/releases/20260528-213000/
```

此时 GitHub Actions 每次上传到新的 release 目录，再更新 `current` 软链接。这个方案更适合访问量变大或需要快速回滚时使用。

## 10. 可选方案对比

### 方案 A：GitHub Actions 构建后 rsync 上传

推荐作为当前项目第一版方案。

适合：

- Astro 静态站。
- 个人主页。
- 不需要服务端 API 的页面。

特点：

- 简单稳定。
- 服务器环境要求低。
- 线上只保留静态产物。

### 方案 B：VPS 拉代码后本机构建

流程：

```text
GitHub Actions SSH 到 VPS
  -> cd /var/www/xubo.live/repo
  -> git pull
  -> npm ci
  -> npm run build
  -> rsync dist/ 到 current/
```

适合：

- 构建依赖服务器本地环境。
- 需要在服务器上保留完整仓库。

不推荐作为当前第一版，因为它会让 VPS 需要 Node.js、npm、完整源码和构建缓存，维护成本更高。

### 方案 C：Docker Compose 发布

流程：

```text
GitHub Actions 构建镜像
  -> 推送镜像到 GHCR
  -> VPS docker compose pull && docker compose up -d
```

适合：

- 后续增加后端 API。
- 需要数据库、Redis、队列等服务。
- 希望环境完全容器化。

当前项目只是静态 Astro 站，暂时没有必要引入 Docker。

## 11. 建议的落地顺序

第一阶段：跑通自动发布。

- 配置 VPS 用户、目录、Nginx、HTTPS。
- 添加 GitHub Secrets。
- 新增 `deploy.yml`。
- 推送 `main` 验证自动发布。

第二阶段：增强稳定性。

- 增加构建前检查，例如 `npm run build` 已经覆盖 Astro 基础校验。
- 给 GitHub Actions 增加部署成功或失败通知。
- 使用 release 目录和 `current` 软链接支持快速回滚。

第三阶段：扩展服务架构。

- 如果未来 `xubo.live` 增加动态 API，再评估 PM2 或 Docker Compose。
- 如果多个子域名服务统一管理，再考虑 Nginx 配置模板化和集中化部署脚本。

## 12. 本项目建议

当前仓库建议采用：

```text
Astro 静态构建
+ GitHub Actions
+ rsync/SSH 上传 dist
+ Nginx 静态托管
+ Certbot HTTPS
```

这个方案足够支撑 `xubo.live` 的个人主页、生活流和服务入口。后续如果项目从静态站演进为动态应用，再迁移到 Docker Compose 会更自然。
