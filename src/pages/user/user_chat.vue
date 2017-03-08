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
  margin-bottom: 100px;
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
<div>
  <container class="zoe-chat-container">
    <div class="chat-messages-wrap">
      <div
        v-for="message in messages"
        class="chat-message"
        :class="{'chat-message_to': message.from_id == myUserInfo.id}">
        <img
          class="chat-header"
          :src="message.from_id == myUserInfo.id ? myUserInfo.headimgurl : toHead">
        <p class="chat-message-content">
          {{message.content}}
        </p>
      </div>
    </div>
  </container>
  <bg-container class="sender-box">
    <input class="sender-input inputbox" v-model="msg"/>
    <btn
      class="sender-btn"
      v-on:click.native="send"
      >发送</btn>
  </bg-container>
</div>
</template>
<script>
  import inputbox from '../../components/inputbox'
  import btn from '../../components/btn'
  import bgContainer from '../../components/bg-container.vue'
  import container from '../../components/container'
  import util from '../../util'

  export default {
    'name': 'zoe-chat',
    'components': {
      btn,
      inputbox,
      bgContainer,
      container
    },
    data() {
      return {
        messages: [],
        msg: '',
        to: 0,
        timer: 0,
        toHead: '',
        myUserInfo: {}
      }
    },
    methods: {
      send() {
        let data = {
          to: this.to,
          msg: this.msg
        }

        this.$http.post('/msg/send', data)
          .then((res) => {
            let body = res.body
            if(body.status === 200) {
              this.messages.push({
                from_id: this.id,
                content: this.msg
              })
            }
          })
          .catch(console.error)

        this.msg = '' // 清空消息框
      }
    },
    created() {
      this.id = ~~this.$route.params['id']
      this.to = ~~this.$route.params['to']
      this.myUserInfo = util.ls.get('myUserInfo') || {}

      // 获取历史消息
      this.$http.get(`/msg/history/${this.to}`)
        .then((res) => {
          this.toHead = res.body.user.headimgurl
          this.messages = res.body.messages.reverse()
        })
        .catch(console.error)

      // 自动获取消息
      this.timer = setInterval(() => {
        this.$http.get(`/msg/receive/${this.to}`)
          .then((res) => {
            let messages = res.body
            this.messages.concat(messages)

            if(!messages.length) {
              return
            }
            window.scrollTo(0, 100000)
          })
          .catch(console.error)
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    mounted() {
      window.scrollTo(0, 100000)
    },
    updated() {
      window.scrollTo(0, 100000)
    }

  }
</script>
