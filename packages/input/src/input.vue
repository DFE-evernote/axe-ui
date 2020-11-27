<template>
  <div class="axe-input">
    <input
      ref="input"
      class="axe-input__inner"
      v-bind="$attrs"
      :type="type"
      :placeholder="placeholder"
      @input="handleInput"
      @change="handleChange"
      @keydown="handleKeydown"
      @compositionstart="handleCompositionStart"
      @compositionupdate="handleCompositionUpdate"
      @compositionend="handleCompositionEnd"
    />
  </div>
</template>
<script>
import { defineComponent, watch, computed, ref, nextTick, onMounted } from 'vue'
const UPDATE_MODEL_VALUE = 'update:modelValue'
export default defineComponent({
  name: 'AxeInput',
  inheritAttrs: false,
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  emits: [
    UPDATE_MODEL_VALUE,
    // 'input',
    'change'
  ],

  setup(props, ctx) {
    // 处理事件
    const handleInput = e => {
      const { value } = e.target
      if (!isComposing.value) {
        ctx.emit(UPDATE_MODEL_VALUE, value)
        // ctx.emit('input', value)
        nextTick(setNativeInputValue)
      }
    }

    const handleChange = event => {
      ctx.emit('change', event.target.value)
    }
    const handleKeydown = () => {
      if (isComposing.value) return
    }

    // 获取是DOM
    const input = ref(null)
    // 当前 Input value 值
    const inputOrTextarea = computed(() => input.value)
    // v-model 值
    const targetModelValue = computed(() => String(props.modelValue))

    // 当 model变化时候的操作
    // watch(
    //   () => props.modelValue,
    //   val => {
    //   }
    // )
    // watch(
    //   () => props.type,
    //   () => {
    //     nextTick(() => {
    //       setNativeInputValue()
    //     })
    //   }
    // )

    // 设置原生输入框展示的值
    watch(targetModelValue, () => {
      setNativeInputValue()
    })

    // 同步原生input value
    const setNativeInputValue = () => {
      const input = inputOrTextarea.value
      //  如果空值或者值没变化返回
      if (!input || input.value === targetModelValue.value) return
      // 否则，同步两个值
      input.value = targetModelValue.value
    }
    // 拼音是否进行
    const isComposing = ref(false)
    // 拼音
    const handleCompositionStart = () => {
      isComposing.value = true
    }
    const handleCompositionUpdate = () => {
      isComposing.value = true

      // const text = event.target.value
      // const lastCharacter = text[text.length - 1] || ''
      // isComposing.value = !isKorean(lastCharacter)
    }
    const handleCompositionEnd = event => {
      if (isComposing.value) {
        isComposing.value = false
        handleInput(event)
      }
    }

    onMounted(() => {
      setNativeInputValue()
    })
    return {
      input,
      targetModelValue,
      isComposing,
      // inputOrTextarea,
      handleInput,
      handleChange,
      handleKeydown,
      // setNativeInputValue
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd
    }
  }
})
</script>
