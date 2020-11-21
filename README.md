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

## 技术栈
* [Vue3.0](https://cn.vuejs.org/)
* [TypeScript](https://www.tslang.cn/)
* [Dart Scss](https://sass-lang.com/)
* [Mocha](https://mochajs.org/) + [chai](https://www.chaijs.com/)
* [Eslint](https://eslint.bootcss.com/)

## 目录结构
```bash
.
├─ README.md
├─ package.json
├─ docs # 组件使用文档
│  └─ button.md
├─ packages # 组件源码
│  ├─ button # 单组件
│  │  ├─ src
│  │  │  └─ button.vue
│  │  └─ axe.umd.js
│  └─ axe.umd.js # 全部组件入口
├─ public
│  ├─ img
│  │  └─ icons # 存放pwa 图标
│  ├─ favicon.ico
│  ├─ index.html
│  └─ robots.txt
├─ src # demo样式
│  ├─ components # 存放单元组件使用Demo
│  ├─ App.vue
│  └─ main.ts
├─ styles # 组件样式
│  ├─ common
│  │  ├─ _var.scss # 全局scss变量
│  │  └─ xxx.scss
│  ├─ mixin # 混合
│  │  └─ xxx.scss
│  └─ button.scss # 组件单样式
└─ tests
   └─ utils # 单元测试
      └─ xx.spec.ts # xx模块测试文件
```
## 依赖安装
### 1、环境要求
- `no`de``： 8.9+ (推荐 10+)
- `npm`： 6+

> Vue CLI  requires [Node.js](https://nodejs.org/en/) version 8.9 or above (v10+ recommended). You can manage multiple versions of Node on the same machine with [n](https://github.com/tj/n), [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows). 

### 2、升级cli
本项目是使用vue-cli搭建项目框架，需要用vue3，得先把vue-cli的版本升级到`vue-cli@4.5`以上：
```
npm install -g @vue/cli
```
> 因为不更新版本直接install，会报[vue-loader-v16](https://github.com/vuejs/vue-cli/pull/5718#issuecomment-673360542)相关的错。但是这个问题在[vue-cli@4.5.1修复](https://github.com/vuejs/vue-cli/blob/dev/CHANGELOG.md#bug-bug-fix-7)了。所以推荐更新的到最新版～

### 3、安装依赖：
```
npm install
```
## host配置
因为服务启动后需要访问域名，故可以先进行配置：

```
#### axe-ui
127.0.0.1 dev.axe-ui.com
```
## 开始开发
### 启动文档平台
整个axe-ui平台启动，适用源码开发、文档编写。
```
npm run serve
# or
npm run dev
```

### 浏览地址
启动成功后在浏览器中打开 http://dev.axe-ui.com:8080/  导航至相应组件即可进行开发。

源码地址：`packages/`

## 开发完成后  
• 如果是修复 bug，请确保该组件的其他功能没有受到本修复的影响。  
• 如果是新增功能，请在文档中补充该功能的 API 说明，并在 TypeScript 定义中添加该 API。视功能的复杂程度，有时还需要添加测试用例和文档例子。  

## 单元测试
在提交代码前，建议首先在本地运行一遍测试。  
使用下列命令，即可进行测试，并且在你改变代码后会再次触发测试。
```
npm run test:unit
```

## 代码校验和修复
```
npm run lint
```
## 提交代码
在 commit 代码时，commit message 请遵循以下格式：
```
<Commit 类型>: <commit 描述>
```
**commit 类型可以是：**  
• `Tree`：如果本次 commit 修复了某个组件的 bug，或为某个组件添加了 feature，则 commit 类型为该组件的名称  
• `Docs`：本次 commit 与文档相关，如优化了文档某处语言描述、新增了一个例子  
• `Chore`：本次 commit 与构建、CI 相关，如修改了 webpack 配置、修改了发布脚本  
• `Utils`：本次 commit 修改了 src/utils 中的某些内容  
• `Test`：本次 commit 修改了 test 中的某些内容  
• `Changelog`：一般仅在发布新版本前出现，表示新增了本次发布的更新说明  


## 生产环境（打包+压缩）
生成dist文件

```
npm run build
```

## 自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).

