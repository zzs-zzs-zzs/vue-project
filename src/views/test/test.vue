<template>
  <div class="test">
    <h1>This is an test page</h1>
  </div>
</template>

<script setup lang="ts">
console.log("%c [  ]-9", "font-size:13px; background:pink; color:#bf2c9f;", )
</script>

<style>
@media (min-width: 1024px) {
  .test {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
