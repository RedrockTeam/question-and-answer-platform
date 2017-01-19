<style lang="less">
  @import '../assets/styles/detail.less';
</style>

<template>
  <container>
    <bg-container class="detail-wrap">
      <div class="detail-info">
        <img class="detail-header" src="../assets/logo.png">
        <div class="detail-user-time">
          <span class="detail-user">{{ questionInfo.user && questionInfo.user.nickname}}</span>
          <span class="detail-time">{{questionInfo.updated_at}}</span>
        </div>
        <i class="iconfont detail-collect">&#xe682;</i>
      </div>
      <h2 class="detail-title">{{questionInfo.title}} <type>{{questionInfo.category && questionInfo.category.name}}</type>  </h2>
      <p class="detail-content">
        {{questionInfo.content}}
      </p>
      <p v-if="questionInfo.image_url && questionInfo.image_url[0]" class="detail-image">
        <img v-for="imgurl in questionInfo.mage_url" :src="imgurl">
      </p>
      <div class="detail-browse-answer">
        <span class="detail-browse">浏览{{questionInfo.browseTime}}次</span>
        <router-link :to="`/reply/${questionInfo.id}`">
          <btn><i class="iconfont">&#xe619;</i> 回答</btn>
        </router-link>
      </div>
    </bg-container>

    <bg-container class="answers-wrap">
      <list-wrap>
        <list v-for="answer in answers" class="answer-list">
          <div class="answer-info-wrap">
            <img class="answer-header" :src="answer.user.headimgurl">
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
        questionInfo: {
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
        this.$http.get(`http://stu.dev/public/post/${this.id}`)
          .then((res) => {
            this.questionInfo = res.body
          })
          .catch(console.error)
      },
      getAnswers() {
        this.$http.get(`http://stu.dev/public/reply/${this.id}`)
          .then((res) => {
            this.answers = res.body
          })
          .catch(console.error)
      }
    },
    beforeRouteEnter(to, from , next) {
      console.log(to.params.id)
      document.querySelector('.nav-wrap').style.display = 'none'
      next(vm => {
        vm.$http.get('/data')
          .then(res => {
          })
          .catch(console.error)
        return true
      })
    },
    beforeRouteLeave(to, from, next) {
      let exclude = [/answer/, /detail/]
      let path = to.path

      let isShowNavBar = !exclude.some((reg) => reg.test(path))
      if(isShowNavBar) {
        document.querySelector('.nav-wrap').style.display = 'block'
      }
      next(true)
    },

  }

</script>
