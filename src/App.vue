<template>
  <div>
    <div id="container" style="z-index: 10;">
      <router-view></router-view>
      <navbar></navbar>
    </div>
  </div>
</template>

<script>

import navbar from './common_components/navbar'

export default {
  name: 'App',
  components: {
    navbar,
  }
} 
</script>

<style lang="less">
</style>
