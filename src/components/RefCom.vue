<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>

  </div>
</template>

<script setup lang="ts">

/** 定义props */
defineProps<{
  msg: string
}>()

/** 出发父组件事件 */
const handleDoSomething = () => {
  console.log("%c [  ]-18", "font-size:13px; background:pink; color:#bf2c9f;", )
  ElNotification({
    title: 'Prompt',
    message: '父组件通过ref调用子组件方法',
  })
  ElMessage('父组件通过ref调用子组件方法')
}

defineExpose({
  handleDoSomething,
})
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
