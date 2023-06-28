<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ route.query }}</h1>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
console.log("%c [ route ]-10", "font-size:13px; background:pink; color:#bf2c9f;", route)
</script>

