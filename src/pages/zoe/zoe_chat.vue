<style lang="less">

  .zoe-chat-container {
    margin-top: 30px;
    width: 100%;
    box-sizing: border-box;
    border-radius: none;
  }
  .sender-box {
    position: fixed;
    bottom: 0;
    padding: 14px 30px;
    height: 108px;
    .sender-input,
    .sender-btn {
      float: left;
      height: 80px;
    }
    .sender-input {
      margin-right: 20px;
      width: 540px;
      background-color: #94e7f5;
      mix-blend-mode: normal;
    }
    .sender-btn {
      padding: 0 29px;
      line-height: 80px;
      font-weight: 100;
    }
  }
  .chat-messages-wrap {

    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    overflow-y: scroll;
    .chat-message {
      position: relative;
      margin: 25px 0;
      overflow: hidden;
      .chat-header,
      .chat-message-content {
        float: left;
      }
      .chat-header {
        width: 80px;
        height: 80px;
        border-radius: 50%;
      }
      .chat-message-content {
        display: inline-block;
        margin-left: 25px;
        padding: 25px;
        max-width: 530px;
        border-radius: 20px;
        font-size: 32px;
        color: #fff;
        font-weight: 100;
        background-color: #76c5fd;
      }
    }
    .chat-message_to {
      .chat-header,
      .chat-message-content {
        float: right;
      }
      .chat-message-content {
        margin-left: 0;
        margin-right: 25px;
        background-color: #fff;
        color: #000;
      }
    }

  }

</style>
<template>
  <container class="zoe-chat-container">
    <div class="chat-messages-wrap">
      <div class="chat-message">
        <img class="chat-header" src="../../assets/logo.png">
        <p class="chat-message-content">
          你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界
        </p>
      </div>

      <div class="chat-message chat-message_to">
        <img class="chat-header" src="../../assets/logo.png">
        <p class="chat-message-content">
          你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界
        </p>
      </div>

    </div>
    <bg-container class="sender-box">
      <inputbox class="sender-input"></inputbox>
      <btn class="sender-btn">发送</btn>
    </bg-container>
  </container>
</template>
<script>
  import inputbox from '../../components/inputbox'
  import btn from '../../components/btn'
  import bgContainer from '../../components/bg-container.vue'
  import container from '../../components/container'

  export default {
    'name': 'zoe-chat',
    'components': {
      btn,
      inputbox,
      bgContainer,
      container,


    }
  }
</script>
