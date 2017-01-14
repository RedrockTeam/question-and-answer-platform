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
    <router-link class="search-prompt" v-for="prompt in prompts" :to="`/search/results/${prompt}`">
      {{prompt}}
    </router-link>
  </container>

</template>

<script>

  import type from '../../components/type'
  import container from '../../components/container'

  export default {
    name: 'search-prompt',
    components: {
      type,
      container,
    },
    data() {
      return {
        prompts: ['火锅店', '学习', 'yaerma', 'vuejs', 'C语言']
      }
    },
    created() {
      this.$http.get('prompts')
        .then(res => {
          this.prompts = res.body.prompts
        })
        .catch(console.error)
    }
  }

</script>
