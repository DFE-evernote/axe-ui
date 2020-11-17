<style lang="scss" scope>
@import '~@/assets/styles/_var.scss';
.axe-footer {
  color: $text-color;
  background: $bg-color;
  height: 200px;
  padding: 20px 100px;
  li {
    margin-top: 10px;
    font-size: 14px;
  }
}
</style>
<template>
  <div class="axe-footer">
    axe-ui
    <ul>
      <li>
        关于我们
      </li>
      <li>
        联系我们
      </li>
      <li>
        参与贡献
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'AxeFooter'
}
</script>
