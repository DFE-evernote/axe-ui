import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// 全局导入
import AxeUI from 'packages/index'
console.log(AxeUI)

// 按需导入
// import { AxeIcon } from 'packages/index'
// console.log(AxeIcon)
// 注册
let app = createApp(App)
app.use(AxeUI)
// app.use(AxeIcon)
app.mount('#app')
