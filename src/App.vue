<style lang="less">
</style>

<template>
  <div>
    <div id="container" style="z-index: 10;">
      <router-view></router-view>
      <navbar :active="active"></navbar>
    </div>
  </div>
</template>

<script>

import navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    navbar,
  },
  props: {
    active: {
      type: Array,
    },
  },
}

</script>
