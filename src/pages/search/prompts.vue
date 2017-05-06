<style lang="less">
.search-prompt-wrap {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: space-between;

  .search-prompt {
    margin-bottom: 30px;
    box-sizing: border-box;
    padding: 0 20px;
    height: 72px;
    line-height: 72px;
    font-size: 30px;
    color: #76c5fd;
    font-weight: 100;
    border-color: #76c5fd;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
  }
}
</style>
<template>
  <container class="search-prompt-wrap">
    <router-link
      class="search-prompt" v-for="category in categorys"
      :key="category.id"
      :to="`/search/search-category/${category.id}`">
      {{category.name}}
    </router-link>
  </container>
</template>

<script>
  import type from '../../components/type'
  import container from '../../components/container'
  import util from '../../util'

  export default {
    name: 'search-prompt',
    components: {
      type,
      container
    },
    data() {
      return {
        categorys: []
      }
    },
    created() {
      this.categorys = util.ls.get('info').categories
      this.categorys.push({
        name: '其他',
        id: 0
      })
    }
  }

</script>
