<template>
  <div class="area demo-card">
    <p class="componentName">卡片 Card</p>
    <axe-card class="box-card">
      <template v-slot:header>
        <p>卡片标题</p>
      </template>
    </axe-card>
  </div>
</template>

<script>
export default {
  name: 'Card'
}
</script>

<style lang="scss"></style>
