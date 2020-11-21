<template>
  <i :class="'axe-icon-' + name"></i>
</template>

<script>
export default {
  name: 'AxeIcon',
  props: {
    name: String
  }
}
</script>
