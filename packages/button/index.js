import GjfButton from './src/button.vue'

GjfButton.install = app => {
  app.use(GjfButton.name, GjfButton)
}

export default GjfButton
