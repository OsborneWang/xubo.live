<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="loading" class="text-center py-12">
      <p class="text-gray-600 dark:text-gray-400">加载中...</p>
    </div>
    
    <div v-else-if="!article" class="text-center py-12">
      <p class="text-gray-600 dark:text-gray-400">文章未找到</p>
      <router-link to="/" class="text-blue-600 dark:text-blue-400 hover:underline mt-4 inline-block">
        返回首页
      </router-link>
    </div>
    
    <article v-else class="max-w-4xl mx-auto">
      <header class="mb-8">
        <h1 class="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          {{ article.title }}
        </h1>
        <div class="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
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
      </header>
      
      <div
        class="prose prose-lg dark:prose-invert max-w-none"
        v-html="articleHtml"
      ></div>
    </article>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getArticle } from '@/utils/articles'
import { parseMarkdown } from '@/utils/markdown'

const route = useRoute()
const article = ref(null)
const articleHtml = ref('')
const loading = ref(true)

onMounted(async () => {
  try {
    const slug = route.params.slug
    const data = await getArticle(slug)
    
    if (data) {
      article.value = data
      articleHtml.value = parseMarkdown(data.content)
    }
  } catch (error) {
    console.error('加载文章失败:', error)
  } finally {
    loading.value = false
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

