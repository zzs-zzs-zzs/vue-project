<template>
  <SlotCom>
    <div>我是默认slot内容</div>
    <template v-slot:slot1>我是slot1内容</template>
    <template v-slot:slot2>我是slot2内容</template>
  </SlotCom>
</template>

<script setup lang="ts">
import SlotCom from "@/components/SlotCom.vue"
</script>
