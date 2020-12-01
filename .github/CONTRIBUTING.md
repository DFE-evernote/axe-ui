# axe-ui贡献文档

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
### 1、环境和工具要求
- `node`： 8.9+ (推荐 10+)
- `npm`： 6+
- **`MinGW`**：最新即可，安装教程参照[MinGW的安装与make命令的使用](https://github.com/DFE-evernote/axe-ui/issues/28)
- [`git-cz`](https://github.com/streamich/git-cz): 最新版

> Vue CLI  requires [Node.js](https://nodejs.org/en/) version 8.9 or above (v10+ recommended). You can manage multiple versions of Node on the same machine with [n](https://github.com/tj/n), [nvm](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows). 

### 2-1、升级cli【必要！】
本项目是使用vue-cli搭建项目框架，需要用vue3，得先把vue-cli的版本升级到`vue-cli@4.5`以上：
```sh
npm install -g @vue/cli
```
> 因为不更新版本直接install，会报[vue-loader-v16](https://github.com/vuejs/vue-cli/pull/5718#issuecomment-673360542)相关的错。但是这个问题在[vue-cli@4.5.1修复](https://github.com/vuejs/vue-cli/blob/dev/CHANGELOG.md#bug-bug-fix-7)了。所以推荐更新的到最新版～

可以先使用`vue --version`命令来查看下版本，如果不是4.5+的请一定升级。
### 2-2、配置工具环境
`git-cz`用于代替“git commit”，启用`commitizen`来交互式地生成更符合规范的commit信息。

全局安装命令如下：
```sh
npm install -g git-cz
```

### 3、安装/更新依赖：
```sh
npm install
# or
make install
# or
make install-cn # 用淘宝镜像安装
```
## host配置
因为服务启动后需要访问域名，故可以先进行配置：

```
#### axe-ui
127.0.0.1 dev.axe-ui.com
```
## 开始开发
### 自动化创建新组件
```sh
make new <component-name> [组件中文名]
```
`component-name`：组件名，中横线命名法。如：button、button-group
`组件中文名`：可选，建议有。

```sh
# demo：
make new radio 单选框

make new radio-group 单选框组
```
**强烈推荐使用make命令开发**！关于`make`命令的使用见这里[MinGW的安装与make命令的使用](https://github.com/DFE-evernote/axe-ui/issues/28)


### 启动文档平台
整个axe-ui平台启动，适用源码开发、文档编写。
```sh
npm run serve
# or
npm run dev
# or
make dev
```

### 浏览地址
启动成功后在浏览器中打开 http://dev.axe-ui.com:8080/  导航至相应组件即可进行开发。

源码地址：`packages/`

### 开发中规范与注意事项
[开发中请注意这些问题和遵守这些代码规范](https://github.com/DFE-evernote/axe-ui/issues/37)

## 开发完成后  
• 如果是修复 bug，请确保该组件的其他功能没有受到本修复的影响。  
• 如果是新增功能，请在文档中补充该功能的 API 说明，并在 TypeScript 定义中添加该 API。视功能的复杂程度，有时还需要添加测试用例和文档例子。  

## 单元测试
在提交代码前，建议首先在本地运行一遍测试。  
使用下列命令，即可进行测试，并且在你改变代码后会再次触发测试。
```sh
npm run test:ui
# or
make test
```

## 代码校验和修复
```sh
npm run lint
```
## 提交代码
强烈推荐使用命令commit提交符合规范的信息，不再推荐使用`git commit`。
```sh
npm run commit
# or
make commit
```
交互式生成信息demo
![交互式生成信息demo](https://imgkr2.cn-bj.ufileos.com/c4c34c49-1c9c-400d-b748-2c2429e86f63.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=dEfEg%252BaVZ4g6P5eaaE%252F%252FWoPgclI%253D&Expires=1606929827)

若非要使用`git commit`，请在 commit 代码时，commit message 请遵循以下格式：
```
<Commit 类型>: <commit 描述>
```
**commit 类型只允许以下7种个标识：**  
- `feat`：新功能（feature）
- `fix`：修补bug
- `docs`：文档（documentation）
- `style`： 格式（不影响代码运行的变动）
- `refactor`：重构（即不是新增功能，也不是修改bug的代码变动）
- `test`：增加测试
- `chore`：构建过程或辅助工具的变动
> 如果type为feat和fix，则该 commit 将肯定出现在 Change log 之中。

## 生产环境（打包+压缩）
生成dist文件

```sh
npm run dist
# or
make dist
```
## 发包
请先去NPM注册一个自己的账号：[https://www.npmjs.com/](https://www.npmjs.com/)
或使用下边命令注册
```
npm adduser
```

然后在项目根目录命令行执行一键发布命令：
```sh
npm run pub
# or
make pub
```