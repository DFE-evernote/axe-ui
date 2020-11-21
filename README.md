<!-- # axe-ui -->
<div style="text-align:center; margin: -100px 0">
   <img src="./src/assets/images/logo.svg">
</div>

<div style="text-align:center;margin-bottom: 50px">
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
│  │  └─ index.js
│  └─ index.js # 全部组件入口
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

本项目是使用vue-cli搭建项目框架，需要用vue3，得先把vue-cli的版本升级到vue-cli@5以上：
```
npm install -g @vue/cli
```
然后在 Vue 项目运行：
```
vue upgrade --next
```
最后安装依赖：
```
npm install
```
## host配置
因为服务启动后需要访问域名，故可以先进行配置：

```
#### axe-ui
127.0.0.1 dev.axe-ui.com
```
## 开发环境（编译+热更新）
```
npm run serve
# or
npm run dev
```

## 生产环境（打包+压缩）
```
npm run build
```

## 单元测试
```
npm run test:unit
```

## 代码校验和修复
```
npm run lint
```

## 自定义配置
See [Configuration Reference](https://cli.vuejs.org/config/).

