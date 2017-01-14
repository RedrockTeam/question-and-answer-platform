<style lang="less">
.publish-type {
  p {
    font-size: 30px;
    line-height: 58px;
    color: #555;
    .iconfont {
      font-size: 30px;
      color: #4cc6f9;
    }
  }
}

.publish-type-container {
  margin-top: 30px;
  margin-bottom: 24px;
}
</style>

<template>
  <container class="publish-type">
   <bg-container class="publish-type-container">
     <list-wrap>
       <list>
        <p class="left">分享</p>
        <p class="right">
          <i class="iconfont">&#xe63c;</i>
        </p>
       </list>
     </list-wrap>
   </bg-container>
   <bg-container>
     <list-wrap>
      <list>
        <p class="left">分享</p>
        <p class="right">
          <i class="iconfont">&#xe63c;</i>
        </p>
      </list>
      <list>
        <p class="left">分享</p>
        <p class="right">
          <i class="iconfont">&#xe63c;</i>
        </p>
      </list>
      <list>
        <p class="left">分享</p>
        <p class="right">
          <i class="iconfont">&#xe63c;</i>
        </p>
      </list>
      <list>
        <p class="left">分享</p>
        <p class="right">
          <i class="iconfont">&#xe63c;</i>
        </p>
      </list>
      <list>
        <p class="left">分享</p>
        <p class="right">
          <i class="iconfont">&#xe63c;</i>
        </p>
      </list>
     </list-wrap>
   </bg-container>
  </container>
</template>

<script>
  import container from '../../components/container'
  import bgContainer from '../../components/bg-container.vue'
  import listWrap from '../../components/list_wrap'
  import list from '../../components/list'

  export default {
    name: 'publish-type',
    components: {
      container,
      bgContainer,
      listWrap,
      list
    }
  }

</script>
