<style lang="less">
.message-wrap {
  margin-top: 30px;
  .message-list:last-child {
    .message {
      border-bottom: none;
    }
  }
}
.message-list {
  display: block;
  padding: 0 24px;
  overflow: hidden;
}
.message-header {
  margin: 24px;
  margin-left: 0;
  float: left;
  width: 88px;
  height: 88px;
}
.message {
  float: left;
  padding: 24px 0;
  height: 88px;
  width: 550px;
  border-bottom: 1px solid #a2e6ef;
  .message-from {
    margin: 0;
    margin-bottom: 18px;
    font-size: 32px;
    font-weight: 500;
    .message-time {
      float: right;
      color: #889da2;
      font-weight: 500;
      font-size: 24px;
    }
  }
  .message-content {
    overflow: hidden;
    color: #666;
    font-size: 26px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
</style>

<template>
  <container>
    <bg-container class="message-wrap">
      <router-link to="/zoe/chat/1" class="message-list" href="##">
        <img class="message-header" src="../../assets/logo.png" alt="user-header"/>
        <div class="message">
          <h3 class="message-from">aau<span class="message-time">13:22</span></h3>
          <p class="message-content">我把写的分词器和mapping手滑、删我把写的分词器和mapping手滑、删我把写的分词器和mapping手滑、删我把写的分词器和mapping手滑、删</p>
        </div>
      </router-link>
    </bg-container>
  </container>
</template>

<script>
  import container from '../../components/container'
  import bgContainer from '../../components/bg-container.vue'
  import listWrap from '../../components/list_wrap'
  import list from '../../components/list'

  export default {
    'name': 'zoe-message',
    'components': {
      container,
      bgContainer,
      list,
      listWrap
    }
  }
</script>
