<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <el-button type="primary" @click="updateMsg">点击修改父组件msg</el-button>
    <div>injectData: {{injectData}}</div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue"

/** 定义props */
const props = defineProps<{
  msg: string
}>()

/** 定义emit事件 */
const emit = defineEmits(["updateMsg"])

/** 获取通过provide传下来的数据 */
const injectData = inject("provideData")

/** 出发父组件事件 */
const updateMsg = () => {
  emit("updateMsg", `${props.msg} - (${new Date().toLocaleString()})`)
}
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
