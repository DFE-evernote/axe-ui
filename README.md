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
   一套基于Vue3.0 + TS的PC端开源组件库
   <br>
</div>

## 简介

Axe-ui是一套基于Vue3.0 + TS的PC端开源组件库。使用了最新的`vue3`、`TypeScript`等主流技术开发，开箱即用。

欢迎大家一起参与共建。一起学习一起成长 ~ !

## 特性

- **最新技术栈**：使用 Vue3 前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
<!--TODO: 
- **主题**：可配置的主题
- **国际化**：内置完善的国际化方案
-->

## 安装
```bash
npm install axe-ui -S
```
### 快速使用
**全局引入**：
```js
import { createApp } from 'vue'
import App from './App.vue'
import Axe from 'axe-ui'
import 'axe-ui/dist/axe.css'

createApp(App).use(Axe).mount('#app')
```
本组件支持**按需导入**。你也可以像下边这样，单独导入需要的组件：
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
本地开发推荐使用Chrome 80+ 浏览器

支持现代浏览器, 不支持 IE


| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt=" Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| :-: | :-: | :-: | :-: | :-: |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 开发文档
- [组件使用官方文档](https://www.yuque.com/axe-ui/docs)

## 常用链接
- [常见问题 - FQA](https://www.yuque.com/axe-ui/docs/fqa)

## 更新日志
- [release notes](https://github.com/DFE-evernote/axe-ui/releases)

## 参与贡献
**如何贡献**：提一个 Issue 或者提交一个 Pull Request。

**贡献指南：** Axe热烈欢迎你的参与！在编写代码前，烦请请先阅读我们的[贡献指南](https://github.com/DFE-evernote/axe-ui/issues/19)。他记录了所有的贡献须知，可以让你更快上手源码库。


**Pull Request:**
- Fork 代码!
- 创建自己的分支: git checkout -b feat/branchName
- 提交你的修改: git commit -am 'feat(function): add xxxxx'
- 推送您的分支: git push origin feat/branchName
- 提交pull request
- 代码review
- merged ！！

## 特别感谢
下面的贡献者让组件库变得更好，感谢[所有为Axe做出贡献的人](https://github.com/DFE-evernote/axe-ui/graphs/contributors)!

以贡献时间为序，感谢：  

- [@Otto](https://github.com/Otto-J)
- [@hefeng6500](https://github.com/hefeng6500)

## 加入我们
`axe-ui` 是完全开源免费的项目。为帮助开发者更方便地进行使用和参与贡献，我们创建了微信交流群。有任何使用、开发等问题欢迎在群内提问。

加入有几下几种方式：
- [看文档《加入axe-ui》](https://www.yuque.com/docs/share/03c22f3e-e1d0-4b8f-8f73-33921c61e8a9) 

- 搜索QQ群加入：762096000 【可先扫下方微信二维码，若过期再进此群，由我拉你进微信交流群。】
![axe-ui交流群临时中转站](https://cdn.jsdelivr.net/gh/xingorg1/xingorg1Blog/2021-7-19/1626667477203-image.png)

- 微信交流群：（若过期可通过微信公众号或者QQ群联系我们）
![axe-ui组件研发群](https://cdn.jsdelivr.net/gh/xingorg1/xingorg1Blog/2021-7-18/1626620750240-image.png)

## LICENSE
[MIT](https://github.com/DFE-evernote/axe-ui/blob/main/LICENSE)
