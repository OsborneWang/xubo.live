---
title: Vite - 下一代前端构建工具
date: 2024-01-05
tags: [Vite, 构建工具, 前端]
excerpt: Vite 是一个由 Vue 作者开发的新一代前端构建工具，具有极快的开发服务器启动速度和热更新能力。
---

# Vite - 下一代前端构建工具

Vite 是一个现代化的前端构建工具，由 Vue.js 的作者尤雨溪开发。它提供了极快的开发体验和高效的构建能力。

## Vite 的优势

### 极快的开发服务器

Vite 使用原生 ES 模块，在开发时不需要打包，因此启动速度非常快：

- **冷启动**：几乎瞬间启动
- **热更新**：只更新修改的模块，速度极快
- **按需编译**：只编译当前页面需要的代码

### 优化的生产构建

在生产环境中，Vite 使用 Rollup 进行构建：

- **代码分割**：自动进行代码分割
- **Tree Shaking**：移除未使用的代码
- **资源优化**：自动优化图片等资源

## 快速开始

### 创建项目

```bash
npm create vite@latest my-app -- --template vue
cd my-app
npm install
npm run dev
```

### 项目结构

```
my-app/
├── src/
│   ├── main.js
│   ├── App.vue
│   └── components/
├── public/
├── index.html
├── vite.config.js
└── package.json
```

## 配置 Vite

### vite.config.js

```javascript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
```

## 常用功能

### 环境变量

创建 `.env` 文件：

```
VITE_API_URL=https://api.example.com
```

在代码中使用：

```javascript
const apiUrl = import.meta.env.VITE_API_URL
```

### 路径别名

在 `vite.config.js` 中配置：

```javascript
resolve: {
  alias: {
    '@': resolve(__dirname, 'src')
  }
}
```

## 插件生态

Vite 拥有丰富的插件生态：

- `@vitejs/plugin-vue` - Vue 支持
- `@vitejs/plugin-react` - React 支持
- `vite-plugin-pwa` - PWA 支持
- `vite-plugin-windicss` - Windi CSS 支持

## 总结

Vite 代表了前端构建工具的未来方向，它提供了极快的开发体验和高效的构建能力。无论是新项目还是现有项目，都值得考虑使用 Vite。

