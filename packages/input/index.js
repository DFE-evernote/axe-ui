import Input from './src/input.vue' // 导入组件
import '../../styles/input.scss' // 按需导入单个组件的样式

Input.install = app => {
  // 组件install属性
  app.component(Input.name, Input) // 定义组件-vue3的写法
}

export default Input // 默认导出

// 导入
// import { Input } from 'axe-ui';
// app.use(Input)
