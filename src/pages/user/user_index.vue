<style lang="less">
  @import "../../assets/styles/user.less";
  @import "../../assets/styles/common.less";
</style>

<template>
  <container>
    <div class="info-header-name-wrap">
      <img class="info-header" :src="userInfo.headimgurl">
      <h2 class="info-username">
        {{userInfo.nickname}}
        <i class="iconfont sex">&#xe608;</i>
      </h2>
    </div>
    <bg-container>
      <list-wrap class="list-wrap-school-info">
        <list>
          <p class="left">学校</p>
          <p class="right">{{userInfo.school}}</p>
        </list>
        <list>
          <p class="left">学院</p>
          <p class="right">{{userInfo.college}}</p>
        </list>
      </list-wrap>
    </bg-container>
    <bg-container>
      <list-wrap class="my-user">
        <list to="/user/collection">
          <router-link class="list-link" to="/user/collection">
            <p class="left">
              <i class="iconfont">&#xe65e;</i>
              <span>我的收藏</span>
            </p>
            <p class="right">
              <span>{{userInfo.favorite_num}}</span>
              <i class="iconfont">&#xe63c;</i>
            </p>
          </router-link>
        </list>
        <list>
          <router-link class="list-link" to="/user/publish">
            <p class="left">
              <i class="iconfont">&#xe60d;</i>
              <span>我的发布</span>
            </p>
            <p class="right">
               <span>{{userInfo.publish_num}}</span>
               <i class="iconfont">&#xe63c;</i>
            </p>
          </router-link>
        </list>
        <list>
          <router-link class="list-link" to="/user/reply">
            <p class="left">
              <i class="iconfont">&#xe6a3;</i>
              <span>我的回答</span>
            </p>
            <p class="right">
               <span>{{userInfo.reply_num}}</span>
               <i class="iconfont">&#xe63c;</i>
            </p>
          </router-link>
        </list>
        <list>
          <router-link class="list-link" to="/user/message">
            <p class="left">
              <i class="iconfont">&#xe60e;</i>
              <span>我的消息</span>
            </p>
            <p class="right">
               <span>10</span>
               <i class="iconfont">&#xe63c;</i>
            </p>
          </router-link>
        </list>
      </list-wrap>
    </bg-container>
  </container>
</template>

<script>
  import container from '../../components/container'
  import bgContainer from '../../components/bg-container.vue'
  import listWrap from '../../components/list_wrap'
  import list from '../../components/list'

  export default {
    name: 'user-index',
    data() {
      return {
        userInfo: {}
      }
    },
    components: {
      container,
      bgContainer,
      listWrap,
      list
    },
    created() {
      this.$http.get('/user')
        .catch(console.error)
        .then((res) => {
          this.userInfo = res.body
        })
    }
  }

</script>
