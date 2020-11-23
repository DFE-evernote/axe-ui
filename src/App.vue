<style lang="scss">
.axe-container {
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.axe-main {
  margin: 0 100px;
  overflow: hidden;
  flex: 1;
}
</style>
<template>
  <div class="axe-container">
    <axe-header />
    <div class="axe-main">
      <Button />
      <ButtonGroup />
      <Icon />
      <Card />
      <Input />
    </div>
    <axe-footer />
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import Card from './components/Card.vue'
import Input from './components/Input.vue'

export default {
  name: 'App',
  components: {
    Button,
    Icon,
    Input,
    ButtonGroup,
    Card
  }
}
</script>
