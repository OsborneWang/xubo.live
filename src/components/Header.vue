<template>
  <header class="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <router-link to="/" class="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            xubo.live
          </router-link>
          <div class="hidden md:flex items-center space-x-6">
            <router-link
              to="/"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              active-class="text-blue-600 dark:text-blue-400 font-semibold"
            >
              首页
            </router-link>
            <router-link
              to="/projects"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              active-class="text-blue-600 dark:text-blue-400 font-semibold"
            >
              项目
            </router-link>
            <router-link
              to="/about"
              class="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              active-class="text-blue-600 dark:text-blue-400 font-semibold"
            >
              关于
            </router-link>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue'
</script>

