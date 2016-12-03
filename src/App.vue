<template>
  <div>
    <div id="container" style="z-index: 10;">
      <!-- <zoe/>  -->
      <!-- <index/>  -->
      <!-- <inputbox></inputbox> -->
      <!-- <textareabox></textareabox> -->
      <publish/>
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
import inputbox from './common_components/inputbox'
import textareabox from './common_components/textareabox'

export default {
  name: 'App',
  components: {
    zoe,
    index,
    publish,
    detail,
    container,
    inputbox,
    textareabox
  }
} 
</script>

<style>
</style>
