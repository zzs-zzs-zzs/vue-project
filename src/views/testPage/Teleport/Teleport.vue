<template>
  <el-button type="primary" @click="toggleModal">点击使用Teleport挂在元素到document上</el-button>
  <teleport to='body'>
    <div v-if="showModal" class="modal">
        <div class="modal-content">
          <h2>这是一个模态框</h2>
          <p>我在 body 元素之外渲染</p>
          <button @click="toggleModal">关闭</button>
        </div>
      </div>
  </teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const showModal = ref(false)

const toggleModal = () => {
  showModal.value = !showModal.value
}
</script>


<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px;
  color: white;
}

.modal-content {
  text-align: center;
}
</style>