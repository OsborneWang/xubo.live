<template>
  <footer class="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
    <div class="container mx-auto px-4 py-8">
      <div class="text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {{ currentYear }} xubo.live. All rights reserved.</p>
        <p class="mt-2 text-sm">
          Built with Vue 3, Vite, and Tailwind CSS
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

