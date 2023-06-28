<template>
  <main>
    <el-input v-model="msg" placeholder="修改msg" />
    <ProvideEmitCom :msg="msg" @updateMsg="updateMsg" />
    <el-button @click="handleArrProps">provideData新增/修改num属性</el-button>
  </main>
</template>

<script setup lang="ts">
import ProvideEmitCom from '@/components/ProvideEmitCom.vue'
import { ref, provide, reactive } from "vue"

const msg = ref("这是provide、emitPage父子传值页")

const provideData: {
  msg: string
  num?: number
} = reactive({
  msg: "这是provide提供的数据"
})

/** provide提供数据，共子组件使用 */
provide("provideData", provideData)

/** 提供事件给子组件出发跟新msg */
const updateMsg = (data: string) => {
  console.log("%c [ data ]-15", "font-size:13px; background:pink; color:#bf2c9f;", data)
  msg.value = data
}

const handleArrProps = () => {
  provideData.num = Math.random() * 10
}
</script>

