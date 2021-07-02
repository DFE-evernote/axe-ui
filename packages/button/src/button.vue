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

<script lang="ts">
import { computed } from 'vue'
import type { PropType } from 'vue'
const typeArray = ['default', 'primary', 'success', 'info', 'warning', 'danger']
const positionArray = ['left', 'right']

type IButtonType = PropType<'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'>
type IButtonPosi = PropType<'left' | 'right'>
interface IButtonProps {
  type: string
  icon?: string
  loading: boolean
  position: string
  disabled: boolean
}
export default {
  name: 'AxeButton', // 重点是name命名，用于注册组件时使用name属性，也用于使用组件时标签名带有“axe-”的前缀，如<axe-button>
  props: {
    // size // TODO: button按钮增加size属性
    type: {
      type: String as IButtonType,
      default: 'default',
      validator(type: string) {
        if (!typeArray.includes(type)) {
          throw Error(
            '类型“type”参数值错误，值只能是' +
              typeArray.join('、') +
              '中的一种。'
          )
        }
        return true
      }
    },
    icon: String,
    loading: Boolean,
    position: {
      type: String as IButtonPosi,
      default: 'left',
      require: false,
      validator(type: string) {
        if (!positionArray.includes(type)) {
          throw Error(`属性“position”传入的值错误，值只能是${positionArray.join('、')}中的一种。`)
        }
        return true
      }
    },
    disabled: Boolean
  },
  setup(props: IButtonProps) {
    const classify = computed(() => [
      'axe-button',
      `axe-button-${props.type}`,
      props.icon && `axe-button-${props.position}`
    ])
    return {
      classify
    }
  }
}
</script>
