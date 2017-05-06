<template>
  <div>
    <div id="container" style="z-index: 10;">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <navbar v-show="showNavbar" :nav="nav"></navbar>
  </div>
</template>

<script>
import util from './util'
import navbar from './components/navbar'
import router from './router'

export default {
  name: 'App',
  components: {
    navbar
  },
  data() {
    return {
      showNavbar: true,
      nav: {
        home: '/home/new/-1',
        search: '/search'
      }
    }
  },
  created() {
    router.beforeEach((to, from, next) => {
      let path = to.path

      this.showNavbar = true
      if(/chat/.test(path)) {
        this.showNavbar = false
      }

      if(/home/.test(path)) {
        this.nav.home = path
      }

      next(true)
    })

    this.$http.get('/oauth/isLogin')
      .then((res) => {
        if(res.body === 'yes') {
          return true
        }

        let match = window.location.href.match(/\?community_id=\d+/)
        let query = match && match[0] || ''
        window.location.href = `/oauth${query}`

        return false
      })
      .then((isLogin) => {
        if(!isLogin) {
          return
        }

        // 获取用户信息
        this.$http.get('/user')
          .catch(console.error)
          .then((res) => {
            util.ls.set('myUserInfo', res.body)
          })
      })
      .catch(console.error)
  }
}

</script>
