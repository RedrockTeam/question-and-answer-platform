<style lang="less">
.detail {
  &-wrap {
    margin-top: 30px;
    margin-bottom: 16px;
    padding: 24px;
  }
  &-info {
    margin-bottom: 26px;
    overflow: hidden;
  }
  &-header {
    float: left;
    width: 60px;
    height: 60px;
    margin-right: 20px;
  }
  &-user-time {
    float: left;
  }
  &-user {
    display: block;
    font-size: 22px;
    color: #849396;
    margin-bottom: 5px;
  }
  &-time  {
    font-size: 20px;
    color: #b9ccd2;
  }
  &-collect {
    float: right;
    font-size: 50px;
    color: #74c5fd;
    &::after {
      content: "\E682"
    }
    &.isFavorite {
      &::after {
        content: "\E7a3";
      }
    }
  }

  &-title {
    margin-bottom: 24px;
    font-size: 30px;
    color: #3a4445;
    .type {
      font-size: 26px;
    }
  }
  &-content {
    margin-bottom: 23px;
    line-height: 1.5;
    font-size: 24px;
    color: #4c5759;
  }
  &-image {
    margin-bottom: 50px;
    img {
      width: 200px;
      height: 200px;
      border: 1px solid #b1f0f9;
    }
  }
  &-browse-reply {
    overflow: hidden;
    .detail-browse {
      position: relative;
      top: 20px;
      float: left;
      color: #9aa9ac;
      font-size: 22px;
    }
    .btn {
      display: inline-block;
      float: right;
      width: 160px;
      height: 60px;
      line-height: 60px;
      font-weight: 500;
      font-size: 24px;
    }
  }
}

.reply {
  &-list {
    position: relative;
  }
  &-header {
    float: left;
    margin-right: 20px;
    margin-top: 2px;
    width: 42px;
    height: 42px;
    border: 1px solid #76c5fd;
    border-radius: 50%;
  }
  &-user {
    margin: 0;
    font-size: 22px;
    color: #8c9ea0;
  }
  &-time {
    font-size: 20px;
    color: #b2c9cf;
  }
  &-praise-wrap {
    position: absolute;
    top: 20px;
    right: 0;
  }
  &-praise {
    font-size: 40px;
    color: #74c6fe;
    &::after {
      content: '\e64e'
    }
  }
  &-parise-liked {
    &::after {
      content: '\e61f'
    }
  }
  &-praise-num {
    font-size: 20px;
    color: #aac6c9;
  }
  &-content {
    margin-top: 15px;
    font-size: 24px;
  }
}
.reply-reply-btn-content {
  position: relative;
  top: 2px;
}
.detail-container {
  padding-bottom: 100px;
}
</style>

<template>
<div>
  <container class="detail-container">
    <bg-container class="detail-wrap">
      <div class="detail-info">
        <img class="detail-header" :src="problem.user && problem.user.headimgurl">
        <div class="detail-user-time">
          <span class="detail-user">{{ problem.user && problem.user.nickname}}</span>
          <span class="detail-time">{{problem.updated_at}}</span>
        </div>
        <i
          v-on:click.stop.prevent="favorite(problem.id)"
          class="iconfont detail-collect"
          :class="{isFavorite: problem.isFavorite}"></i>
      </div>
      <h2 class="detail-title">{{problem.title}} <type>{{problem.category && problem.category.name}}</type>  </h2>
      <p class="detail-content">
        {{problem.content}}
      </p>
      <p v-if="problem.image_url && problem.image_url[0]" class="detail-image">
        <img v-for="imgurl in problem.image_url" :src="imgurl">
      </p>
      <div class="detail-browse-reply">
        <span class="detail-browse">浏览{{problem.view_count}}次</span>
        <router-link :to="`/reply/${problem.id}`">
          <btn>
            <i class="iconfont" style="font-weight: 900">&#xe619;</i>
            <span class="reply-reply-btn-content">回答</span>
          </btn>
        </router-link>
      </div>
    </bg-container>

    <bg-container class="replies-wrap">
      <list-wrap>
        <list v-for="(reply, index) in replies" class="reply-list">
          <div class="reply-info-wrap">
            <router-link :to="`/user/${reply.user&&reply.user.id}`">
              <img class="reply-header" :src="reply.user&&reply.user.headimgurl">
              <div class="reply-user-time">
                <h6 class="reply-user">
                  {{reply.user && reply.user.nickname}}
                </h6>
                <span class="reply-time">{{reply.updated_at}}</span>
              </div>
            </router-link>

            <div class="reply-praise-wrap" v-on:click.stop.prevent="thumb(index, reply.id)">
              <i class="iconfont reply-praise" :class="{'reply-parise-liked': reply.isLike}"></i>
              <span class="reply-praise-num">{{reply.like_count || '0'}}</span>
            </div>
          </div>
          <p class="reply-content">{{reply.content}}</p>
        </list>
      </list-wrap>
    </bg-container>
  </container>
  <navbar></navbar>
</div>
</template>

<script>
  import btn from '../components/btn'
  import container from '../components/container'
  import bgContainer from '../components/bg-container'
  import listWrap from '../components/list_wrap'
  import type from '../components/type'
  import list from '../components/list'
  import navbar from '../components/navbar'

  export default {
    name: 'detail',
    components: {
      list,
      btn,
      container,
      bgContainer,
      listWrap,
      type,
      navbar
    },
    data() {
      return {
        id: this.$route.params.id,
        problem: {},
        replies: [],
        page: 1,
        busy: false
      }
    },
    created() {

      window.addEventListener('scroll', this.scroll)

      this.id = this.$route.params.id

      this.$http.get(`/post/${this.id}`)
        .then((res) => {
          this.problem = res.body
        })
        .catch(console.error)

      this.$http.get(`/reply/${this.id}`)
        .then((res) => {
          this.replies = res.body.replies
        })
        .catch(console.error)

    },
    destroyed() {
      window.removeEventListener('scroll', this.scroll)
    },
    methods: {
      scroll(event) {
        if(this.busy) return

        let viewportHeight = window.innerHeight
        let scrollY = window.pageYOffset
        let documentHeight = document.documentElement.offsetHeight

        if(viewportHeight + scrollY === documentHeight && this.busy === false) {
          this.busy = true
          this.page++
          this.fetchReplies()
            .then((replies) => {
              this.replies = this.replies.concat(replies)
              this.busy = false
            })
        }
      },
      fetchReplies() {
        return this.$http.get(`/reply/${this.id}?page=${this.page}`)
          .then((res) => {
            return res.body.replies
          })
      },
      favorite(id) {
        this.$http.get(`/favorite/${id}`)
          .then((res) => {
            let body = res.body
            if(body === '主题不存在') {
              return
            }
            if(body === 'no') {
              this.problem.isFavorite = false
            }
            if(body === 'yes') {
              this.problem.isFavorite = true
            }
          })
          .catch(console.error)
      },
      thumb(index, id) {
        this.$http.get(`/like/${id}`)
          .then((res) => {
            let body = res.body
            if(body === 'yes') {
              this.replies[index].isLike = true
              this.replies[index].like_count += 1
            } else {
              this.replies[index].isLike = false
              this.replies[index].like_count -= 1
            }
          })
          .catch(console.error)
      }
    }
  }

</script>
