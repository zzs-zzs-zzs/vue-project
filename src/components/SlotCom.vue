<template>
  <div class="line">------ slot0------</div>
  <slot></slot>
  <div class="line">------ slot1------</div>
  <slot name="slot1"></slot>
  <div class="line">------ slot2------</div>
  <slot name="slot2"></slot>
</template>

<script setup lang="ts">


</script>

<style scoped>
.line {
  font-size: 30px;
  margin: 15px 0;
}
</style>
