<style lang="less">
.right {
  float: right;
}
.left {
  float: left;
}
.user {
  margin: 0 auto;
  width: 710px;
}
.info-header-name-wrap {
  position: relative;
  width: 100%;
  margin-top: 46px;
  overflow: hidden;
  text-align: center;
  .info-header {
    width: 143px;
    height: 143px;
  }
  .info-username {
    margin-top: 34px;
    margin-bottom: 0;
    text-align: center;
    font-size: 32px;
    font-weight: bolder;
  }
  .sex {
    color: #30C0FD;
    font-size: 32px;
    &::after {
      content: '\E608'
    }
    &.girl {
      &::after {
        color: red;
        content: '\E614'
      }
    }
  }

}

.list-wrap-school-info {
  margin-top: 79px;
  font-size: 32px;
  color: #747e7f;
  .left {
    font-size: 24px;
  }
  .right {
    font-size: 26px;
  }
  p {
    height: 57px;
    line-height: 57px;
  }
}

.my-user {
  margin-top: 30px;
  color: #666;
  .left {
    font-size: 26px;
    font-weight: bolder;
    .iconfont {
      margin-right: 15px;
      font-weight: 500;
      font-size: 50px;
      color: #7dd5fb;
      display: inline-block;
      vertical-align:middle;
    }
  }
  .right {
    font-size: 24px;
    .iconfont {
      font-size: 30px;
      color: #4cc5fa;
    }
  }
  p {
    height: 57px;
    line-height: 55px;
    color: #555;
  }
}
.user-editor-icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 45px;
  height: 45px;
}
</style>

<template>
  <container>
    <div class="info-header-name-wrap">
      <img class="info-header" :src="userInfo.headimgurl">
      <h2 class="info-username">
        {{userInfo.nickname}}
        <i class="iconfont sex" :class="{girl: userInfo.sex === 2}"></i>
      </h2>
      <router-link to="/user/editor">
        <img
          class="user-editor-icon"
          src="../../assets/images/user-editor.png"
          alt="编辑个人信息">
      </router-link>
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
