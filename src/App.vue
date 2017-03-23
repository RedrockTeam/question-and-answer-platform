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
        if(res.body === 'yes') return

        let match = window.location.href.match(/\?community_id=\d+/)
        let query = match && match[0] || ''
        window.location.href = `/oauth${query}`
      })
      .catch(console.error)
  }
}

</script>
