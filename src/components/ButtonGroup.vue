<template>
  <div class="area demo-icon">
    <p class="demo-title">ButtonGroup 按钮组</p>
    <axe-button-group>
      <axe-button icon="axe-icon-xiangzuosanjiao">上一页</axe-button>
      <axe-button icon="axe-icon-194" position="right">下一页</axe-button>
    </axe-button-group>
    <axe-button-group>
      <axe-button icon="axe-icon-love"></axe-button>
      <axe-button icon="axe-icon-star"></axe-button>
      <axe-button icon="axe-icon-share"></axe-button>
    </axe-button-group>
  </div>
</template>

<script>
export default {
  name: 'ButtonGroup'
}
</script>
<style lang="scss">
.axe-button-group {
  margin-right: 10px;
}
</style>
