import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/views/HelloWorld.vue') },
  { path: '/setup', component: () => import('@/views/SetUp.vue') },
  {
    path: '/about',
    components: {
      default: () => import('@/views/AboutShow.vue'),
      LeftSidebar: () => import('@/components/SidebarOne.vue'),
      RightSidebar: () => import('@/components/SidebarTwo.vue'),
    },
  },
  {
    path: '/posts/:id',
    components: {
      default: () => import('@/views/PostShow.vue'),
      LeftSidebar: () => import('@/components/SidebarOne.vue'),
    },
  },
  {
    path: '/posts/',
    components: {
      default: () => import('@/views/PostIndex.vue'),
    },
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
