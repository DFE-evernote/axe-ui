<!--
 * @Author: @Guojufeng
 * @Date: 2020-11-01 00:12:31
 * @LastEditors: @Guojufeng
 * @LastEditTime: 2020-11-01 11:10:58
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/packages/button/src/button.vue
-->
<template>
  <div class="gjf-button">
    <!-- 类名设置统一为“gjf-”的前缀 -->
    <button>按钮</button>
  </div>
</template>

<script>
export default {
  name: 'GjfButton' // 重点是name命名，用于注册组件时使用name属性，也用于使用组件时标签名带有“gjf-”的前缀，如<gjf-button>
}
</script>
