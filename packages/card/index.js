import Card from './src/card.vue'
import '../../styles/card.scss'

Card.install = app => {
  app.component(Card.name, Card)
}

export default Card
