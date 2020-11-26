<!-- # axe-ui -->
<p align="center">
   <img src="./axe-ui.svg">
</p>


<p align="center">
  <!-- <a href="https://travis-ci.org/DFE-evernote/axe-ui">
    <img src="https://travis-ci.org/DFE-evernote/axe-ui.svg?branch=main">
  </a>
  <a href="https://coveralls.io/github/DFE-evernote/axe-ui?branch=main">
    <img src="https://coveralls.io/repos/github/DFE-evernote/axe-ui/badge.svg?branch=main">
  </a> -->
  <!-- <a href="https://cdnjs.com/libraries/axe-ui">
    <img src="https://img.shields.io/cdnjs/v/axe-ui.svg">
  </a> -->
  <a href="https://www.npmjs.org/package/axe-ui">
    <img src="https://img.shields.io/npm/v/axe-ui.svg">
  </a>
  <a href="https://npmcharts.com/compare/axe-ui?minimal=true">
    <img src="http://img.shields.io/npm/dm/axe-ui.svg">
  </a>
  <br>
  <a href="http://img.badgesize.io/https://unpkg.com/axe-ui/dist/axe.umd.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/axe-ui/dist/axe.umd.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/axe-ui/dist/axe.css?compression=gzip&label=gzip%20size:%20CSS">
    <img src="http://img.badgesize.io/https://unpkg.com/axe-ui/dist/axe.css?compression=gzip&label=gzip%20size:%20CSS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>


<div align="center" style="margin-bottom: 50px">
   基于vue-next的一套PC端前端UI组件库
</div>

## 常用链接
- [FQA]()

## 安装
```sh
npm install axe-ui -S
```
### 快速使用
全局引入：
```sh
import { createApp } from 'vue'
import App from './App.vue'
import Axe from 'axe-ui'
import 'axe-ui/axe.css'

createApp(App).use(AxeUI).mount('#app')
```
本组件支持按需导入。你也可以像下边这样，单独导入需要的组件：
```sh
import { createApp } from 'vue'
import App from './App.vue'
import {
  Input,
  Button
  // ...其他组件
} from 'axe-ui'
import 'axe-ui/css/input/style.css'
import 'axe-ui/css/button/style.css'
let app = createApp(App)
app.component(Input.name, Input)
app.component(Button.name, Button)
app.mount('#app')
```
## 浏览器支持
- 现代浏览器
- IE 11+

## 开发文档
- [中文文档]()

## 更新日志
[release notes](https://github.com/DFE-evernote/axe-ui/releases)

## 参与贡献
在拉取代码前请先查看我们的[贡献文档](https://github.com/DFE-evernote/axe-ui/issues/19)

## 特别感谢
下面的贡献者让组件库变得更好，感谢[所有为Axe做出贡献的人](https://github.com/DFE-evernote/axe-ui/graphs/contributors)!

以贡献时间为序，感谢：  

-[Otto](https://github.com/Otto-J)



## 加入我们
[《加入axe-ui》](https://www.yuque.com/docs/share/03c22f3e-e1d0-4b8f-8f73-33921c61e8a9) 
## LICENSE
[MIT](https://github.com/DFE-evernote/axe-ui/blob/main/LICENSE)
