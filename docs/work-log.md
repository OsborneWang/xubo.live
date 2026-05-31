# 工作记录

本文件用于汇总维护项目中的工作留痕，包括需求、计划、关键决策、执行记录、变更总结、验证方式和后续建议。

## 记录规范

每次较重要的工作建议追加一条记录，格式如下：

```markdown
## YYYY-MM-DD HH:mm - 工作标题

### 背景

### 目标

### 执行内容

### 修改文件

### 验证方式

### 关键决策

### 后续建议
```

## 2026-05-28 - xubo.live 个人主页需求与计划整理

### 背景

用户拥有主域名 `xubo.live`，其中 `xubo` 是用户名字。目前已有两个子域名服务：

- `tv.xubo.live`
- `komari.xubo.live`

未来可能增加更多子域名和服务。用户希望主域名具有个人品牌含义，同时包含个人名片、生活流和极客风格。

### 目标

- 梳理 `xubo.live` 的产品定位和详细需求。
- 形成可落地的开发计划。
- 在项目协作规则中增加工作和文档留痕要求。
- 建立统一工作记录文档。

### 执行内容

- 将 `xubo.live` 定位为“Xubo 的个人数字名片、极客生活流与服务入口”。
- 梳理页面核心模块：Hero、Whoami、Now、Services、Life Log、Links。
- 梳理视觉方向：极简工程师风 + 终端元素 + 轻微赛博状态感。
- 梳理 MVP 范围、验收标准、非功能需求和后续扩展方向。
- 梳理开发里程碑和任务拆分。
- 更新 `AGENTS.md`，要求所有工作和文档都应留痕，并维护到本文件。

### 修改文件

- `AGENTS.md`
- `docs/xubo-live-requirements.md`
- `docs/xubo-live-development-plan.md`
- `docs/work-log.md`

### 验证方式

- 已确认新增文档均可读写。
- 已确认 `AGENTS.md` 增加工作与文档留痕规则。
- 当前目录不是 Git 仓库，无法通过 `git status` 查看变更状态。

### 关键决策

- `xubo.live` 不作为单一业务应用，而作为个人品牌主入口。
- 第一版优先静态实现，不引入登录、数据库、实时监控 API 等复杂能力。
- 推荐技术栈为 `Astro + Tailwind CSS`，但最终技术栈可在开发前再次确认。
- 工作记录统一维护在 `docs/work-log.md`。

### 后续建议

- 下一步确认技术栈并初始化前端项目。
- 若采用 Astro，应先创建基础页面、组件目录和数据文件。
- 后续每次重要变更都应追加更新本工作记录。

## 2026-05-28 - sub-agent 工作模式与静态 MVP 开发

### 背景

用户希望在项目中采用 sub-agent 工作模式提升开发效率，并要求按照该模式开始开发 `xubo.live`。

### 目标

- 在 `AGENTS.md` 中增加 sub-agent 工作模式规则。
- 以不安装依赖、不引入复杂工具链的方式先实现可打开的静态 MVP。
- 保持工作过程和结果留痕。

### 执行内容

- 在 `AGENTS.md` 增加 Sub-Agent Work Mode 章节。
- 采用角色分工推进：Planner 收敛范围，Implementer 实现静态页面，Reviewer 做基础样式和隐私检查，Docs Keeper 更新工作记录。
- 新增 `index.html`、`styles.css`、`script.js`，实现单页个人主页。
- 页面包含 Hero、Whoami、Now、Services、Life Log、Links 等模块。
- 样式采用深色、等宽字体、状态灯、终端提示符和网格背景，整体偏极客风。
- 去除未确认的邮箱入口，避免展示未经确认的个人联系方式。

### 修改文件

- `AGENTS.md`
- `index.html`
- `styles.css`
- `script.js`
- `docs/work-log.md`

### 验证方式

- 已检查项目文件列表。
- 已解析 `index.html` 中的链接，确认包含页内锚点和两个公开子域名入口。
- 已确认 `styles.css` 和 `script.js` 存在。
- 当前实现为纯静态页面，可直接在浏览器打开 `index.html` 预览。

