<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">关于我</h1>
      
      <div class="prose prose-lg dark:prose-invert max-w-none">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
          <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">个人简介</h2>
          <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            我是一名全栈开发工程师，专注于 Web 开发领域。热爱编程，喜欢学习新技术，
            享受将想法转化为现实的过程。在 Vue.js、React、Node.js 等技术栈方面有丰富的开发经验。
          </p>
          
          <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white mt-8">技能专长</h2>
          
          <div class="space-y-6 mb-6">
            <div>
              <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">前端技术</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in techStack.frontend"
                  :key="tech.name"
                  class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                >
                  {{ tech.name }}
                </span>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">后端技术</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in techStack.backend"
                  :key="tech.name"
                  class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium"
                >
                  {{ tech.name }}
                </span>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">工具与平台</h3>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in techStack.tools"
                  :key="tech.name"
                  class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium"
                >
                  {{ tech.name }}
                </span>
              </div>
            </div>
          </div>
          
          <h2 class="text-2xl font-semibold mb-4 text-gray-900 dark:text-white mt-8">联系方式</h2>
          <div class="space-y-2 text-gray-700 dark:text-gray-300">
            <p>
              <strong>邮箱：</strong>
              <a href="mailto:contact@xubo.live" class="text-blue-600 dark:text-blue-400 hover:underline">
                contact@xubo.live
              </a>
            </p>
            <p>
              <strong>GitHub：</strong>
              <a href="https://github.com/xubo" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
                github.com/xubo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { techStack } from '@/data/techStack'
</script>

