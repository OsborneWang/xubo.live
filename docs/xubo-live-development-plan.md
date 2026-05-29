# xubo.live 开发计划

## 1. 开发目标

构建 `xubo.live` 第一版个人主页，使其成为 Xubo 的个人数字名片、极客生活流和服务入口。

第一版以静态站点为主，重点完成信息架构、视觉风格和内容维护方式，避免过早引入复杂后端能力。

## 2. 推荐技术路线

首选技术栈：

```text
Astro + Tailwind CSS
```

推荐原因：

- 适合个人主页、内容页和静态生成。
- 页面性能好，部署简单。
- 数据可以先使用 TypeScript / JSON / Markdown 维护。
- 后续可逐步接入交互组件或 API。

如希望更轻量，可采用：

```text
Vite + React
```

如后续需要登录、API Routes、动态服务端能力，可再评估：

```text
Next.js
```

## 3. 里程碑规划

### Milestone 0：项目初始化

目标：确定技术栈并初始化工程。

任务：

- 选择 Astro / Vite / Next.js 之一。
- 初始化项目目录。
- 配置基础样式系统。
- 建立基础页面结构。
- 建立数据文件目录。

建议产出：

```text
src/pages/index.astro 或 src/App.tsx
src/components/
src/data/profile.ts
src/data/services.ts
src/data/feed.ts
```

验收标准：

- 本地开发服务可正常启动。
- 首页可渲染基础内容。
- 样式系统可用。

### Milestone 1：内容数据层

目标：将个人信息、服务列表、生活流从页面中抽离。

任务：

- 建立 profile 数据。
- 建立 services 数据。
- 建立 feed 数据。
- 为数据定义类型。
- 确定公开展示字段和隐私边界。

建议数据：

```text
profile: name, tagline, roles, interests, links
services: name, url, description, status, visibility
feed: date, title, content, tags
```

验收标准：

- 页面内容来自数据文件。
- 新增服务或 feed 不需要改组件结构。
- 不包含敏感信息。

### Milestone 2：首页 MVP

目标：完成首页核心模块。

任务：

- 实现 Hero / 主视觉。
- 实现 Whoami / 个人名片。
- 实现 Now / 当前状态。
- 实现 Services / 服务入口。
- 实现 Life Log / 生活流。
- 实现 Links / 外部链接。

验收标准：

- 用户能快速理解页面是 Xubo 的个人主页。
- 页面具备个人名片、生活流、服务入口三种含义。
- `tv.xubo.live` 和 `komari.xubo.live` 可访问。
- 内容结构清晰。

### Milestone 3：视觉与响应式

目标：形成稳定的极客风视觉语言，并保证桌面和移动端体验。

任务：

- 定义色彩变量。
- 定义字体和排版规则。
- 使用等宽字体和终端元素。
- 设计状态灯、命令提示符、日志样式。
- 完成移动端适配。
- 检查按钮、链接、卡片、文字不发生重叠。

验收标准：

- 桌面端布局完整美观。
- 移动端信息可读、无横向溢出。
- 视觉有极客感但不过度花哨。
- 文本对比度足够。

### Milestone 4：验证与部署准备

目标：保证站点可构建、可部署、可维护。

任务：

- 运行格式检查或构建命令。
- 检查所有外链。
- 检查移动端布局。
- 检查无敏感信息。
- 准备部署说明。

验收标准：

- 构建通过。
- 页面无明显布局错误。
- 链接可点击。
- 文档和工作记录已更新。

### Milestone 5：体验增强与内容结构统一

目标：在当前 Astro 静态站基础上，补齐站点完整度、维护一致性和视觉体验。

任务：

- 新增 `src/pages/404.astro` 自定义 404 页面。
- 将内容数据逐步统一为 JSON + TypeScript 类型定义。
- 评估并迁移 `profile.ts` 到 `profile.json`，或至少明确保留策略。
- 为状态灯、服务卡片、链接等增加克制微动效。
- 增加 `prefers-reduced-motion` 兼容规则。
- 增加默认暗色的亮色 / 暗色手动主题切换。
- 使用 `localStorage` 持久化主题偏好。
- 检查主题切换后的桌面端和移动端可读性。

验收标准：

- 访问不存在路径时展示自定义 404 页面。
- 404 页面可返回首页，且不暴露内部信息。
- 主要展示内容优先从 `src/data/` 维护。
- 微动效存在但不干扰阅读。
- 用户偏好减少动态时，动画被关闭或明显弱化。
- 默认进入暗色主题，亮色和暗色主题均可正常浏览。
- 刷新页面后主题偏好仍然生效。

## 4. 任务拆分

### 4.1 基础工程

- 初始化前端项目。
- 建立目录结构。
- 配置基础样式。
- 添加开发和构建脚本。

### 4.2 组件开发

