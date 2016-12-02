<template>
  <div>
    <!-- <background></background> -->
    <div id="container" style="z-index: 10;">
      <!-- <zoe/>  -->
      <!-- <index/>  -->
      <!-- <publish/> -->
      <detail></detail>
    </div>
  </div>
</template>

<script>

import background from './common_components/background'
import index from './components/index'
import zoe from './components/zoe'
import publish from './components/publish'
import detail from './components/detail'
import container from './common_components/container'

export default {
  name: 'App',
  components: {
    background,
    zoe,
    index,
    publish,
    detail,
    container
  }
} 
</script>

<style>
</style>
