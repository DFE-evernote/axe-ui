<template>
  <div :class="['axe-card', `is-${shadow}-shadow`]">
    <div v-if="$slots.header || header" class="axe-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="axe-card__body" :style="bodyStyle">
      <slot />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AxeCard',
  props: {
    header: {
      type: String,
      default: ''
    },
    bodyStyle: {
      type: String,
      default: ''
    },
    shadow: {
      type: String,
      default: 'always'
    }
  }
})
</script>

<style>
.is-always-shadow {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
