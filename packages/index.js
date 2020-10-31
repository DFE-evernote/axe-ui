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