### 关键决策

- 由于安装依赖属于需要额外确认的操作，当前先采用纯 `HTML/CSS/JS` 实现静态 MVP。
- 后续如确认安装依赖，可迁移到 `Astro + Tailwind CSS`。
- sub-agent 模式在当前环境中以单代理模拟多角色分工实现。

### 后续建议

- 在浏览器中预览 `index.html`，根据视觉效果调整文案和布局。
- 若确认使用 Astro/Tailwind，可进入正式工程初始化。
- 可进一步拆分内容数据，将 profile、services、feed 从 HTML 中抽离。

## 2026-05-28 - 页面主语言中文化与文案优化

### 背景

用户希望页面主语言调整为汉语，同时保留少量英文用于极客风格表达，并继续优化页面。

### 目标

- 将页面主要叙事语言改为中文。
- 保留命令行、状态词、Service Hub 等少量英文元素。
- 优化中文字体、标题尺寸和模块文案。

### 执行内容

- 将标题从 `Xubo is live.` 调整为 `我是 Xubo。`。
- 将导航和模块标题调整为 `此刻`、`服务`、`生活流`、`此刻状态`、`服务入口` 等中文表达。
- 优化 Hero 摘要，使其更像个人名片与生活流入口。
- 将服务说明和生活流记录改为中文。
- 调整 CSS 字体栈：页面主体使用系统中文字体，命令提示符和 JSON 保持等宽字体。
- 调整中文标题字号，降低中文大标题在移动端的挤压风险。

### 修改文件

- `index.html`
- `styles.css`
- `docs/work-log.md`

### 验证方式

- 已检查页面链接和锚点。
- 已确认未新增敏感个人联系方式。
- 可直接打开 `index.html` 预览。

### 关键决策

- 页面主语言使用中文，英文作为辅助气质元素，而不是主叙事。
- 保留 `xubo@live:~$`、`Service Hub`、`online` 等英文/命令行元素以维持极客风格。

### 后续建议

- 预览页面后根据个人偏好微调文案语气。
- 可继续补充真实个人链接，例如 GitHub、Blog 或 RSS，但应先确认隐私展示策略。

## 2026-05-28 - Astro 项目结构生成

### 背景

用户认可当前页面效果，并要求生成正式项目。

### 目标

- 将静态 MVP 整理为 Astro 项目结构。
- 将页面拆分为组件、数据和样式，便于后续维护。
- 保留当前视觉和中文主叙事效果。

### 执行内容

- 新增 `package.json` 和 `astro.config.mjs`。
- 新增 Astro 页面 `src/pages/index.astro`。
- 拆分组件：`HeroSection`、`NowPanel`、`ServicesGrid`、`LifeLog`、`FooterLinks`。
- 拆分数据：`profile.ts`、`services.ts`、`feed.ts`。
- 迁移全局样式到 `src/styles/global.css`。
- 新增 `.gitignore` 和 `README.md`。
- 保留根目录静态 MVP 文件，作为已确认效果的参考版本。

### 修改文件

- `package.json`
- `astro.config.mjs`
- `.gitignore`
- `README.md`
- `src/pages/index.astro`
- `src/components/HeroSection.astro`
- `src/components/NowPanel.astro`
- `src/components/ServicesGrid.astro`
- `src/components/LifeLog.astro`
- `src/components/FooterLinks.astro`
- `src/data/profile.ts`
- `src/data/services.ts`
- `src/data/feed.ts`
- `src/styles/global.css`
- `docs/work-log.md`

### 验证方式

- 已检查项目文件结构。
- 已确认 Astro 项目入口和数据文件已生成。
- 未运行 `npm install` 和 `npm run build`，因为安装依赖会修改环境，需要用户确认。

### 关键决策

- 正式实现采用 Astro 项目结构。
- 暂不删除根目录静态 MVP 文件，避免丢失已确认效果参考。
- 当前未引入 Tailwind CSS，先保留纯 CSS，降低依赖复杂度。

