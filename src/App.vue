<style lang="less">
</style>

<template>
  <div>
    <div id="container" style="z-index: 10;">
      <router-view></router-view>
      <navbar></navbar>
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
}

</script>
