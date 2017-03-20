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
    this.$http.get('/oauth/isLogin')
      .then((res) => {
        if(res.body === 'yes') {
          return
        }
        let href = window.location.href
        let match = href.match('/community_id=\d+/')
        if(match) {
          window.location.href = `/oauth?${match[0]}`
        } else {
          window.location.href = '/oauth'
        }
      })
      .catch(console.error)
  }
}

</script>
