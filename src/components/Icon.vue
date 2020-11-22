<template>
  <div class="area demo-icon">
    <p class="demo-title">Icon 图标</p>
    <p>可以使用&lt;axe-icon&gt;标签引入图标，这样将使用svg标签渲染：</p>
    <axe-icon name="message" class="icon-share" />
    <axe-icon name="share" />
    <p style="margin-top: 10px">也可以直接用类名引入图标：</p>
    <i class="axe-icon-home"></i>
    <i class="axe-icon-loading"></i>
    <axe-button type="danger" icon="axe-icon-love">喜欢</axe-button>
  </div>
</template>

<script>
export default {
  name: 'Icon'
}
</script>

<style lang="scss" scoped>
.axe-icon-home,
.axe-icon-loading {
  margin-right: 10px;
}
</style>
