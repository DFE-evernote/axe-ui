<template>
  <div class="area demo-button">
    <h3>button-demo</h3>
    <gjf-button type="primary">小石头的第一个组件</gjf-button>
    <gjf-button type="success">success</gjf-button>
    <gjf-button type="info">info</gjf-button>
    <gjf-button type="warning">warning</gjf-button>
    <gjf-button type="danger">danger</gjf-button>
  </div>
</template>

<script>
export default {
  name: 'Button'
}
</script>

<style lang="scss">
.demo-button {
  .gjf-button:not(:first-child) {
    margin-left: 10px;
  }
}
</style>
