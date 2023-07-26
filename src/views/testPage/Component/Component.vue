<template>
  <div>
    <el-button type="primary" @click="toggleTab('Text1')">tab1</el-button>
    <el-button type="primary" @click="toggleTab('Text2')">tab2</el-button>
  </div>
  <component :is="tab" />
  <keep-alive>
    <Text1 v-if="tab === 'Text1'" />
    <Text2 v-else />
  </keep-alive>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Text1 from '@/components/Text1.vue'
import Text2 from '@/components/Text2.vue'

const tab = ref("Text1")

const toggleTab = (value: string) => {
  console.log("%c [ value ]-17", "font-size:13px; background:pink; color:#bf2c9f;", value)
  tab.value = value
}
</script>