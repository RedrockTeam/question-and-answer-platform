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
      <form v-on:submit.prevent="search">
        <div class="input-wrap">
          <input
            v-model="keyword"
            class="inputbox search-input"
            value=""/>
        </div>
      </form>
    </container>
    <router-view style="margin-bottom: 50px;"></router-view>
  </section>
</template>

<script>
  import container from '../../components/container'
  import problemItem from '../../components/problem_item'
  import router from '../../router'

  export default {
    'name': 'search',
    'components': {
      container,
      problemItem
    },
    data() {
      return {
        keyword: ''
      }
    },
    methods: {
      search() {
        if(this.keyword)
          router.replace(`/search/search-keyword/${this.keyword}`)
        return false
      }
    }
  }
</script>
