<style lang="less">
  @import '../assets/styles/detail.less';
</style>

<template>
  <container>
    <bg-container class="detail-wrap">
      <div class="detail-info">
        <img class="detail-header" src="../assets/logo.png">
        <div class="detail-user-time">
          <span class="detail-user">{{ problem.user && problem.user.nickname}}</span>
          <span class="detail-time">{{problem.updated_at}}</span>
        </div>
        <i
          v-on:click.native="favorite(problem.id)"
          class="iconfont detail-collect">&#xe682;</i>
      </div>
      <h2 class="detail-title">{{problem.title}} <type>{{problem.category && problem.category.name}}</type>  </h2>
      <p class="detail-content">
        {{problem.content}}
      </p>
      <p v-if="problem.image_url && problem.image_url[0]" class="detail-image">
        <img v-for="imgurl in problem.mage_url" :src="imgurl">
      </p>
      <div class="detail-browse-answer">
        <span class="detail-browse">浏览{{problem.browseTime}}次</span>
        <router-link :to="`/reply/${problem.id}`">
          <btn><i class="iconfont">&#xe619;</i> 回答</btn>
        </router-link>
      </div>
    </bg-container>

    <bg-container class="answers-wrap">
      <list-wrap>
        <list v-for="answer in answers" class="answer-list">
          <div class="answer-info-wrap">
            <img class="answer-header" :src="answer.user&&answer.user.headimgurl">
            <div class="answer-user-time">
              <span class="answer-user">{{answer.user.nickname}}</span>
              <span class="answer-time">{{answer.update_at}}</span>
            </div>
            <div class="answer-praise">
              <i class="iconfont">&#xe64e;</i>
              <span class="answer-praise-num">{{answer.praiseNum}}</span>
            </div>
          </div>
          <p class="answer-content">{{answer.content}}</p>
        </list>
      </list-wrap>
    </bg-container>
  </container>
</template>

<script>
  import btn from '../components/btn'
  import container from '../components/container'
  import bgContainer from '../components/bg-container'
  import listWrap from '../components/list_wrap'
  import type from '../components/type'
  import list from '../components/list'

  export default {
    name: 'detail',
    components: {
      list,
      btn,
      container,
      bgContainer,
      listWrap,
      type
    },
    data() {
      return {
        id: this.$route.params.id,
        problem: {
        },
        answers: []
      }
    },
    created() {
      this.getQuestion()
      this.getAnswers()
    },
    methods: {
      getQuestion() {
        this.$http.get(`/post/${this.id}`)
          .then((res) => {
            this.problem = res.body
          })
          .catch(console.error)
      },
      getAnswers() {
        this.$http.get(`/reply/${this.id}`)
          .then((res) => {
            this.answers = res.body
          })
          .catch(console.error)
      },
      favorite(id) {
        // 提交
      }
    },
    beforeRouteEnter(to, from , next) {
      console.log(to.params.id)
      document.querySelector('.nav-wrap').style.display = 'none'
      next(vm => {
        vm.$http.get(`/post/${id}`)
          .then(res => {
          })
          .catch(console.error)
        return true
      })
    },
    beforeRouteLeave(to, from, next) {
      let exclude = [/reply/, /detail/]
      let path = to.path

      let isShowNavBar = !exclude.some((reg) => reg.test(path))
      if(isShowNavBar) {
        document.querySelector('.nav-wrap').style.display = 'block'
      }
      next(true)
    },

  }

</script>
