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
  import problemItem from '../../components/problem_item'
  import container from '../../components/container'

  export default {
    name: 'search-category',
    components: {
      container,
      problemItem
    },
    data() {
      return {
        problemList: [],
      }
    },
    methods: {
      favorite(index, id) {
        this.$http.get(`/favorite/${id}`)
          .then((res) => {
            let body = res.body
            if(body === '主题不存在') {
              return
            }
            if(body === 'no') {
              this.problemList[index].isFavorite = false
            }
            if(body === 'yes') {
              this.problemList[index].isFavorite = true
            }
          })
          .catch(console.error)
      },
      fetchData(keyword) {
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
    created() {
      let keyword = this.$route.params.keyword
      this.fetchData(keyword)
    },
    beforeRouteUpdate(to, from, next) {
      let keyword = to.params.keyword
      if(keyword) {
        this.fetchData(keyword)
        next()
      }
    }
  }
</script>
