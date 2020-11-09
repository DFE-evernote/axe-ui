<template>
  <div>
    <h1>组件测试页面</h1>
    <Button />
    <Icon />
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'

export default {
  name: 'App',
  components: {
    Button,
    Icon
  }
}
</script>
