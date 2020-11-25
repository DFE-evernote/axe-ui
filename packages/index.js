import AxeButton from './button/'
import AxeCard from './card'
import AxeButtonGroup from './button-group/'
import AxeIcon from './icon/'
import AxeInput from './input/'

const components = [AxeButton, AxeIcon, AxeCard, AxeButtonGroup, AxeInput]

const install = (app, opts = {}) => {
  components.forEach(item => {
    app.component(item.name, item)
  })

  app.$GJF = {
    size: opts.size || '',
    zIndex: opts.zIndex || 1000
  }
}

export default {
  version: '1.0.0',
  install,
  AxeButton,
  AxeIcon,
  AxeButtonGroup,
  AxeInput,
  AxeCard
}