### 后续建议

- 用户确认后执行 `npm install` 安装依赖。
- 安装后运行 `npm run build` 验证 Astro 构建。
- 构建通过后可考虑移除根目录静态 MVP 文件，或归档到 `legacy/`。

## 2026-05-28 - 依赖安装与构建验证

### 背景

用户确认可以安装依赖并运行构建。

### 目标

- 安装 Astro 项目依赖。
- 运行生产构建验证项目是否可正常生成静态产物。
- 记录依赖审计结果和后续风险。

### 执行内容

- 执行 `npm install` 安装依赖。
- 生成 `package-lock.json` 和 `node_modules/`。
- 执行 `npm run build`。
- 检查 `dist/` 构建产物。
- 执行 `npm audit --audit-level=moderate` 查看安全审计详情。

### 修改文件

- `package-lock.json`
- `docs/work-log.md`

### 生成目录

- `node_modules/`
- `dist/`

### 验证方式

- `npm install` 执行成功。
- `npm run build` 执行成功，生成 `dist/index.html` 和 `dist/_astro/index.DM53v299.css`。
- `npm audit --audit-level=moderate` 发现 1 个 moderate 级别漏洞，来源于当前 Astro 版本。

### 关键决策

- 未执行 `npm audit fix --force`，因为该命令会将 Astro 升级到 `6.4.0`，属于 breaking change，可能影响项目稳定性。

### 后续建议

- 后续可评估是否升级 Astro 到 6.x，并在升级后重新构建和预览。
- 部署前可先运行 `npm run preview` 做本地预览。

## 2026-05-28 - 首页主标题调整

### 背景

用户要求将首页主标题从“我是 Xubo。”改为“This is Xubo”。

### 目标

- 更新正式 Astro 项目的首页主标题。
- 同步更新根目录静态 MVP 参考文件。
- 运行构建验证。

### 执行内容

- 修改 `src/data/profile.ts` 中的 `profile.title`。
- 修改根目录 `index.html` 中的静态参考标题。
- 执行 `npm run build`。

### 修改文件

- `src/data/profile.ts`
- `index.html`
- `docs/work-log.md`

### 验证方式

- `npm run build` 执行成功。
- Astro 成功生成 `dist/index.html`。

### 关键决策

- 正式项目的标题来源仍维护在 `src/data/profile.ts`，组件无需改动。

### 后续建议

- 如需继续调整首页英文比例，可优先修改 `src/data/profile.ts` 中的 `title`、`tagline` 和 `summary`。

## 2026-05-28 - 服务与生活流数据改为 JSON 维护

### 背景

用户希望生活流和已上线服务都改成 JSON 维护，方便未来新增内容。

### 目标

- 将生活流数据从 TypeScript 文件迁移到 JSON。
- 将服务列表从 TypeScript 文件迁移到 JSON。
- 保持组件渲染逻辑不变，并通过构建验证。

### 执行内容

- 新增 `src/data/feed.json` 维护生活流记录。
- 新增 `src/data/services.json` 维护服务入口。
- 新增 `src/data/types.ts` 维护数据类型。
- 修改 `LifeLog.astro` 从 `feed.json` 读取数据。
- 修改 `ServicesGrid.astro` 和 `FooterLinks.astro` 从 `services.json` 读取数据。
- 更新 `README.md`，说明新增服务和生活流的 JSON 维护方式。
- 执行 `npm run build` 验证。

### 修改文件

- `src/data/feed.json`
- `src/data/services.json`
- `src/data/types.ts`
- `src/components/LifeLog.astro`
- `src/components/ServicesGrid.astro`
- `src/components/FooterLinks.astro`
- `README.md`
- `docs/work-log.md`

### 验证方式

- `npm run build` 执行成功。
- Astro 成功生成 `dist/index.html`。

### 关键决策

