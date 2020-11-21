<template>
  <div class="area demo-icon">
    <h1>icon组件</h1>
    <h3>可以使用&lt;axe-icon&gt;标签引入图标，这样将使用svg标签渲染：</h3>
    <axe-icon name="message" class="icon-share" />
    <axe-icon name="share" />

    <h3 style="margin-top: 10px">也可以直接用类名引入图标：</h3>
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

<style>
i {
  margin-right: 10px;
}
</style>
