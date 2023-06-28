import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: '主页',
    icon: "HomeFilled",
    component:  () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: '关于页面',
    icon: "Tickets",
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/page',
    name: 'page页面',
    icon: "Reading",
    children: [
      {
        path: 'provideEmitPage',
        name: 'provide、emit父子传值页面',
        component: () => import('../views/testPage/ProvideEmitPage/ProvideEmitPage.vue')
      },
      {
        path: 'ref',
        name: 'ref父子传值页面',
        component: () => import('../views/testPage/Ref/Ref.vue')
      },
      {
        path: 'store',
        name: 'store页面',
        component: () => import('../views/testPage/TestStore/TestStore.vue')
      },
      {
        path: 'routerPage',
        name: 'router页面',
        component: () => import('../views/testPage/RouterPage/RouterPage.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export {
  router,
  routes,
}
