import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/demo/demo.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/room-detail/:id',
      name: 'room-detail',
      component: () => import('@/views/room-detail/room-detail.vue'),
      meta: {
        isTabbarHidden: true
      }
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
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/search/search.vue'),
      meta: {
        isTabbarHidden: true
      }
    }
  ]
})

export default router
