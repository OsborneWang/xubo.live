# xubo.live 需求文档

## 1. 项目背景

`xubo.live` 是以个人名字 `Xubo` 为核心的主域名。目前已拆分并使用两个子域名：

- `tv.xubo.live`：承载 TV / 媒体相关服务。
- `komari.xubo.live`：承载 Komari / 监控相关服务。

未来可能继续增加更多子域名和服务。因此，主域名 `xubo.live` 不应被设计成单一业务应用，而应作为个人品牌、生活流和服务入口的统一承载页。

## 2. 产品定位

`xubo.live` 定位为：

> Xubo 的个人数字名片、极客生活流与服务入口。

更具表达力的 slogan：

> Xubo is live.

它应同时承担以下角色：

1. 个人名片：让访问者快速了解 Xubo 是谁。
2. 生活流：展示近期状态、动态、折腾记录和在线感。
3. 服务入口：聚合已有和未来的 `*.xubo.live` 子服务。
4. 个人品牌主页：形成统一的个人网络身份入口。

## 3. 目标用户

### 3.1 主要用户

- Xubo 本人：作为个人服务和网络身份的主入口。
- 朋友、同事、技术伙伴：快速了解 Xubo 和访问公开服务。
- 对自托管、极客工具、个人基础设施感兴趣的人。

### 3.2 次要用户

- 未来访问某个子服务后，希望了解主域名含义的人。
- 搜索或通过社交资料进入 `xubo.live` 的访客。

## 4. 设计原则

1. **主域名是中枢，不是单一服务**  
   `xubo.live` 应聚合并解释所有子域名服务。

2. **个人品牌优先**  
   页面要体现 `Xubo` 这个名字和个人身份，而不仅仅是服务列表。

3. **保留生活流气质**  
   页面应有动态感、当前状态感，而不是静态简历。

4. **极客风但不过度炫技**  
   使用终端、日志、状态灯、等宽字体等元素，但整体保持精致、清晰、可读。

5. **第一版尽量轻量**  
   MVP 应优先静态实现，避免一开始接入过多自动化能力。

## 5. 页面信息架构

第一版建议采用单页结构：

```text
xubo.live
└── /
    ├── Hero / 主视觉
    ├── Whoami / 个人名片
    ├── Now / 当前状态
    ├── Services / 服务入口
    ├── Life Log / 生活流
    └── Links / 外部链接
```

未来可扩展为：

```text
xubo.live
├── /              首页
├── /now           当前状态
├── /feed          生活流
├── /services      服务列表
├── /about         个人名片
├── /links         外部链接
└── /status        服务状态
```

## 6. 核心模块需求

### 6.1 Hero / 主视觉

目标：在 5-10 秒内让访问者知道这是 Xubo 的个人主页。

建议内容：

- 名称：`Xubo`
- slogan：`Xubo is live.`
- 简短描述：
  - 中文：`个人名片 / Live Feed / Service Hub`
  - 英文：`Developer. Builder. Self-hoster.`
- 在线状态：`● Online`
- 可选：本地时间、当前状态短句。

示例：

```text
Xubo is live.
Developer. Builder. Self-hoster.
个人名片 / Live Feed / Service Hub
● Online
```

### 6.2 Whoami / 个人名片

目标：轻量表达个人身份，不做成严肃简历。

建议内容：

- 名字：Xubo
- 身份标签：Developer / Builder / Self-hoster / Tinkerer
- 兴趣关键词：coding、homelab、automation、media、agentic coding
- 简短自述。

极客风展示示例：

```json
{
  "name": "Xubo",
  "status": "online",
  "interests": ["coding", "homelab", "automation", "media"],
  "services": ["tv", "komari"]
}
```

### 6.3 Now / 当前状态

目标：提供生活流中的“现在感”。

建议内容：

- 当前正在做什么。
- 当前运行哪些服务。
- 最近关注的主题。
- 可选：心情、阅读、学习、构建中的项目。

示例：

```text
$ now
building: xubo.live
running: tv.xubo.live, komari.xubo.live
learning: agentic coding, personal infrastructure
mood: caffeinated
```

### 6.4 Services / 服务入口

目标：聚合已有和未来服务。

第一版服务：

