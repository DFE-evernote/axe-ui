<template>
  <button :class="classify" :disabled="disabled || loading">
    <!-- 类名设置统一为“axe-”的前缀 -->
    <i :class="['icon', icon]" v-if="icon && !loading" />
    <i class="icon axe-icon-loading" v-if="!icon && loading" />
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import { computed } from 'vue'
const typeArray = ['default', 'primary', 'success', 'info', 'warning', 'danger']
export default {
  name: 'AxeButton', // 重点是name命名，用于注册组件时使用name属性，也用于使用组件时标签名带有“axe-”的前缀，如<axe-button>
  props: {
    type: {
      type: String,
      default: 'default',
      validator(type) {
        if (!typeArray.includes(type)) {
          throw Error(
            '类型“type”参数值错误，值只能是' +
              typeArray.join('、') +
              '中的一种。'
          )
        }
        return true // 校验器：返回true表示校验通过
      }
    },
    icon: String,
    loading: Boolean,
    disabled: Boolean
  },
  setup(props) {
    const classify = computed(() => ['axe-button', `axe-button-${props.type}`])
    return {
      classify
    }
  }
}
</script>
