import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import Layout from '@/layout/index.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/index.vue')
        }
      ]
    }
  ]
})

export async function setupRouter(app: App) {
  app.use(router)
  await router.isReady()
}
