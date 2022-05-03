import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/pages/NotFoundPage.vue'),
  },
  { path: '/', component: () => import('@/pages/HomePage.vue') },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
