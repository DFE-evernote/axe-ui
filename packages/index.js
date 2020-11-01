/*
 * @Author: your name
 * @Date: 2020-11-01 00:27:12
 * @LastEditTime: 2020-11-01 11:10:00
 * @LastEditors: @Guojufeng
 * @Description: In User Settings Edit
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/packages/index.js
 */

import GjfButton from './src/button.vue'
const components = [GjfButton]
var install = (app, opts = {}) => {
  components.forEach(item => {
    app.use(item.name, item)
  })
  app.$prototype.$GJF = {
    size: opts.size || '',
    zIndex: opts.zIndex || 1000
  }
}

export default {
  version: '1.0.0',
  install,
  GjfButton
}
