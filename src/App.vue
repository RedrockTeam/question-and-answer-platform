<template>
    <div>
      <background></background>
      <div id="container">
        <!-- <zoe/>  -->
        <!-- <index/>  -->
        <publish/>
      </div>
    </div>
</template>

<script>

import background from './common_components/background'
import index from './components/index'
import zoe from './components/zoe'
import publish from './components/publish'

export default {
  name: 'App',
  components: {
    background,
    zoe,
    index,
    publish,
  }
} 
</script>

<style>
</style>