- JSON 文件作为服务和生活流的正式维护入口。
- 暂未删除旧的 `src/data/feed.ts` 和 `src/data/services.ts`，因为删除文件需要用户确认；当前组件已不再引用它们。

### 后续建议

- 用户确认后可删除旧的 `src/data/feed.ts` 和 `src/data/services.ts`，避免未来混淆。
- 后续也可将 `profile.ts` 改为 `profile.json`，进一步统一内容维护方式。

## 2026-05-28 - 上传前清理与构建验证

### 背景

用户提供 GitHub 仓库地址，并要求在提交前删除早期 MVP 文件和 `.claude` 本地配置目录，清理无关文件后提交代码。

### 目标

- 删除无关的早期静态 MVP 文件。
- 删除本地 `.claude/` 配置目录。
- 删除已不再使用的旧 TypeScript 数据文件。
- 确保正式 Astro 项目仍可构建。

### 执行内容

- 删除根目录 `index.html`、`styles.css`、`script.js`。
- 删除 `.claude/`。
- 删除不再引用的 `src/data/feed.ts` 和 `src/data/services.ts`。
- 更新 `README.md`，去掉静态 MVP 参考说明。
- 执行 `npm run build` 验证正式 Astro 项目。

### 修改文件

- `README.md`
- `docs/work-log.md`

### 删除文件/目录

- `.claude/`
- `index.html`
- `styles.css`
- `script.js`
- `src/data/feed.ts`
- `src/data/services.ts`

### 验证方式

- `npm run build` 执行成功。
- Astro 成功生成 `dist/index.html`。

### 关键决策

- 仓库仅保留正式 Astro 项目结构。
- 构建产物 `dist/` 和依赖目录 `node_modules/` 继续由 `.gitignore` 排除。

### 后续建议

- 初始化 Git 仓库并推送到 `https://github.com/OsborneWang/xubo.live.git`。

## 2026-05-28 20:20 - 自动化发布方案文档整理

### 背景

用户当前代码仓库托管在 GitHub，并拥有一台 Oracle Cloud VPS，希望了解如何配置自动化发布能力，并要求将方案以文档形式写入当前仓库用于学习研究。

### 目标

- 基于当前 `xubo.live` Astro 静态站项目，设计一套适合第一版落地的自动发布方案。
- 说明 GitHub Actions、SSH、Nginx、HTTPS、回滚和后续扩展方向。
- 将方案沉淀为仓库文档。

### 执行内容

- 检查当前项目结构、`package.json` 和 `astro.config.mjs`。
- 确认当前项目构建方式为 `astro build`，产物输出到 `dist/`。
- 选择“GitHub Actions 构建 dist + SSH/rsync 上传到 VPS + Nginx 静态托管”作为推荐第一版方案。
- 编写 VPS 初始化、GitHub Secrets、Actions workflow、Nginx 配置、HTTPS、首次发布、回滚和可选方案对比。

### 修改文件

- `docs/deployment-plan.md`
- `docs/work-log.md`

### 验证方式

- 已确认新增文档写入成功。
- 本次为文档方案整理，未修改运行时代码，未执行构建。

### 关键决策

- 当前项目是 Astro 静态站，推荐在 GitHub Actions 中完成构建，VPS 只接收 `dist/` 静态产物。
- 第一版不推荐在 VPS 上拉源码构建，也暂不推荐引入 Docker，以降低部署复杂度。
- 生产访问建议由 Nginx 托管静态文件，并使用 Certbot 配置 HTTPS。

### 后续建议

- 根据文档完成 VPS 用户、目录、Nginx 和 HTTPS 初始化。
- 在 GitHub 仓库配置部署 Secrets。
- 后续可新增 `.github/workflows/deploy.yml` 真正启用自动发布。

## 2026-05-29 15:44 - 下一阶段体验增强需求与开发计划

### 背景

用户暂时不配置 SSH key 和自动发布，转而希望围绕当前项目继续头脑风暴，并选定 12、14、16、17 四项进行规划：自定义 404 页面、数据结构统一、微动效、亮色/暗色主题切换。

