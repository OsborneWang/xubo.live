<template>
  <article class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 dark:border-gray-700">
    <router-link :to="`/article/${article.slug}`" class="block">
      <h2 class="text-2xl font-bold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
        {{ article.title }}
      </h2>
      <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
        <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        <span v-if="article.tags && article.tags.length > 0" class="ml-4">
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded mr-2"
          >
            {{ tag }}
          </span>
        </span>
      </div>
      <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
        {{ article.excerpt }}
      </p>
    </router-link>
  </article>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

