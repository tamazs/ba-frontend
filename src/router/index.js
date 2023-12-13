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
      path: '/blogs',
      name: 'blogs',
      component: () => import('../views/BlogsView.vue')
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
    {
      path: '/videos',
      name: 'videos',
      component: () => import('../views/VideosView.vue')
    },
    {
      path: '/video/:uid',
      name: 'video',
      component: () => import('../views/VideoView.vue')
    },
    {
      path: '/images',
      name: 'images',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/gallery/:uid',
      name: 'gallery',
      component: () => import('../views/GallerySingleView.vue')
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import('../views/TeamsView.vue')
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // If there is a saved position, scroll to that position
      return savedPosition;
    } else if (to.hash) {
      // If the target route has a hash, scroll to the element with that ID
      return { el: to.hash, behavior: 'smooth' };
    } else {
      // If there is no saved position and no hash, scroll to the top of the page
      return { top: 0, behavior: 'smooth' };
    }
  }
})

export default router
