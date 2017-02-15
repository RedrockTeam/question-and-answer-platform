<style lang="less">
.zoe-collection-container {
  margin-top: 30px;
}
</style>

<template>
  <container class="zoe-collection-container">
    <router-link
      v-for="(problem, index) in problemList"
      :to="`/detail/${problem.id}`">
      <problem-item
        v-on:favorite="favorite"
        :problem="problem">
      </problem-item>
    </router-link>
  </container>
</template>

<script>
  import container from '../../components/container'
  import problemItem from '../../components/problem_item'
  import problemContainer from '../../components/problem_container-mixin'

  export default {
    name: 'zoe-collection',
    mixins: [problemContainer],
    components: {
      container,
      problemItem
    },
    created() {
      this.$http.get('/user/favorite')
        .then((res) => {
          this.problemList = res.body.map((item, index) => {
            item.index = index
            return item
          })
        })
    }
  }
</script>
