<style lang="less">
.search-form-wrap {
  margin: 0;
  padding: 24px;
  width: 100%;
  height: 140px;
  overflow: visible;
  background-color: rgba(255, 255, 255, .2);
  box-sizing: border-box;
  border-radius: 0;
  margin-bottom: 57px;
}
</style>

<template>

  <section>
    <container class="search-form-wrap">
      <form v-on:submit.prevent="search(this.keyword)">
        <div class="input-wrap">
          <input v-model="keyword" class="inputbox search-input" value=""/>
        </div>
      </form>
    </container>
    <router-view style="margin-bottom: 50px;"></router-view>
    <navbar></navbar>
  </section>
</template>

<script>
  import container from '../../components/container'
  import problemItem from '../../components/problem_item'
  import router from '../../router'
  import navbar from '../../components/navbar'

  export default {
    'name': 'search',
    'components': {
      container,
      problemItem,
      navbar
    },
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      search(keyword) {
        router.replace(`/search/results/${this.keyword}`)
        return false
      }
    }
  }
</script>
