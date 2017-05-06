<style lang="less">
  .zoe-publish-container {
    margin-top: 30px;
    margin-bottom: 100px;
    .problem-list {
      position: relative;
      .user-publish-discard {
        position: absolute;
        top: 25px;
        right: 25px;
        width: 40px;
        height: 40px;
      }
    }
  }
  .zoe-publish-list-info {
    margin-bottom: 20px;
    .zoe-publish-list-user-link {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      border: 1px solid #76c5fd;
      border-radius: 50%;
      vertical-align: middle;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .zoe-publish-list-title {
    position: relative;
    top: 5px;
    margin-left: 30px;
    font-size: 28px;
    line-height: 30px;
    a {
      display: inline-block;
      width: 430px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

</style>

<template>
  <container class="zoe-publish-container">
    <router-link
      v-for="(problem, index) in problemList"
      :key="problem.id"
      :to="`/detail/${problem.id}`">

      <bg-container class="problem-list">
        <p class="zoe-publish-list-info">
          <router-link :to="`/user/${problem.user_id}`" class="zoe-publish-list-user-link">
          <img class="problem-list-header" :src="problem.user && problem.user.headimgurl">
          </router-link>
          <span class="zoe-publish-list-title">
            <a>{{problem.title}}</a>
            <type>{{(problem.category&&problem.category.name)||'其他'}}</type>
          </span>
        </p>

        <img
          v-show="self"
          src="../../assets/images/discard.png"
          class="iconfont user-publish-discard"
          v-on:click.stop.prevent="discard(problem.id)"/>

        <p class="problem-list-intro">
          {{problem.content}}
        </p>
        <div v-if="problem.image_url && problem.image_url[0]" class="problem-list-pics">
          <img
          v-for="url in problem.image_url"
          :key="url"
          :src="url">
        </div>
        <div class="problem-list-time-comments">
          <span class="problem-list-time">{{problem.updated_at}}</span>
          <span class="problem-list-comments" href="##">{{problem.reply_count}}条评论</span>
        </div>
      </bg-container>
    </router-link>
  </container>
</template>

<script>
  import container from '../../components/container'
  import bgContainer from '../../components/bg-container'
  import type from '../../components/type'

  import util from '../../util'

  export default {
    name: 'zoe-answer',
    data() {
      return {
        problemList: [],
        self: true
      }
    },
    'components': {
      container,
      bgContainer,
      type
    },
    methods: {
      discard(id) {
        return false
      },
      favorite(index, id) {
        this.$http.get(`/favorite/${id}`)
          .then((res) => {
            let body = res.body
            if(body === '主题不存在') {
              return
            }
            if(body === 'no') {
              this.problemList[index].isFavorite = false
            }
            if(body === 'yes') {
              this.problemList[index].isFavorite = true
            }
          })
          .catch(console.error)
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

      this.$http.get(`/user/publish${id}`)
        .then((res) => {
          let categories = util.ls.get('info').categories

          this.problemList = res.body.map((item) => {
            item.category = categories.filter((category) => {
              return item.category_id === category.id
            })[0]
            return item
          })

        })
        .catch(console.error)
    }
  }

</script>
