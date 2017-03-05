<style lang="less">
</style>

<template>
  <div>
    <router-view></router-view>
    <navbar/>
  </div>
</template>

<script>
  import navbar from '../../components/navbar'
  export default {
    name: 'user',
    components: {
      navbar
    }
  }
</script>
