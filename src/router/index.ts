import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import { Layout } from '@/layout/index'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: '/home',
          name: 'Home',
          component: () => import('@/views/home/index.vue')
        }
      ]
    }
  ]
})

export function setupRouter(app: App) {
  app.use(router)
}

export default router
