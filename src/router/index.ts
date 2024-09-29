import Introduction from '@/views/Introduction.vue'
import Personal from '@/composable/Personal.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'introduction',
      component: Introduction
    },
    {
      path: '/personal',
      name: 'personal',
      component: Personal
    },
  ]
})

export default router
