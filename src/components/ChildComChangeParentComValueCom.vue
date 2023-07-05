<template>
  <h1>---------------------华丽分割线------------------------------</h1>
  <el-button type="primary" @click="updateValue">在子组件修改父组件的值</el-button>
  <div>我是子组件，我的value={{ value }}</div>
</template>

<script setup lang="ts">
const emit = defineEmits(["update:value"])

defineProps<{
  value: number
}>()


const updateValue = () => {
  emit("update:value", Math.random())
}
</script>
