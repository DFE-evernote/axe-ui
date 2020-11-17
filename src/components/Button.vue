<template>
  <div class="area demo-button">
    <div class="btns">
      <axe-button class="xiao-shi-tou">小石头的第一个组件</axe-button>
      <axe-button type="primary">小石头的第一个组件</axe-button>
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
