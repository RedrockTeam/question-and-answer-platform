<style lang="less">
  .zoe-publish-container {
    margin-top: 30px;
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
  }

</style>

<template>
  <container class="zoe-publish-container">
    <router-link
      v-for="(problem, index) in problemList"
      :to="`/detail/${problem.id}`">

      <bg-container class="problem-list">
          <p class="zoe-publish-list-info">
            <router-link :to="`/user/${problem.user_id}`" class="zoe-publish-list-user-link">
            <img class="problem-list-header" :src="problem.user && problem.user.headimgurl">
            </router-link>
            <span class="zoe-publish-list-title">
              {{problem.title}}
              <type>{{(problem.category&&problem.category.name)||'其他'}}</type>
            </span>
          </p>

        <p class="problem-list-intro">
          {{problem.content}}
        </p>
        <div v-if="problem.image_url && problem.image_url[0]" class="problem-list-pics">
          <img v-for="url in problem.image_url" :src="url">
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

  export default {
    'name': 'zoe-answer',
    data() {
      return {
        problemList: []
      }
    },
    'components': {
      container,
      bgContainer,
      type
    },
    methods: {
      favorite(index, id) {
        this.$http.get(`/favorite/${id}`)
          .catch(console.error)
          .then((res) => {
            let body = res.body
            console.log(body)
            console.log(this.problemList)
            console.log(index, id)
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
      }
    },
    created() {
      this.$http.get('/user/publish')
        .catch(console.error)
        .then((res) => {
          console.log(res)
          this.problemList = res.body
        })
    }
  }

</script>
