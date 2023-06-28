<template>
  <RefCom msg="这是ref与子组件通信页面" ref="childRef" />
  <el-button @click="handleUpdateChildFunc">通过ref调用子组件方法</el-button>
</template>

<script setup lang="ts">
import RefCom from '@/components/RefCom.vue'
import { ref } from "vue"

const childRef = ref<{ handleDoSomething: () => void }>()

const handleUpdateChildFunc = () => {
  console.log("%c [  ]-15", "font-size:13px; background:pink; color:#bf2c9f;", childRef.value)
  childRef.value?.handleDoSomething()
}
</script>
