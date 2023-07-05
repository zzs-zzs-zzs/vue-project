<template>
  <div>我是父组件，我的value={{ value }}</div>
  <ChildComChangeParentComValueCom v-model:value="value" />
</template>Value

<script setup lang="ts">
// .sync在vue3已经移除，使用v-model:xxx代替，触发的方式不变
import ChildComChangeParentComValueCom from "@/components/ChildComChangeParentComValueCom.vue"
import { ref } from "vue"

const value = ref(Math.random())
</script>
