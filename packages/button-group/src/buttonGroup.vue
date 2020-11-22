<template>
  <div class="axe-button-group">
    <slot></slot>
  </div>
</template>
<script>
import { getCurrentInstance, onMounted } from 'vue'
const { assert } = console
export default {
  name: 'AxeButtonGroup',
  setup() {
    onMounted(() => {
      const refContext = getCurrentInstance() // https://v3.vuejs.org/api/composition-api.html#getcurrentinstance
      const ele = refContext.ctx.$el
      const childrens = ele.children
      for (let eleIndex = 0; eleIndex < childrens.length; eleIndex++) {
        assert(
          childrens[eleIndex].nodeName === 'BUTTON',
          'button-group中只支持传入button标签'
        ) // https://developer.mozilla.org/zh-CN/docs/Web/API/Console/assert
      }
    })
  }
}
</script>
