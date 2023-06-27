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
        path: 'test',
        name: 'test页面',
        component: () => import('../views/test/test.vue')
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
