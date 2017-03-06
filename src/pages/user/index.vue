<style lang="less">
.user-info-container {
  padding-bottom: 100px;
}
</style>

<template>
  <div>
    <router-view class="user-info-container"></router-view>
    <navbar v-show="show"/>
  </div>
</template>

<script>
  import navbar from '../../components/navbar'
  export default {
    name: 'user',
    data() {
      return {
        show: true
      }
    },
    components: {
      navbar
    },
    beforeRouteUpdate(to, from, next) {
      let path = to.path
      if(/chat\/\d+/.test(path)) {
        this.show = false
      } else {
        this.show = true
      }
      next(true)
    }
  }
</script>
