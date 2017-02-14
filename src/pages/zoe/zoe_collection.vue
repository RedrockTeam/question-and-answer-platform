<style lang="less">
.zoe-collection-container {
  margin-top: 30px;
}
</style>

<template>
  <container class="zoe-collection-container">
    <router-link
      v-for="(problem, index) in problemList"
      :to="`/detail/${problem.id}`">

      <bg-container class="problem-list">
        <router-link :to="`/user/${problem.user_id}`">
          <p class="problem-list-user-info">
            <img class="problem-list-header" :src="problem.user && problem.user.headimgurl">
            <span class="problem-list-username">{{problem.user && problem.user.nickname}}</span>
            <i
              class="iconfont problem-list-collect"
              :class="{isFavorite: problem.isFavorite}"
              v-on:click.stop.prevent="favorite(index, problem.id)"
              ></i>
          </p>
        </router-link>
        <h3 class="problem-list-title">
          {{problem.title}}
          <type>{{(problem.category&&problem.category.name)||'其他'}}</type>
        </h3>
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
    data(){
      return {
        problemList: []
      }
    },
    name: 'zoe-collection',
    components: {
      container,
      bgContainer,
      type
    },
    created() {
      this.$http.get('/user/favorite')
        .then((res) => {
          console.log(res.body)
          this.problemList = res.body
        })
    }
  }
</script>
