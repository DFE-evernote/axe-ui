import Card from './src/card.vue' // 导入组件
import '../../styles/card.scss' // 按需导入单个组件的样式

Card.install = app => {
  // 组件install属性
  app.component(Card.name, Card) // 定义组件-vue3的写法
}

export default Card // 默认导出

// 导入
// import { Card } from 'axe-ui';
// app.use(Card)
