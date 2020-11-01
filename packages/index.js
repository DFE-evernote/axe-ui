/*
 * @Author: your name
 * @Date: 2020-11-01 00:27:12
 * @LastEditTime: 2020-11-01 12:41:00
 * @LastEditors: @Guojufeng
 * @Description: In User Settings Edit
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/packages/index.js
 */
import GjfButton from './button/'
import GjfIcon from './icon/'
console.log(GjfButton, GjfIcon)
const components = [GjfButton, GjfIcon]

var install = (app, opts = {}) => {
  components.forEach(item => {
    app.component(item.name, item)
  })

  app.$GJF = {
    size: opts.size || '',
    zIndex: opts.zIndex || 1000
  }
}

export default {
  // 全局导出
  version: '1.0.0',
  install,
  GjfButton, // 单独导出button组件用于按需加载
  GjfIcon
}
