<style lang="less">
  
  @import '../assets/styles/detail.less';

</style>
<template>
    <container>
      <bg-container class="detail-wrap">
        <div class="detail-info">
          <img class="detail-header" src="../assets/logo.png">
          <div class="detail-user-time">
            <span class="detail-user">jackson</span>
            <span class="detail-time">30分钟之前</span>
          </div>
          <i class="iconfont detail-collect">&#xe682;</i>
        </div>
        <h2 class="detail-title">我的 title 我是 title <type>分享</type>  </h2>
        <p class="detail-content">
          @全体成员@全体成员 产品票在大一值班手上 视觉在陈定票桌子上 移动在zhuangzhi那 sre在huojiangtian桌子上 web石喵这 产品票在大一值班手上 视觉在陈定票桌子上 移动在zhuangzhi那 sre在huojiangtian桌子上 web石喵这@全体成员 产品票在大一值班手上 视觉在陈定票桌子上 移动在zhuangzhi那 sre在huojiangtian桌子上 web石喵这
        </p>
        <p class="detail-image">
          <img src="../assets/logo.png">
        </p>
        <div class="detail-browse-answer">
          <span class="detail-browse">浏览1111次</span>
          <btn><i class="iconfont">&#xe619;</i> 回答</btn>
        </div>
      </bg-container>

      <bg-container class="answers-wrap">
        <list-wrap>
          <list class="answer-list">
            <div class="answer-info-wrap">
              <img class="answer-header" src="../assets/logo.png">
              <div class="answer-user-time">
                <span class="answer-user">jackson</span>
                <span class="answer-time">30分钟之前</span>
              </div>
              <div class="answer-praise">
                <i class="iconfont">&#xe64e;</i>
                <span class="answer-praise-num">13</span>
              </div>
            </div>
            <p class="answer-content">在 2016 年学 JavaScript 是一种什么样的体验？（分享自知乎网）http://zhuanlan.zhihu.com/p/22782487</p>
          </list>
          <list class="answer-list">
            <div class="answer-info-wrap">
              <img class="answer-header" src="../assets/logo.png">
              <div class="answer-user-time">
                <span class="answer-user">jackson</span>
                <span class="answer-time">30分钟之前</span>
              </div>
              <div class="answer-praise">
                <i class="iconfont">&#xe64e;</i>
                <span class="answer-praise-num">13</span>
              </div>
            </div>
            <p class="answer-content">在 2016 年学 JavaScript 是一种什么样的体验？（分享自知乎网）http://zhuanlan.zhihu.com/p/22782487</p>
          </list>
          <list class="answer-list">
            <div class="answer-info-wrap">
              <img class="answer-header" src="../assets/logo.png">
              <div class="answer-user-time">
                <span class="answer-user">jackson</span>
                <span class="answer-time">30分钟之前</span>
              </div>
              <div class="answer-praise">
                <i class="iconfont">&#xe64e;</i>
                <span class="answer-praise-num">13</span>
              </div>
            </div>
            <p class="answer-content">在 2016 年学 JavaScript 是一种什么样的体验？（分享自知乎网）http://zhuanlan.zhihu.com/p/22782487</p>
          </list>
          <list class="answer-list">
            <div class="answer-info-wrap">
              <img class="answer-header" src="../assets/logo.png">
              <div class="answer-user-time">
                <span class="answer-user">jackson</span>
                <span class="answer-time">30分钟之前</span>
              </div>
              <div class="answer-praise">
                <i class="iconfont">&#xe64e;</i>
                <span class="answer-praise-num">13</span>
              </div>
            </div>
            <p class="answer-content">在 2016 年学 JavaScript 是一种什么样的体验？（分享自知乎网）http://zhuanlan.zhihu.com/p/22782487</p>
          </list>
        </list-wrap>
      </bg-container>
    </container>
</template>

<script>
  import btn from '../common_components/btn.vue'
  import container from '../common_components/container'
  import bgContainer from '../common_components/bg-container'
  import listWrap from '../common_components/list_wrap'
  import list from '../common_components/list'
  import type from '../common_components/type'

  export default {
    name: '',
    components: {
      btn,
      container,
      bgContainer,
      listWrap,
      list,
      type,
    }
  }
</script>