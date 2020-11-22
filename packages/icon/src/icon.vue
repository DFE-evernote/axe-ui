<template>
  <svg class="axe-icon-svg" aria-hidden="true">
    <use :xlink:href="`#axe-icon-${name}`" />
  </svg>
</template>

<script>
import 'style/iconfonts/iconfont.js'

export default {
  name: 'AxeIcon',
  props: {
    name: String
  }
}
</script>