| 名称 | 地址 | 描述 | 状态 |
| --- | --- | --- | --- |
| TV | `https://tv.xubo.live` | 媒体 / TV 相关服务 | online |
| Komari | `https://komari.xubo.live` | 监控 / 基础设施概览 | online |

未来可扩展：

- `blog.xubo.live`：博客。
- `notes.xubo.live`：笔记。
- `status.xubo.live`：状态页。
- `tools.xubo.live`：工具集合。
- `lab.xubo.live`：实验性项目。
- `dash.xubo.live`：私有控制台。

服务展示建议：

- 卡片布局。
- 状态灯。
- 名称、说明、链接。
- 区分 Public / Private / Experimental。

### 6.5 Life Log / 生活流

目标：让页面有动态和时间线感。

内容类型：

- 服务上线记录。
- 折腾记录。
- 学习记录。
- 项目进展。
- 生活片段。

展示示例：

```text
$ tail -f life.log
[2026-05-28] initialized xubo.live as a personal live hub
[2026-05-20] komari service online
[2026-05-12] tv service online
```

第一版可手动维护，后续再考虑自动化。

### 6.6 Links / 外部链接

目标：提供个人网络入口。

可包含：

- GitHub
- Email
- Blog
- RSS
- Telegram / X / Mastodon 等社交入口

注意：涉及邮箱或社交账号时，需确认隐私展示策略。

## 7. 视觉风格

推荐方向：

> 极简工程师风 + 终端元素 + 轻微赛博状态感。

设计关键词：

- 深色背景。
- 等宽字体。
- 命令行提示符。
- 状态灯。
- 卡片边框。
- 低饱和青色 / 绿色强调色。
- 轻微网格背景或发光效果。

避免：

- 过度黑客风。
- 大量无意义动画。
- 影响可读性的强光效。
- 一开始做过重的实时仪表盘。

## 8. 内容维护策略

第一阶段：静态维护。

建议数据文件：

```text
src/data/profile.ts
src/data/services.ts
src/data/feed.ts
```

或者使用 Markdown / JSON：

```text
content/feed/*.md
content/services.json
```

第二阶段：半自动化。

可考虑接入：

- GitHub Activity。
- 服务在线状态。
- RSS。
- Komari API。
- Uptime Kuma。

第三阶段：生活流自动化。

可考虑接入：

- Last.fm / Spotify。
- Bangumi / Trakt / 豆瓣。
- Telegram Channel。
- Notion API。

## 9. 非功能需求

### 9.1 性能

- 首页应快速加载。
- 第一版尽量静态生成。
- 避免阻塞式第三方脚本。

### 9.2 可维护性

- 页面模块组件化。
- 数据和视图分离。
- 服务和生活流内容便于追加。

### 9.3 安全与隐私

- 不展示敏感后台入口、token、内部 IP、私有路径。
- 私有服务应明确标记或隐藏真实入口。
- 若后续接入 API，前端不得暴露密钥。

### 9.4 可访问性

- 文字对比度足够。
- 链接可识别。
- 移动端可用。
- 不依赖纯颜色传达状态。

## 10. 技术建议

首选：

```text
Astro + Tailwind CSS
```

理由：

- 适合个人主页和内容型站点。
- 静态生成能力强。
- 性能好。
- 后续可逐步接入交互组件。

备选：

- `Vite + React`：适合轻量 SPA。
- `Next.js`：适合未来需要 API、登录、动态数据的场景。
- 纯 `HTML/CSS/JS`：适合极简上线。

## 11. MVP 范围

第一版必须包含：

- Hero 主视觉。
- Whoami 个人名片。
- Now 当前状态。
- Services 服务入口。
- Life Log 生活流。
- Links 外部链接。
- 移动端适配。

第一版暂不包含：

- 登录系统。
- 后台管理。
- 实时监控 API。
- 自动化生活流。
- 复杂动画。
- 数据库存储。

## 12. 验收标准

MVP 完成后应满足：

1. 打开 `xubo.live` 后可以明确看出这是 Xubo 的个人主页。
2. 页面同时具备个人名片、生活流和服务入口三种含义。
3. `tv.xubo.live` 和 `komari.xubo.live` 有清晰入口。
4. 页面整体具有极客风格，但可读性良好。
5. 移动端和桌面端都能正常浏览。
6. 主要内容可通过数据文件或内容文件轻松维护。
7. 页面不暴露敏感信息。
