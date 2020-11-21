<template>
  <div class="axe-card is-always-shadow">
    <div class="axe-card__header">
      <slot name="header"></slot>
    </div>
    <div class="axe-card__body">
      <div>列表内容</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AxeCard'
}
</script>

<style>
.is-always-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
