<template>
  <main>
    <el-input v-model="msg" placeholder="修改msg" />
    <HelloWorld :msg="msg" @updateMsg="updateMsg" />
    <div class="line">---------------------------华丽分割线--------------------------------------</div>
    <el-input v-model="userName" placeholder="修改userName" />
    <el-button @click="handleChangeUserName" >修改userName</el-button>
    <el-button @click="handleChangeUserNameAsync" >通过actions异步修改修改userName</el-button>
    <div class="line">userName={{ commonStore.state.userName }}</div>
  </main>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { ref, provide, reactive } from "vue"
import { useStore } from "vuex"

const commonStore = useStore()

const msg = ref("这是首页")

const userName = ref(commonStore.state.userName)

const provideData = reactive({
  msg: "这是provide提供的数据"
})

/** provide提供数据，共子组件使用 */
provide("provideData", provideData)

/** 提供事件给子组件出发跟新msg */
const updateMsg = (data: string) => {
  console.log("%c [ data ]-15", "font-size:13px; background:pink; color:#bf2c9f;", data)
  msg.value = data
}

/** 通过mutations直接修改userName */
const handleChangeUserName = () => {
  console.log("%c [  ]-39", "font-size:13px; background:pink; color:#bf2c9f;", )
  commonStore.commit("changeUserName", userName.value)
}

/** 通过actions直接修改userName */
const handleChangeUserNameAsync = () => {
  console.log("%c [  ]-45", "font-size:13px; background:pink; color:#bf2c9f;", )
  commonStore.dispatch("changeUserNameAction", userName.value)
}
</script>

<style scoped>
.line {
  margin: 10px 0;
}
</style>