<style lang="less">
.answer-info-wrap {
  overflow: hidden;
}
.answer-header {
  float: left;
  width: 42px;
  height: 42px;
  margin-top: 5px;
}
.answer-user-time {
  float: left;
  margin-left: 20px;
  .answer-user {
    display: block;
    font-size: 22px;
    color: #8c9ea0;
  }
  .answer-time {
    font-size:20px;
    color: #b2c9cf;
  }
}
.answer-praise {
  float: right;
  .iconfont {
    font-size: 36px;
    color: #74c6fe;
  }
  .answer-praise-num {
    font-size: 26px;
    color: #aac6c9;
  }
}
.answer-content {
  margin-top: 20px;
  font-size: 24px;
}
</style>

<template>
  <list class="answer-list">
    <div class="answer-info-wrap">
      <img class="answer-header" :src="answer.header">
      <div class="answer-user-time">
        <span class="answer-user">{{answer.username}}</span>
        <span class="answer-time">{{answer.time}}</span>
      </div>
      <div class="answer-praise">
        <i class="iconfont">&#xe64e;</i>
        <span class="answer-praise-num">{{answer.praiseNum}}</span>
      </div>
    </div>
    <p class="answer-content">{{answer.content}}</p>
  </list>
</template>

<script>
  import list from './list'

  export default {
    'name': 'answer',
    'components': {
      list
    },
    props: {
      answer: {
        type: Object,
        default: {}
      }
    }
  }

</script>
