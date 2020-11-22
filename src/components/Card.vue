<template>
  <div class="area demo-card">
    <p class="componentName">卡片 Card</p>
    <axe-card class="box-card" body-style="color:red" shadow="hover">
      <template v-slot:header>
        <div class="clearfix">
          <p>标题</p>
          <axe-button style="float:right">字太大</axe-button>
        </div>
      </template>
      <div>通过 slot 传递</div>
    </axe-card>
    <axe-card class="box-card" header="ele" body-style="color:red">
      <div>通过 header传递</div>
    </axe-card>
    <axe-card class="box-card" shadow="">
      <div>
        可以没有header
      </div>
    </axe-card>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Card',
  setup() {
    const ele = '中文'

    return {
      ele
    }
  }
})
</script>
<style>
.demo-card {
  width: 50%;
}
.box-card {
  margin: 20px 0;
}
.clearfix::after {
  content: '';
  clear: both;
  display: block;
}
</style>
