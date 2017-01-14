<style lang="less">
  @import "../../assets/styles/zoe.less";
  @import "../../assets/styles/common.less";
</style>

<template>
  <container>
    <div class="info-header-name-wrap">
      <img class="info-header" src="../../assets/logo.png">
      <h2 class="info-username">
        奔跑的船长
        <i class="iconfont sex">&#xe608;</i>
      </h2>
    </div>
    <bg-container>
      <list-wrap class="list-wrap-school-info">
        <list>
          <p class="left">学校</p>
          <p class="right">重庆邮电大学</p>
        </list>
        <list>
          <p class="left">学院</p>
          <p class="right">传媒艺术学院</p>
        </list>
      </list-wrap>
    </bg-container>
    <bg-container>
      <list-wrap class="my-zoe">
        <list to="/zoe/collection">
          <router-link class="list-link" to="/zoe/collection">
            <p class="left">
              <i class="iconfont">&#xe65e;</i>
              <span>我的收藏</span>
            </p>
            <p class="right">
              <span>1</span>
              <i class="iconfont">&#xe63c;</i>
            </p>
          </router-link>
        </list>
        <list>
          <router-link class="list-link" to="/zoe/editor">
            <p class="left">
              <i class="iconfont">&#xe60d;</i>
              <span>我的发布</span>
            </p>
            <p class="right">
               <span>5</span>
               <i class="iconfont">&#xe63c;</i>
            </p>
          </router-link>
        </list>
        <list>
          <router-link class="list-link" to="/zoe/answer">
            <p class="left">
              <i class="iconfont">&#xe6a3;</i>
              <span>我的回答</span>
            </p>
            <p class="right">
               <span>1</span>
               <i class="iconfont">&#xe63c;</i>
            </p>
          </router-link>
        </list>
        <list>
          <router-link class="list-link" to="/zoe/message">
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
    name: 'zoe-index',
    components: {
      container,
      bgContainer,
      listWrap,
      list
    }
  }

</script>
