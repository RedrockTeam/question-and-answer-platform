<style lang="less">
.nav-wrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 97px;
  background-color: #fff;
  .active {
    .nav-icon {
      color: #00aaf9;
    }
    .nav-name {
      color: #00aaf9;
    }
  }
}
.nav-list {
  float: left;
  width: 25%;
  text-align: center;
  font-size: 24px;
  color: #999;
  .nav-icon {
    color: #999;
    font-size: 50px;
  }
  .nav-name {
    color: #999;
    font-size: 24px;
  }
}
</style>

<template>
  <div>
    <ul class="nav-wrap">
        <router-link tag="li" to="/home"  activeClass="active" class="nav-list">
          <p>
            <i class="iconfont nav-icon">&#xe60a;</i>
          </p>
          <span href="##" class="nav-name">首页</span>
        </router-link>
        <router-link tag="li" to="/publish" activeClass="active" class="nav-list">
          <p>
            <i class="iconfont nav-icon">&#xe625;</i>
          </p>
          <span href="##" class="nav-name">发布</span>
        </router-link>
        <router-link tag="li" to="/search" activeClass="active" class="nav-list">
          <p>
            <i class="iconfont nav-icon">&#xe674;</i>
          </p>
          <span href="##" class="nav-name">搜索</span>
        </router-link>
        <router-link  tag="li" :to="`/user/${myUserInfo.id}`" activeClass="active" class="nav-list">
          <p>
            <i class="iconfont nav-icon">&#xe606;</i>
          </p>
          <span href="##" class="nav-name" >个人中心</span>
        </router-link>
    </ul>
  </div>
</template>

<script>
  import util from '../util'

  export default {
    name: 'navbar',
    data() {
      return {
        myUserInfo: {}
      }
    },
    created() {
      let myUserInfo = util.ls.get('myUserInfo')
      if(myUserInfo) {
        this.userid = myUserInfo.id
      }
      this.$http.get('/user')
        .catch(console.error)
        .then((res) => {
          this.myUserInfo = res.body
          util.ls.set('myUserInfo', res.body)
        })
    }
  }
</script>
