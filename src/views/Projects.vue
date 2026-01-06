<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-6xl mx-auto">
      <h1 class="text-4xl font-bold mb-8 text-gray-900 dark:text-white">项目经历</h1>
      
      <div class="space-y-6">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { projects } from '@/data/projects'
import ProjectCard from '@/components/ProjectCard.vue'
</script>

