<style lang="less">
</style>

<template>
  <div class="publish">
    <keep-alive>
        <router-view></router-view>
    </keep-alive>
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
