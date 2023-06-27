import './assets/main.css'
import * as Icons from "@element-plus/icons-vue"
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

// 全局注册
Object.keys(Icons).forEach((key) => {
  app.component(key, (Icons as Record<string, any>)[key])
})