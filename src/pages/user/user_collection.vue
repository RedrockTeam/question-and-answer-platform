<style lang="less">
.zoe-collection-container {
  margin-top: 30px;
  margin-bottom: 100px;
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

  import utils from '../../utils'

  export default {
    name: 'zoe-collection',
    mixins: [problemContainer],
    components: {
      container,
      problemItem
    },
    created() {
      let id = ~~this.$route.params.id
      let userInfo = utils.ls.get('myUserInfo')

      if(id === userInfo.id) {
        id = ''
      } else {
        id = '/' + id
      }

      this.$http.get(`/user/favorite${id}`)
        .then((res) => {
          this.problemList = res.body.map((item, index) => {
            item.index = index
            return item
          })
        })
    }
  }
</script>
