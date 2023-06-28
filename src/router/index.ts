import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

import Layout from '@/layouts/index.vue'

// const LoginRoute: RouteRecordRaw = {
//   path: '/login',
//   name: 'Login',
// }

// Basic routing without permission
// const basicRoutes = [LoginRoute, RootRoute]

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    redirect: '/dashboard/analysis',
    component: Layout,
    children: [
      {
        path: 'analysis',
        component: () => import('@/pages/dashboard/analysis/index.vue'),
        meta: { requiresAuth: true },
      },
      {
        path: 'workbench',
        component: () => import('@/pages/dashboard/workbench/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        top: 0,
        behavior: 'smooth',
      }
    }
  },
})

export default router
