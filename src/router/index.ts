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
      {
        path: 'slotPage',
        name: 'slot页面',
        component: () => import('../views/testPage/SlotPage/SlotPage.vue')
      },
      {
        path: 'ChildComChangeParentComValue',
        name: 'v-model:xxx传值，子组件修改父组件值',
        component: () => import('../views/testPage/ChildComChangeParentComValue/ChildComChangeParentComValue.vue')
      },
      {
        path: 'ChildComChangeParentComValue1',
        name: '引用类型，子组件修改父组件值',
        component: () => import('../views/testPage/ChildComChangeParentComValue1/ChildComChangeParentComValue1.vue')
      },
      {
        path: 'Teleport',
        name: 'Teleport将元素挂载到body上',
        component: () => import('../views/testPage/Teleport/Teleport.vue')
      },
      {
        path: 'Component',
        name: 'Component内置组件',
        component: () => import('../views/testPage/Component/Component.vue')
      },
      {
        path: 'GlobalComPage',
        name: '全局注册组件',
        component: () => import('../views/testPage/GlobalComPage/GlobalComPage.vue')
      },
    ]
  },
  {
    path: '/noFound',
    component: () => import('../views/NoFount.vue')
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
