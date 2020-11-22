<template>
  <div class="area demo-button">
    <p class="demo-title">Button 按钮</p>
    <div class="btns">
      <axe-button class="xiao-shi-tou">default</axe-button>
      <axe-button type="primary">primary</axe-button>
      <axe-button type="success">success</axe-button>
      <axe-button type="info">info</axe-button>
      <axe-button type="warning">warning</axe-button>
      <axe-button type="danger">danger</axe-button>
    </div>
    <p class="demo-title"></p>
    <div class="btns">
      <axe-button disabled icon="axe-icon-jianhao">disabled</axe-button>
      <axe-button :loading="true">加载中</axe-button>
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
    padding: 10px 0;
    .axe-button:not(:first-child) {
      margin-left: 10px;
    }
    /* .axe-icon-jianhao{
      transform: rotate(-45deg);
    } */
  }
}
</style>
