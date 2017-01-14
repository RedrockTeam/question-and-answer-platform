<style lang="less">

  @import '../assets/styles/detail.less';

</style>

<template>

  <container>
    <bg-container class="detail-wrap">
      <div class="detail-info">
        <img class="detail-header" src="../assets/logo.png">
        <div class="detail-user-time">
          <span class="detail-user">{{questionInfo.username}}</span>
          <span class="detail-time">{{questionInfo.time}}</span>
        </div>
        <i class="iconfont detail-collect">&#xe682;</i>
      </div>
      <h2 class="detail-title">{{questionInfo.title}} <type>{{questionInfo.type}}</type>  </h2>
      <p class="detail-content">
        {{questionInfo.content}}
      </p>
      <p class="detail-image">
        <img src="../assets/logo.png">
      </p>
      <div class="detail-browse-answer">
        <span class="detail-browse">浏览{{questionInfo.browse}}次</span>
        <router-link :to="`/answer/${questionInfo.id}`">
          <btn><i class="iconfont">&#xe619;</i> 回答</btn>
        </router-link>
      </div>
    </bg-container>

    <bg-container class="answers-wrap">
      <list-wrap>
        <answer v-for="answer in answers" :answer="answer"></answer>
      </list-wrap>
    </bg-container>
  </container>

</template>

<script>

  import btn from '../components/btn'
  import container from '../components/container'
  import bgContainer from '../components/bg-container'
  import listWrap from '../components/list_wrap'
  import answer from '../components/answer'
  import type from '../components/type'

  export default {
    name: '',
    components: {
      btn,
      container,
      bgContainer,
      answer,
      listWrap,
      type,
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
    data() {
      return {
        questionInfo: {
          id: 1,
          header: '/static/logo.png',
          username: 'jackson',
          time: '2017-1-1',
          title: 'hello 2017',
          type: '技术',
          content: '@全体成员@全体成员 产品票在大一值班手上 视觉在陈定票桌子上 移动在zhuangzhi那 sre在huojiangtian桌子上 web石喵这 产品票在大一值班手上 视觉在陈定票桌子上 移动在zhuangzhi那 sre在huojiangtian桌子上 web石喵这@全体成员 产品票在大一值班手上 视觉在陈定票桌子上 移动在zhuangzhi那 sre在huojiangtian桌子上 web石喵这',
          browse: 1111,

        },
        answers: [{
          header: '/static/logo.png',
          username: 'jackson',
          time: '30分钟之前',
          praiseNum: 15,
          content: '在 2016 年学 JavaScript 是一种什么样的体验？（分享自知乎网）http://zhuanlan.zhihu.com/p/22782487',
        }]
      }
    }
  }

</script>
