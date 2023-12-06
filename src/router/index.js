import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/post/:uid',
      name: 'post',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/standing',
      name: 'standing',
      component: () => import('../views/StandingsView.vue')
    },
  ]
})

export default router
