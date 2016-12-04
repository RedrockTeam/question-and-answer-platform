<style lang="less">
.problem-list {
  padding: 25px 15px;
  width: 100%;
  overflow: hidden;
  border-radius: 5px;
  box-sizing: border-box;

}

  .problem-list-user-info {
  line-height: 40px;
  margin-bottom: 25px;
  .problem-list-header {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 1px solid #76c5fd;
    border-radius: 50%;
    vertical-align:middle;
  }
  .problem-list-username {
    margin-left: 10px;
    font-weight: bolder;
    font-size: 24px;
    color: #8e9fa1;
  }
  .problem-list-collect {
    float: right;
    width: 50px;
    height: 50px;
    font-size: 50px;
    color: #76c5fd;
    &::after {
      content: "\E682"
    }
    
  }
  .active {
    &::after {
      content: "\E7a3";
    }
  }
}

.problem-list-title {
  font-size: 28px;
  line-height: 30px;
  .type {
    font-size: 24px;
  }
}
.problem-list-intro {
  display: -webkit-box;
  margin-bottom: 36px;
  width: 100%;
  overflow: hidden;
  line-height: 36px;
  font-size: 24px;
  color: #3e4546;
  /*3行省略*/
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.problem-list-pics {
  // width: 100%;
  overflow: scroll;
  margin-bottom: 50px;
  img {
    margin-right: 30px;
    width: 190px;
    height: 190px;
    border: 1px solid #76c5fd;
    border-radius: 5px;
  }
  img:last-child {
    margin-right: 0;
  }
}

.problem-list-time-comments {
  overflow: auto;
  font-size: 24px;
  color: #999;
  .problem-list-time {
    float: left;
  }
  .problem-list-comments {
    float: right;
  }
}
</style>
<template>
  <bg-container class="problem-list">
      <p class="problem-list-user-info">
        <img class="problem-list-header" src="../assets/logo.png">
        <span class="problem-list-username">用户名</span>
        <i class="iconfont problem-list-collect"></i>
      </p>
      <h3 class="problem-list-title">
        新生来报道啦
        <type>生活</type>
      </h3>
      <p class="problem-list-intro">
        新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦
      </p>
      <div class="problem-list-pics">
        <img src="../assets/logo.png">
        <img src="../assets/logo.png">
        <img src="../assets/logo.png">
      </div>
      <div class="problem-list-time-comments">
        <span class="problem-list-time">时间</span>
        <span class="problem-list-comments" href="##">1000000条评论</span>
      </div>
  </bg-container>
</template>
<script>
  import bgContainer from './bg-container'
  import type from './type'

  export default {
    'name': 'problem-item',
    'components': {
      bgContainer,
      type,
    }
  }
</script> 