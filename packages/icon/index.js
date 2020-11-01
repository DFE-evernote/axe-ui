/*
 * @Author: guojufeng
 * @Date: 2020-11-01 00:12:31
 * @LastEditors: @Guojufeng
 * @LastEditTime: 2020-11-01 12:41:09
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/packages/icon/index.js
 */

import Icon from './src/icon.vue'
import '../../styles/icon.scss'

Icon.install = app => {
  app.component(Icon.name, Icon)
}

export default Icon
