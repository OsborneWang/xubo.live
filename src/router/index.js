import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Article from '@/views/Article.vue'
import Projects from '@/views/Projects.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/article/:slug',
    name: 'Article',
    component: Article
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

