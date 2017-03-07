<style lang="less">
  .user-publish-container {
    margin-top: 30px;
    margin-bottom: 100px;
  }
  .user-reply {
    &-container {
      position: relative;
      margin-bottom: 35px;
    }
    &-list {
      padding: 20px 20px;
    }
    &-title {
      margin-top: 0;
      margin-bottom: 5px;
    }
    &-discard {
      position: absolute;
      top: 30px;
      right: 40px;
      width: 35px;
      height: 40px;
    }
    &-time {
      color: #ccc;
      margin-bottom: 10px
    }
    &-content {
      font-size: 24px;
    }
  }
</style>

<template>
  <container class="user-publish-container">
      <bg-container
        v-for="(reply, index) in replyList"
        class="user-reply-container">
        <list class="user-reply-list">
          <router-link :to="`/detail/${reply.post.id}`">
            <h3 class="user-reply-title">
              回答: {{reply.post && reply.post.title}}
            </h3>
          </router-link>
          <img
            v-show="self"
            src="../../assets/images/discard.png"
            class="iconfont user-reply-discard"
            v-on:click="discard(reply.id)"/>
          <p class="user-reply-time">{{reply.updated_at}}</p>
          <p class="user-reply-content">{{reply.content}}</p>
        </list>
      </bg-container>
  </container>
</template>

<script>
  import container from '../../components/container'
  import bgContainer from '../../components/bg-container'
  import list from '../../components/list'
  import util from '../../util'

  export default {
    name: 'user-reply',
    data() {
      return {
        replyList: [],
        self: true
      }
    },
    'components': {
      container,
      bgContainer,
      list
    },
    methods: {
      discard(id) {
        // 删除回答 接口还没给
        this.$http.post(`/reply/${id}?_method=delete`)
          .catch(console.error)
          .then((res) => {
            let body = res.body
            if(~~body === 1) {
              this.replyList = this.replyList.filter(function(item, index) {
                return item.id !== id
              })
            }
          })
      }
    },
    created() {

      let id = ~~this.$route.params.id
      let userInfo = util.ls.get('myUserInfo')

      if(id === userInfo.id) {
        id = ''
      } else {
        id = '/' + id
        this.self = false
      }

      this.$http.get(`/user/reply${id}`)
        .catch(console.error)
        .then((res) => {
          console.log(res.body.replies)
          this.replyList = res.body.replies
        })
    }
  }

</script>
