import NProgress from 'nprogress'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HelloWorld',
    component: () => import('@/pages/HelloWorld.vue'), // 注意这里要带上 文件后缀.vue
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.start()
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
