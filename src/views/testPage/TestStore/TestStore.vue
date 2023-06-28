<template>
  <div>
    <h1>testStore.state.name = {{testStore.state.name}}</h1>
    <el-input v-model="name" placeholder="修改userName" />
    <el-button @click="handleChangeName" >修改userName</el-button>
  </div>
</template>

<script setup lang="ts">
import testStore from "@/store/testStore"
import { ref } from "vue";

const name = ref(testStore.state.name)

const handleChangeName = () => {
  testStore.commit("changeName", name.value)
}


</script>

<style>
</style>
