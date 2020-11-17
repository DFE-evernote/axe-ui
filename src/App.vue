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
      <Icon />
    </div>
    <axe-footer />
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