- `HeroSection`
- `WhoamiPanel`
- `NowPanel`
- `ServicesGrid`
- `LifeLog`
- `LinksFooter`

### 4.3 数据建模

- 定义 `Profile` 类型。
- 定义 `Service` 类型。
- 定义 `FeedItem` 类型。
- 建立初始数据。
- 统一内容维护入口，优先使用 `src/data/*.json`。
- 保留 `src/data/types.ts` 作为类型定义中心。
- 评估 `profile.ts` 是否迁移为 `profile.json`。
- 为后续 `projects.json`、`links.json`、`uses.json` 预留结构。

### 4.4 样式开发

- 深色背景。
- 等宽字体。
- 状态色。
- 卡片边框。
- 终端提示符样式。
- 响应式布局。
- 微动效：状态灯呼吸、卡片 hover、链接 hover。
- 主题变量：为亮色 / 暗色主题抽象 CSS 变量。
- 可访问性：补充 `prefers-reduced-motion` 降低动态效果。

### 4.5 验证

- 本地预览。
- 构建验证。
- 桌面端检查。
- 移动端检查。
- 外链检查。
- 隐私检查。
- 访问不存在路径，检查 404 页面。
- 切换亮色 / 暗色 / 系统主题，检查可读性。
- 刷新页面，检查主题偏好是否保留。
- 开启系统减少动态效果，检查动画是否弱化。

## 5. 内容初稿

### Hero

```text
Xubo is live.
Developer. Builder. Self-hoster.
个人名片 / Live Feed / Service Hub
```

### Now

```text
building: xubo.live
running: tv.xubo.live, komari.xubo.live
learning: agentic coding, personal infrastructure
```

### Services

```text
TV
Media service / entertainment hub
https://tv.xubo.live

Komari
Monitoring and infrastructure overview
https://komari.xubo.live
```

### Life Log

```text
[2026-05-28] planned xubo.live as a personal live hub
[2026-05-20] komari service online
[2026-05-12] tv service online
```

## 6. 风险与注意事项

### 6.1 隐私风险

不要展示：

- 内网地址。
- 管理后台真实路径。
- token、cookie、密钥。
- 未公开的个人联系方式。

### 6.2 过度设计风险

第一版不要引入：

- 登录系统。
- 实时监控后端。
- 复杂动画。
- 数据库。
- 过多第三方集成。

下一阶段允许引入微动效和主题切换，但应保持克制：

- 不使用大面积、高频闪烁动画。
- 不引入额外动画库，优先使用 CSS 实现。
- 不为了主题切换重构整个样式系统，只抽取必要 CSS 变量。

### 6.3 维护风险

生活流如果完全手动维护，可能容易停更。第一版可控制展示数量，例如只展示最近 3-5 条。

## 7. 后续扩展方向

### 7.1 服务状态自动化

- 接入 Uptime Kuma。
- 接入 Komari API。
- 检查 HTTP 状态。

### 7.2 自动生活流

- GitHub 最近活动。
- RSS 聚合。
- 音乐 / 影视记录。
- Telegram Channel。

### 7.3 独立页面

- `/now`
- `/feed`
- `/services`
- `/about`
- `/status`
- `/uses`
- `/404`

### 7.4 体验增强

- 自定义 404 页面。
- 默认暗色，并支持亮色 / 暗色手动切换。
- 低干扰微动效。
- 构建信息展示。

### 7.5 内容结构统一

- 将 `profile.ts` 逐步迁移或整理为 `profile.json`。
- 保持 `services.json`、`feed.json` 作为内容维护入口。
- 后续按需新增 `projects.json`、`links.json`、`uses.json`。
- 保留 `types.ts` 管理数据类型，避免组件中重复定义类型。

### 7.6 私有控制台

可独立放在：

```text
dash.xubo.live
```

不要直接暴露在主域名公开页面中。

## 8. 推荐执行顺序

### 8.1 已完成或当前阶段

1. 确认技术栈。
2. 初始化项目。
3. 建立数据文件。
4. 实现首页模块。
5. 完成极客风样式。
6. 做移动端适配。
7. 构建验证。
8. 更新工作记录。
9. 部署到 `xubo.live`。

### 8.2 下一阶段建议顺序

1. 新增 `404.astro`，补齐基础站点完整度。
2. 梳理 `src/data/`，明确 JSON + 类型定义的统一维护方式。
3. 评估是否将 `profile.ts` 迁移为 `profile.json`。
4. 抽象主题 CSS 变量，为亮色 / 暗色主题做准备。
5. 实现主题切换按钮与 `localStorage` 持久化。
6. 增加状态灯、卡片和链接的低干扰微动效。
7. 增加 `prefers-reduced-motion` 兼容。
8. 执行 `npm run build` 验证。
9. 更新工作记录。
