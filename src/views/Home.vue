<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">最新文章</h1>
      
      <div v-if="loading" class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400">加载中...</p>
      </div>
      
      <div v-else-if="articles.length === 0" class="text-center py-12">
        <p class="text-gray-600 dark:text-gray-400">暂无文章</p>
      </div>
      
      <div v-else class="space-y-6">
        <ArticleCard
          v-for="article in articles"
          :key="article.slug"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getArticles } from '@/utils/articles'
import ArticleCard from '@/components/ArticleCard.vue'

const articles = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    articles.value = await getArticles()
  } catch (error) {
    console.error('加载文章失败:', error)
  } finally {
    loading.value = false
  }
})
</script>

