<template>
  <div>我是父组件，我的arr={{ arr }}</div>
  <div>我是父组件，我的obj={{ obj }}</div>
  <ChildComChangeParentComValue1Com :arr="arr" :obj="obj" />
</template>Value

<script setup lang="ts">
import ChildComChangeParentComValue1Com from "@/components/ChildComChangeParentComValue1Com.vue"
import { ref, reactive } from "vue"

const arr = ref([1, 2, 3, 4, 5])
const obj = reactive({
  num: 18,
})
</script>
