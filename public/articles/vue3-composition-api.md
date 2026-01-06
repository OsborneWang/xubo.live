---
title: Vue 3 Composition API 深入理解
date: 2024-01-15
tags: [Vue, JavaScript, 前端]
excerpt: Vue 3 的 Composition API 为组件逻辑复用和代码组织提供了全新的方式，本文将深入探讨其核心概念和最佳实践。
---

# Vue 3 Composition API 深入理解

Vue 3 引入了 Composition API，这是一个全新的组件逻辑组织方式。相比 Options API，Composition API 提供了更好的逻辑复用和代码组织能力。

## 什么是 Composition API？

Composition API 是一组基于函数的 API，允许你使用函数而不是声明选项来编写组件逻辑。它主要包括：

- `setup()` 函数
- 响应式 API（`ref`, `reactive`）
- 生命周期钩子
- 计算属性和监听器

## 核心概念

### ref 和 reactive

`ref` 用于创建响应式的原始值：

```javascript
import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0
```

`reactive` 用于创建响应式的对象：

```javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  name: 'Vue 3'
})
```

### 计算属性

使用 `computed` 创建计算属性：

```javascript
import { ref, computed } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)
```

### 生命周期钩子

Composition API 提供了对应的生命周期钩子：

```javascript
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  console.log('组件已挂载')
})

onUnmounted(() => {
  console.log('组件已卸载')
})
```

## 优势

1. **更好的逻辑复用**：通过组合函数，可以轻松地在多个组件间共享逻辑
2. **更好的类型推断**：TypeScript 支持更好
3. **更灵活的代码组织**：可以按功能组织代码，而不是按选项类型

## 最佳实践

1. 使用 `<script setup>` 语法糖简化代码
2. 将相关逻辑组织在一起
3. 使用组合函数（composables）提取可复用逻辑

## 总结

Composition API 是 Vue 3 的重要特性，它提供了更灵活和强大的方式来组织组件逻辑。虽然学习曲线可能较陡，但一旦掌握，将大大提高开发效率。

