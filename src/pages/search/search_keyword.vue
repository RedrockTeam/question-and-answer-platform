<template>
  <container>
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
  import problemContainer from '../../components/problem_container-mixin'
  import container from '../../components/container'
  import util from '../../util'

  export default {
    name: 'search-keyword',
    components: {
      container,
    },
    data() {
      return {
        problemList: [],
        page: 1
      }
    },
    methods: {
      fetchData(keyword) {

        keyword = encodeURIComponent(keyword)

        this.$http.get(`/q/word/${keyword}`)
          .then((res) => {
            this.problemList = res.body.data.map((item, index) => {
              item.index = index
              return item
            })
          })
          .catch(console.error)
      }
    },
    mixins: [problemContainer],
    created() {
      let keyword = this.$route.params.keyword
      this.fetchData(keyword)
    },
    beforeRouteUpdate(to, from, next) {
      let keyword = to.params.keyword
      this.fetchData(keyword)
      next()
    }
  }
</script>
