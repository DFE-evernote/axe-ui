import AxeButton from './button/'
import AxeIcon from './icon/'
console.log(AxeButton, AxeIcon)
const components = [AxeButton, AxeIcon]

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
  AxeButton, // 单独导出button组件用于按需加载
  AxeIcon
}
