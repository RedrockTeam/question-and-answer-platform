<template>
  <div>
    <div id="container" style="z-index: 10;">
      <!-- <problem-item></problem-item> -->

      <!-- <search></search> -->
      <zoe/> 
      <!-- <index/>  -->
      <!-- <inputbox></inputbox> -->
      <!-- <textareabox></textareabox> -->
      <!-- <publish/> -->
      <!-- <detail></detail> -->
    </div>
  </div>
</template>

<script>

import index from './components/index'
import zoe from './components/zoe'
import publish from './components/publish'
import detail from './components/detail'
import container from './common_components/container'
import search from './components/search'
import problemItem from './common_components/problem_item'


export default {
  name: 'App',
  components: {
    zoe,
    index,
    publish,
    detail,
    container,
    search,
    problemItem,

  }
} 
</script>

<style lang="less">
</style>
