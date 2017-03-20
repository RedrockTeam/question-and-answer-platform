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
  <div>
    <container class="publish-type">
     <bg-container class="publish-type-container">
       <list-wrap>
         <router-link
          :to="`/publish/editor/${sharing}`">
           <list>
            <p class="left">分享</p>
            <p class="right">
              <i class="iconfont">&#xe63c;</i>
            </p>
           </list>
         </router-link>
       </list-wrap>
     </bg-container>
     <bg-container>
       <list-wrap>
        <router-link
          v-for="category in categorys"
          :to="`/publish/editor/${category.id}`">
          <list>
            <p class="left">{{category.name}}</p>
            <p class="right">
              <i class="iconfont">&#xe63c;</i>
            </p>
          </list>
        </router-link>
       </list-wrap>
     </bg-container>
    </container>
  </div>
</template>

<script>
  import container from '../../components/container'
  import bgContainer from '../../components/bg-container.vue'
  import listWrap from '../../components/list_wrap'
  import list from '../../components/list'
  import util from '../../util'

  export default {
    name: 'publish-type',
    components: {
      container,
      bgContainer,
      listWrap,
      list
    },
    data() {
      return {
        categorys: [],
        sharing: 0
      }
    },
    created() {
      this.categorys = util.ls.get('info').categories.filter((item) => {
        if(item.name === '分享') {
          this.sharing = item.id
        }
        return item.name !== '分享'
      })
      this.categorys.push({
        name: '其他',
        id: '0'
      })
    }
  }

</script>
