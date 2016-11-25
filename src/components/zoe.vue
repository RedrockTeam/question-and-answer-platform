<style lang="less">
  @import "../assets/styles/zoe.less";
</style>
<template>
  <div>
    <div class="zoe">
      <div class="info">
        <div class="info-header-name-wrap">
          <img class="info-header" src="../assets/logo.png">
          <h2 class="info-username">
            奔跑的船长 
            <i class="iconfont sex">&#xe608;</i>
          </h2>
        </div>
        <ul class="info-school-wrap">
          <li class="info-school">
            <p class="key">学校</p>
            <p class="value">重庆邮电大学</p>
          </li>
          <li class="info-college">
            <p class="key">学院</p>
            <p class="value">传媒艺术学院</p>
          </li>
        </ul>
        <ul class="list-wrap">
          <li class="list">
            <a href="##">
              <p class="left">
                <i class="iconfont list-left-icon">&#xe65e;</i>
                <span>我的收藏</span>
              </p>
              <p class="right">
                 <span>0</span>
                 <i class="iconfont list-right-icon">&#xe63c;</i>
              </p>
            </a>
          </li>
          <li class="list">
            <a href="##">
              <p class="left">
                <i class="iconfont list-left-icon">&#xe60d;</i>
                <span>我的发布</span>
              </p>
              <p class="right">
                 <span>5</span>
                 <i class="iconfont list-right-icon">&#xe63c;</i>
              </p>
            </a>
          </li>
          <li class="list">
            <a href="##">
              <p class="left">
                <i class="iconfont list-left-icon">&#xe6a3;</i>
                <span>我的回答</span>
              </p>
              <p class="right">
                 <span>1</span>
                 <i class="iconfont list-right-icon">&#xe63c;</i>
              </p>
            </a>
          </li>
          <li class="list">
            <a href="##">
              <p class="left">
                <i class="iconfont list-left-icon">&#xe60e;</i>
                <span>我的消息</span>
              </p>
              <p class="right">
                 <span>10</span>
                 <i class="iconfont list-right-icon">&#xe63c;</i>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <navbar/>
  </div>
</template>
<script>
  import navbar from '../common_components/navbar'

  export default {
    name: 'zoe',
    components: {
      navbar
    }
  }
</script>