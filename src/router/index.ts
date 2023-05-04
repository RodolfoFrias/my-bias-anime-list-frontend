import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'anime-list',
      component: () => import('../views/AnimeListView.vue')
    }
  ]
})

export default router
