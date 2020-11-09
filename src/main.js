import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// 全局导入
import xingorg1UI from 'packages/index'
console.log(xingorg1UI)

// 按需导入
// import { GjfIcon } from 'packages/index'
// console.log(GjfIcon)
// 注册
let app = createApp(App)
app.use(xingorg1UI)
// app.use(GjfIcon)
app.mount('#app')
