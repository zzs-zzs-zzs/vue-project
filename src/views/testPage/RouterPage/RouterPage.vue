<template>
  <h1>router.push</h1>
  <el-button type="primary" @click="handleNavigateWithQuery">跳转about页面 - query传参</el-button>
  <el-button type="primary" @click="router.back()">返回上一页</el-button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router"

const router = useRouter()

const handleNavigateWithQuery = () => {
  router.push({
    path: "/about",
    query: {
      from: "RouterPage"
    }
  })
}

</script>