### 目标

- 将选定的增强方向从头脑风暴沉淀为正式需求。
- 更新开发计划，明确下一阶段实施任务、顺序和验收标准。
- 保持项目文档和工作记录同步。

### 执行内容

- 在需求文档中补充 `/404` 信息架构和自定义 404 页面需求。
- 在视觉风格中补充微动效要求、限制和 `prefers-reduced-motion` 可访问性要求。
- 在视觉风格中补充亮色 / 暗色 / 跟随系统主题切换要求。
- 在内容维护策略中补充 JSON + TypeScript 类型定义的统一数据结构方向。
- 在开发计划中新增 Milestone 5：体验增强与内容结构统一。
- 补充数据建模、样式开发、验证、风险、扩展方向和下一阶段执行顺序。

### 修改文件

- `docs/xubo-live-requirements.md`
- `docs/xubo-live-development-plan.md`
- `docs/work-log.md`

### 验证方式

- 已确认文档更新写入成功。
- 本次只更新需求和计划文档，未修改运行时代码，未执行构建。

### 关键决策

- 下一阶段优先补齐站点完整度和体验质量，而不是引入后端或复杂集成。
- 微动效优先使用 CSS 实现，不引入额外动画库。
- 数据结构统一采用 `src/data/*.json` + `src/data/types.ts` 的方向，`profile.ts` 可短期保留，待字段稳定后再迁移。
- 主题切换需要兼顾系统偏好、持久化和首屏闪烁问题。

### 后续建议

- 下一步可按计划先实现 `src/pages/404.astro`。
- 然后梳理 `src/data/`，决定是否迁移 `profile.ts`。
- 主题切换和微动效建议作为同一轮视觉增强实现，并在构建后进行桌面端、移动端和可访问性检查。

## 2026-05-29 16:15 - sub-agent 模式实现 404、数据统一、主题切换与微动效

### 背景

用户确认可以按上一阶段需求和开发计划继续开发，并要求主动启用 sub-agent 工作模式。

### 目标

- 实现自定义 404 页面。
- 将 `profile` 内容从 TypeScript 对象迁移到 JSON 维护入口。
- 实现亮色 / 暗色 / 跟随系统主题切换。
- 增加克制的微动效，并兼容减少动态偏好。
- 运行构建验证，并同步 README 与工作记录。

### 执行内容

- Planner：按“404 页面 -> 数据结构统一 -> 主题切换 -> 微动效 -> 验证”的顺序拆分任务。
- Researcher：检查现有页面、组件、数据文件和全局样式，确认当前项目适合小步增强。
- Implementer：新增 `profile.json`，并让 `profile.ts` 作为类型化兼容导出入口。
- Implementer：新增 `ThemeToggle`、`ThemeInit`、`PageScripts` 组件，分别负责主题按钮、首屏主题初始化、页面交互脚本。
- Implementer：在首页 Hero 区域接入主题切换，并将本地时间脚本迁移到统一页面脚本组件。
- Implementer：新增 `src/pages/404.astro`，提供终端风格错误提示和返回首页入口。
- Implementer：扩展全局 CSS 变量，支持亮色主题、主题控件、404 布局、状态灯呼吸、卡片/链接 hover 和 `prefers-reduced-motion`。
- Reviewer：执行 `npm run build`，确认 Astro 构建通过并生成首页与 404 页面。
- Docs Keeper：更新 `README.md` 内容维护说明和已实现能力说明。

### 修改文件

- `README.md`
- `src/components/HeroSection.astro`
- `src/components/PageScripts.astro`
- `src/components/ThemeInit.astro`
- `src/components/ThemeToggle.astro`
- `src/data/profile.json`
- `src/data/profile.ts`
- `src/data/types.ts`
- `src/pages/404.astro`
- `src/pages/index.astro`
- `src/styles/global.css`
- `docs/work-log.md`

### 验证方式

