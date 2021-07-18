<!-- # axe-ui -->
<p align="center">
   <img src="https://cdn.jsdelivr.net/gh/xingorg1/xingorg1Blog/2020-11-27/1606489720679-axe-ui.svg" width="50%">
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
   Axe-ui是一套基于Vue3.0 + TS的PC端开源组件库。
   <br>欢迎大家一起参与共建。一起学习一起成长 ~ !
</div>

## 常用链接
- [常见问题 - FQA](https://www.yuque.com/axe-ui/docs/fqa)

## 安装
```sh
npm install axe-ui -S
```
### 快速使用
全局引入：
```js
import { createApp } from 'vue'
import App from './App.vue'
import Axe from 'axe-ui'
import 'axe-ui/dist/axe.css'

createApp(App).use(Axe).mount('#app')
```
本组件支持按需导入。你也可以像下边这样，单独导入需要的组件：
```js
import { createApp } from 'vue'
import App from './App.vue'
import { AxeInput, AxeButton /* ...其他组件 */ } from 'axe-ui'
// 或者：import AxeButton from 'axe-ui/dist/lib/button/index.js';
import 'axe-ui/dist/css/input/style.css'
import 'axe-ui/dist/css/button/style.css'

const app = createApp(App)
app.component(AxeInput.name, AxeInput)
app.component(AxeButton.name, AxeButton)

/* or
 * app.use(AxeInput)
 * app.use(AxeButton)
 */

app.mount('#app')
```
## 浏览器支持
- 现代浏览器
- IE 11+

## 开发文档
- [官方文档](https://www.yuque.com/axe-ui/docs)

## 更新日志
- [release notes](https://github.com/DFE-evernote/axe-ui/releases)

## 参与贡献
Axe强烈欢迎你的参与，在编写代码前，烦请请先阅读我们的[贡献指南](https://github.com/DFE-evernote/axe-ui/issues/19)。他记录了所有的贡献须知，可以让你更快上手源码库。

## 特别感谢
下面的贡献者让组件库变得更好，感谢[所有为Axe做出贡献的人](https://github.com/DFE-evernote/axe-ui/graphs/contributors)!

以贡献时间为序，感谢：  

- [@Otto](https://github.com/Otto-J)
- [@hefeng6500](https://github.com/hefeng6500)



## 加入我们
- [《加入axe-ui》](https://www.yuque.com/docs/share/03c22f3e-e1d0-4b8f-8f73-33921c61e8a9) 

- 微信交流群：
![axe-ui组件研发群](https://cdn.jsdelivr.net/gh/xingorg1/xingorg1Blog/2021-7-18/1626620750240-image.png)


## LICENSE
[MIT](https://github.com/DFE-evernote/axe-ui/blob/main/LICENSE)
