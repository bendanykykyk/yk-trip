import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/favor',
      name: 'favor',
      component: () => import('@/views/favor/favor.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: () => import('@/views/order/order.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/profile/profile.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('@/views/city/city.vue'),
      meta: {
        isTabbarHidden: true
      }
    }
  ]
})

export default router
