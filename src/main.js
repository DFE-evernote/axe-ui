/*
 * @Author: @Guojufeng
 * @Date: 2020-11-01 00:12:31
 * @LastEditors: @Guojufeng
 * @LastEditTime: 2020-11-01 12:56:20
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/src/main.js
 */
import { createApp } from 'vue'
import App from './App.vue'

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
