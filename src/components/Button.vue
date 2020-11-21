<template>
  <div class="area demo-button">
    <h1>button组件</h1>
    <div class="btns">
      <axe-button class="xiao-shi-tou">default</axe-button>
      <axe-button type="primary">primary</axe-button>
      <axe-button type="success">success</axe-button>
      <axe-button type="info">info</axe-button>
      <axe-button type="warning">warning</axe-button>
      <axe-button type="danger">danger</axe-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss">
.demo-button {
  .btns {
    .axe-button:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