- 已执行 `npm run build`。
- 构建成功，Astro 生成 2 个页面：`/index.html` 和 `/404.html`。
- 已通过代码检查确认主题切换入口、`profile.json`、404 页面和 `prefers-reduced-motion` 规则存在。

### 关键决策

- 不删除 `profile.ts`，而是让它从 `profile.json` 读取并导出类型化数据，降低组件改动面。
- 主题默认保留暗色基础样式；启用脚本后根据用户选择或系统偏好设置 `data-theme`。
- 主题偏好使用 `localStorage` 持久化，严格隐私环境下失败时自动降级。
- 微动效只使用 CSS，不引入额外依赖或动画库。

### 后续建议

- 在浏览器中手动检查 `System` / `Dark` / `Light` 三种主题的视觉效果。
- 检查移动端下主题切换按钮、404 页面和服务卡片布局。
- 后续可继续把 links、projects、uses 等内容模块数据化。

## 2026-05-29 17:53 - 亮色模式层次与动画效果增强

### 背景

用户反馈亮色模式下整体页面偏朴素，希望提升亮色主题的视觉层次，同时让动画效果更丰富一些。

### 目标

- 增强亮色模式下的层次感、科技感和视觉记忆点。
- 增加更明显但仍克制的动态效果。
- 保持不引入新依赖，继续兼容 `prefers-reduced-motion`。

### 执行内容

- 增加亮色主题专用的光晕、卡片高光、扫光和文字发光变量。
- 为页面背景增加多层径向渐变光晕，并添加低速漂移动画。
- 为主标题在亮色模式下增加渐变文字效果。
- 为面板增加入场动画和周期性轻扫光效果。
- 为身份卡片和服务卡片增加 hover 扫光效果。
- 增强服务卡片 hover 时的上浮、饱和度和阴影反馈。
- 保留 `prefers-reduced-motion` 规则，用户偏好减少动态时会弱化动画。

### 修改文件

- `src/styles/global.css`
- `docs/work-log.md`

### 验证方式

- 已执行 `npm run build`。
- 构建成功，Astro 生成 2 个页面：`/index.html` 和 `/404.html`。

### 关键决策

- 本轮只调整 CSS，不修改页面结构和数据结构。
- 动画增强仍以 CSS 为主，不引入动画库。
- 亮色模式通过渐变、光晕、阴影和卡片高光提升质感，而不是改变整体信息架构。

### 后续建议

- 在浏览器中重点检查 Light 主题是否仍然过亮或过花。
- 如果动画感觉过多，可降低 `panel-sheen` 频率或关闭周期性扫光，只保留 hover 动效。
- 后续可考虑给 Hero 区域增加更细腻的终端光标或命令行 typing 效果。

## 2026-05-29 18:00 - 主题策略调整为默认暗色

### 背景

用户确认不需要跟随系统主题，希望站点默认颜色固定为暗色。

### 目标

- 移除 `System` 主题选项。
- 默认主题固定为 `dark`。
- 保留 `Dark` / `Light` 手动切换。
- 继续使用 `localStorage` 持久化用户手动选择。
- 同步更新 README、需求文档、开发计划和工作记录。

### 执行内容

- 修改 `ThemeToggle`，移除 `System` 按钮，仅保留 `Dark` 和 `Light`。
- 修改 `ThemeInit`，未设置偏好时默认写入 `dark`。
- 修改 `PageScripts`，移除 `matchMedia('(prefers-color-scheme: dark)')` 和系统主题监听逻辑。
- 更新 README 中的主题能力说明。
- 更新需求文档与开发计划，将主题策略改为“默认暗色 + 亮色/暗色手动切换”。
- 执行构建验证。

### 修改文件

- `README.md`
- `docs/xubo-live-requirements.md`
- `docs/xubo-live-development-plan.md`
- `docs/work-log.md`
- `src/components/ThemeToggle.astro`
- `src/components/ThemeInit.astro`
- `src/components/PageScripts.astro`

### 验证方式

