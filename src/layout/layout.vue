<template>
  <div class="layout">
    <!-- 左侧菜单 -->
    <el-aside width="200px">
      <el-menu :default-active="activeMenu" mode="vertical" class="el-menu-vertical" active-text-color="#ffd04b"
        background-color="#545c64" text-color="#fff">
        <template v-for="route in routes">
          <el-sub-menu v-if="route.children" :index="route.path">
            <template #title>
              <el-tooltip :content="route.name" placement="right" :offset="55">
                <div class="menu-title">
                  <div class="menu-icon">
                    <component :is="route.icon" style="width: 18px; height: 18px; padding-right: 5px;"></component>
                  </div>
                  <div class="menu-title-text ellipsis-title-text">{{ route.name }}</div>
                </div>
              </el-tooltip>
            </template>
            <el-tooltip v-for="childRoute in route.children" :key="childRoute.path" :content="childRoute.name" placement="right">
              <el-menu-item class="long-text" :index="`${route.path}/${childRoute.path}`" @click="handleRouteClick(`${route.path}/${childRoute.path}`)">
                {{ childRoute.name }}
              </el-menu-item>
            </el-tooltip>
          </el-sub-menu>
          <el-tooltip v-else-if="route.name" :content="route.name" placement="right">
            <el-menu-item :key="route.path" :index="route.path" @click="handleRouteClick(route.path)">
              <template #title>
                <div class="menu-title">
                  <div class="menu-icon">
                    <component :is="route.icon" style="width: 18px; height: 18px; padding-right: 5px;"></component>
                  </div>
                  <div class="menu-title-text">{{ route.name }}</div>
                </div>
              </template>
            </el-menu-item>
          </el-tooltip>
        </template>
      </el-menu>
    </el-aside>

    <!-- 右侧内容 -->
    <el-container>
      <!-- 头部导航栏 -->
      <el-header height="60px">
        <!-- 头部内容 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <!-- 面包屑项 -->
          <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="item.name" :index="index">{{ item.name }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="user-name">{{commonStore.state.userName}}</div>
      </el-header>

      <!-- 主体内容 -->
      <el-main>
        <slot></slot>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { routes } from "@/router/index"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "vuex"

const activeMenu = ref()

const breadcrumbList = ref<IBreadcrumbList[]>([])

const router = useRouter()

const commonStore = useStore()

router.beforeEach(async (to, from, next) => {
  const path = to.path
  const routerList = getAllRouterList()
  if (!routerList.includes(path)) {
    console.log("%c [  ]-81", "font-size:13px; background:pink; color:#bf2c9f;", )
    next("/noFound")
    return
  }
  console.log("%c [ fullPath ]-65", "font-size:13px; background:pink; color:#bf2c9f;", to.path)
  initRoute(path)
  activeMenu.value = path
  next()
})

const getAllRouterList = (): string[] => {
  const routerArr: string[] = []
  routes.forEach((item) => {
    if (item?.children?.length) {
      item.children.forEach((element) => {
        routerArr.push(`${item.path}/${element.path}`)
      })
    } else {
      routerArr.push(item.path!)
    }
  })
  return routerArr
}

const initRoute = (path: string) => {
  setBreadcrumbList(path)
}

const handleRouteClick = (path: string) => {
  console.log("%c [ path ]-55", "font-size:13px; background:pink; color:#bf2c9f;", path)
  // 在此处执行路由导航操作，例如使用 Vue Router 的编程式导航
  router.push(path)
  setBreadcrumbList(path)
  console.log("%c [  ]-79", "font-size:13px; background:pink; color:#bf2c9f;", activeMenu.value)
}

const setBreadcrumbList = (path: string) => {
  const paths = path.split("/")
  paths.shift()
  breadcrumbList.value = paths.map((item) => { return { name: item.split("?")[0] } })
}

</script>

<style>
.layout {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
}

.el-aside {
  height: 100vh;
}

.el-header {
  background-color: white;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.el-main {
  margin: 20px;
  overflow-y: auto;
  background: white;
}

.el-menu-vertical {
  width: 200px;
  height: 100%;
  overflow-x: hidden;
}
.long-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap !important;
  display: block;
}
.menu-title {
  display: flex;
  align-items: center;
  min-width: 135px;
}
.menu-title-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 145px;
}
.ellipsis-title-text {
  max-width: 135px;
}
.menu-icon {
  display: flex;
  align-items: center;
  position: relative;
  top: 1px;
}
.user-name {
  display: flex;
  align-items: center;
  padding-right: 5px;
  cursor: pointer;
}

</style>
