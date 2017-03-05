<style lang="less">
</style>

<template>
  <div>
    <div id="container" style="z-index: 10;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar'
import util from './util'

export default {
  name: 'App',
  components: {
    navbar
  },
  created() {
    this.$http.get('/user')
      .catch(console.error)
      .then((res) => {
        util.ls.set('myUserInfo', res.body)
      })
  }
}

</script>
