<style lang="less">
  @import url('./assets/font/iconfont.css');
  .inputbox {
    display: block;
    padding: 28px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    font-size: 26px;
    color: #000;
    background-color: #90e6ee;
    &:focus {
      outline: none;
    }
  }
  .textareabox {
    display: block;
    padding: 28px;
    width: 100%;
    height: 307px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    font-size: 26px;
    color: #000;
    background-color: #90e6ee;
    // background-color: rgb(0, 0, 0);
    // mix-blend-mode:soft-light;
    ::-webkit-input-placeholder { /* WebKit browsers */
        color:    #ccc;
    }
    :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
        color:    #ccc;
    }
    ::-moz-placeholder { /* Mozilla Firefox 19+ */
        color:    #ccc;
    }
    :-ms-input-placeholder { /* Internet Explorer 10+ */
        color:    #ccc;
    }
    &:focus {
      outline: none;
    }
  }
</style>
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
