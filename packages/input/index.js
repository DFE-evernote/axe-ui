import Input from './src/input.vue'
import '../../styles/input.scss'

Input.install = app => {
  app.component(Input.name, Input)
}

export default Input
