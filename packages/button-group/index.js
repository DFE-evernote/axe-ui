import ButtonGroup from './src/buttonGroup.vue'

ButtonGroup.install = app => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
