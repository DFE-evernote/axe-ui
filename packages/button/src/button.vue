<template>
  <button class="gjf-button">
    <!-- 类名设置统一为“gjf-”的前缀 -->
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
const typeArray = ['primary', 'success', 'info', 'warning', 'danger']
export default {
  name: 'GjfButton', // 重点是name命名，用于注册组件时使用name属性，也用于使用组件时标签名带有“gjf-”的前缀，如<gjf-button>
  props: {
    type: {
      type: String,
      default: 'primary',
      validator(type) {
        if (!typeArray.includes(type)) {
          throw Error(
            '类型“type”参数值错误，值只能是' +
              typeArray.join('、') +
              '中的一种。'
          )
        }
        return true
      }
    }
  }
}
</script>
