<style lang="less">
</style>

<template>
  <div class="publish">
    <router-view></router-view>
    <navbar></navbar>
  </div>
</template>
<script>
  import navbar from '../../components/navbar'
  export default {
    name: 'publish',
    components: {
      navbar
    }
  }
</script>
