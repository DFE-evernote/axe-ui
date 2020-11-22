<template>
  <div class="area demo-input">
    <h1>input 输入框</h1>
    <p>基本用法1</p>
    <axe-input class="my-axe-input" v-model="input" placeholder="请输入内容" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'Input',
  setup() {
    const input = ref('')
    return {
      input
    }
  }
})
</script>

<style>
.my-axe-input {
  width: 400px;
  margin: 10px 0;
}
</style>
