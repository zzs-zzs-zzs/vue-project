<template>
  <h1>---------------------华丽分割线  下面是子组件------------------------------</h1>
  <el-button @click="handleChangeData">修改数据</el-button>
</template>

<script setup lang="ts">
const props = defineProps<{
  arr: number[]
  obj: {
    num: number
  }
}>()

const handleChangeData = () => {
  props.arr.push(props.arr.length + 1)
  props.obj.num = Math.random()

}

</script>
