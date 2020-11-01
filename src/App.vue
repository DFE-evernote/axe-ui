<!--
 * @Author: @Guojufeng
 * @Date: 2020-11-01 00:12:31
 * @LastEditors: @Guojufeng
 * @LastEditTime: 2020-11-01 12:57:04
 * @FilePath: /Users/guojufeng/Documents/GitHub/xingorg1-ui/src/App.vue
-->
<template>
  <div>
    <h1>Demo效果</h1>
    <Button />
    <Icon />
  </div>
</template>

<script>
import Button from './components/Button.vue'
import Icon from './components/Icon.vue'

export default {
  name: 'App',
  components: {
    Button,
    Icon
  }
}
</script>
