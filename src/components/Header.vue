<style lang="scss" scope>
.axe-header {
  display: flex;
  justify-content: space-between;
  height: 81px;
  border-bottom: 1px solid #eee;
  margin: 0 100px;
  a {
    color: #000;
  }
  .logo {
    display: inline-block;
    width: 300px;
    height: 80px;
    cursor: pointer;
    img {
      width: 100%;
      margin-top: 5px;
      margin-left: -35px;
      transform: scale(0.75);
    }
  }
  .axe-github {
    display: inline-block;
    margin-top: 34px;
  }
}
</style>
<template>
  <div class="axe-header">
    <span class="logo">
      <img src="@/assets/images/logo.svg" alt="axe-ui" />
    </span>
    <div class="axe-nav">
      <a
        href="https://github.com/DFE-evernote/axe-ui"
        target="_blank"
        class="axe-github"
        >源码</a
      >
    </div>
  </div>
</template>
<script>
export default {
  name: 'AxeHeader'
}
</script>