- 已检查运行代码中不存在 `data-theme-option="system"` 和 `prefers-color-scheme` 主题跟随逻辑。
- 已执行 `npm run build`。
- 构建成功，Astro 生成 2 个页面：`/index.html` 和 `/404.html`。

### 关键决策

- 暗色主题作为站点默认品牌视觉，不再跟随用户系统主题。
- 亮色主题仍作为手动可选项保留。
- 如果历史 `localStorage` 中保存过旧的 `system` 值，新逻辑会自动回退到 `dark`。

### 后续建议

- 浏览器中清空或无 `xubo-theme` 本地存储时，应默认显示暗色主题。
- 如已保存 `light`，刷新后仍应保持亮色；点击 `Dark` 后应恢复暗色并持久化。

## 2026-05-30 23:30 - 首页标题与 Hero 留白调整

### 背景

用户反馈截图中 Hero 区域留白太多，并要求将主标题从 `This is Xubo` 改为 `I'm Xubo`。

### 目标

- 收紧首页首屏 Hero 区域留白。
- 更新首页主标题文案。
- 保持改动最小化并通过构建验证。

### 执行内容

- 将 `src/data/profile.json` 中的 `title` 更新为 `I'm Xubo`。
- 移除 `.hero` 的强制 `68vh` 最小高度。
- 将 `.hero-grid` 从强制视口高度改为受控的 `margin-top: clamp(36px, 8vh, 88px)`，减少顶部大面积空白。
- 收紧 `.hero-copy` 顶部内边距。
- 执行 Astro 构建验证。

### 修改文件

- `docs/work-log.md`
- `src/data/profile.json`
- `src/styles/global.css`

### 验证方式

- 已执行 `npm run build`。
- 构建成功，Astro 生成 2 个页面：`/index.html` 和 `/404.html`。

### 关键决策

- 优先通过减少强制首屏高度解决留白问题，而不是调整内容结构。
- 保留 Hero 内部左右两栏与底部对齐的视觉关系，仅降低空白占比。

### 后续建议

- 可在浏览器中按桌面宽度复查首屏截图，若仍觉得偏空，可继续下调 `.hero-grid` 的 `margin-top` 上限或压缩标题字号。

## 2026-05-30 23:40 - 快速滚动黑框闪烁修复

### 背景

用户反馈页面快速滚动时会短暂出现黑色矩形框，截图显示异常区域类似大面板背景层的渲染残影。

### 目标

- 降低页面滚动时的 GPU 合成层与重绘压力。
- 尽量保留现有暗色玻璃风格。
- 本地构建验证并启动开发服务供用户预览。

### 执行内容

- 移除 `body` 的 `background-attachment: fixed`，避免固定背景在快速滚动时触发合成层闪烁。
- 将 `body::after` 从固定模糊动画层调整为静态绝对定位背景装饰层。
- 移除 `body::after` 的 `filter: blur(2px)` 与 `aura-drift` 动画。
- 移除大面板上的实时 `backdrop-filter: blur(18px)`，改用更高不透明度的面板背景维持视觉质感。
- 为 `.hero`、`.terminal-panel`、`.services`、`.footer` 增加 `isolation: isolate`，减少面板内部伪元素动画对外部合成层的影响。
- 执行 Astro 构建验证。

### 修改文件

- `docs/work-log.md`
- `src/styles/global.css`

### 验证方式

- 已执行 `npm run build`。
- 构建成功，Astro 生成 2 个页面：`/index.html` 和 `/404.html`。
- 待用户在本地预览服务中快速滚动复查黑框是否消失。

### 关键决策

- 优先移除最容易触发浏览器渲染残影的固定背景、模糊滤镜和大面积毛玻璃效果。
- 不删除页面结构和主要动效，仅降低高成本视觉效果。

### 后续建议

- 若仍有轻微闪烁，可进一步关闭大面板 `panel-sheen` 无限扫光动画。
- 如需恢复毛玻璃效果，建议只在小面积卡片上使用，避免应用到首屏大面板。
