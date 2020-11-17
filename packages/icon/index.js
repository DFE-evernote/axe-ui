import Icon from './src/icon.vue'
import '../../styles/icon.scss'

Icon.install = app => {
  app.component(Icon.name, Icon)
}

export default Icon
