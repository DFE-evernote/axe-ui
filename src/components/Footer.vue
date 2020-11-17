<style lang="scss" scope>
@import '~@/assets/styles/_var.scss';
.axe-footer {
  color: $text-color;
  background: $bg-color;
  height: 200px;
  padding: 20px 100px;
  .axe-title {
    float: right;
    width: 100px;
    margin: -30px -20px;
    font-size: 24px;
    font-family: 'Eina03-Bold';
  }
  ul {
    width: 130px;
  }
  li {
    cursor: pointer;
    margin-top: 10px;
    font-size: 14px;
    &:hover {
      color: #fff;
    }
  }
}
</style>
<template>
  <div class="axe-footer">
    <div class="axe-title">
      axe-ui
      <div class="img">
        <!-- <img src="@/assets/images/logo-small.svg" alt="axe-ui" /> -->
        <img src="@/assets/images/logo.svg" alt="axe-ui" />
      </div>
    </div>
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
