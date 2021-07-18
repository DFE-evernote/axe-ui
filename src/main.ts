import { createApp } from 'vue'
import App from './App.vue'
import './index.scss'
// 全局导入
import AxeUI from 'packages/index'
// console.log(AxeUI)
// 按需导入
// import { AxeIcon } from 'packages/index'
// console.log(AxeIcon)
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// 注册
const app = createApp(App)
app.use(AxeUI)
// app.use(AxeIcon)
app.component('axe-header', Header).component('axe-footer', Footer)
app.mount('#app')
