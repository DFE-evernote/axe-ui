/*
 * @Author: guojufeng
 * @Date: 2020-11-01 00:12:31
 * @LastEditors: @Guojufeng
 * @LastEditTime: 2020-11-01 11:08:34
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/packages/button/index.js
 *
 *
 *
 *                   江城子 . 程序员之歌
 *
 *               十年生死两茫茫，写程序，到天亮。
 *                   千行代码，Bug何处藏。
 *               纵使上线又怎样，朝令改，夕断肠。
 *
 *               领导每天新想法，天天改，日日忙。
 *                   相顾无言，惟有泪千行。
 *               每晚灯火阑珊处，夜难寐，加班狂。
 *
 */

import GjfButton from './src/button.vue' // 导入组件

GjfButton.install = app => {
  // 组件install属性
  app.use(GjfButton.name, GjfButton) // 注册组件-vue3的写法
}

export default GjfButton // 默认导出
