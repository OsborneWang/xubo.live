# xubo.live

Xubo 的个人数字名片、极客生活流与服务入口。

## 技术栈

- Astro
- TypeScript
- CSS

当前项目已生成 Astro 项目结构，并已通过生产构建验证。

## 目录结构

```text
src/
├── components/      # 页面组件
├── data/            # 个人信息、服务列表、生活流数据
├── pages/           # Astro 页面
└── styles/          # 全局样式
```

## 本地开发

安装依赖：

```bash
npm install
```

启动开发服务：

```bash
npm run dev
```

构建：

```bash
npm run build
```

预览构建结果：

```bash
npm run preview
```

## 已实现能力

- 个人主页核心模块：Hero、此刻状态、服务入口、生活流、页脚链接。
- 自定义 404 页面：`src/pages/404.astro`。
- 主题切换：默认暗色，支持 `Dark` / `Light` 手动切换，并持久化用户偏好。
- 克制微动效：状态灯、卡片和链接 hover 效果，并兼容减少动态偏好。

## 内容维护

主要内容维护在：

- `src/data/profile.json`：个人简介、当前状态等结构化配置。
- `src/data/services.json`：已上线服务和未来服务占位。
- `src/data/feed.json`：生活流记录。

其中 `src/data/profile.ts` 保留为类型化导出入口，组件仍通过它读取 `profile.json`。

新增服务时，编辑 `src/data/services.json`：

```json
{
  "name": "服务名称",
  "url": "https://example.xubo.live",
  "description": "服务说明",
  "status": "online",
  "label": "example.xubo.live"
}
```

新增生活流时，编辑 `src/data/feed.json`：

```json
{
  "date": "2026-05-28",
  "text": "这里写一条新的生活流记录"
}
```

## 说明

当前项目以 `src/` 下的 Astro 实现为正式来源，构建产物输出到 `dist/`。
