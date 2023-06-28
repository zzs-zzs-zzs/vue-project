<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
    <div>computed执行次数{{computedMsg}}</div>
  </div>
</template>

<script setup lang="ts">
import { watch, computed, ref } from "vue"

const computedChangTime = ref(0)

/** 定义props */
const props = defineProps<{
  msg: string
}>()

/** 监听数据父组件props.msg变化 */
watch(() => props.msg, (nweVal, oldVal) => {
  console.log("%c [ nweVal, oldVal ]-19", "font-size:13px; background:pink; color:#bf2c9f;", nweVal, oldVal)
})

/** 监听props.msg修改的次数 */
const computedMsg = computed(() => {
  computedChangTime.value++
  return `${props.msg}-computed执行${computedChangTime.value}次`
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
