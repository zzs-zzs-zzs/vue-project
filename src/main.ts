import './assets/main.css'
import * as Icons from "@element-plus/icons-vue"
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import commonStore from "@/store/commonStore"
import GlobalCom from "@/components/GlobalCom.vue"

const app = createApp(App)

// 添加全局方法
app.config.globalProperties.$reverseText = function(text: string) {
  console.log('这是自定义插件的方法' + text)
  return text.split('').reverse().join('')
}

// 注册全局指令
app.directive('focus', {
  mounted(el, binding) {
    console.log('这是自定义插件的指令 - focus', el, binding)
    el.focus()
  }
})

app.use(router)

app.use(commonStore)

// 注册全局组件
app.component("GlobalCom", GlobalCom)

app.mount('#app')

// 全局注册
Object.keys(Icons).forEach((key) => {
  app.component(key, (Icons as Record<string, any>)[key])
})