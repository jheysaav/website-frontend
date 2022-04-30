import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/pages/Home.vue') },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
