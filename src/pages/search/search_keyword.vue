<template>
  <container>
    <router-link
      v-for="(problem, index) in problemList"
      :key="problem.id"
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
        page: 1,
        keyword: ''
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
        return this.$http.get(`/q/word/${keyword}?page=${this.page}`)
          .then((res) => {
            return res.body.data.map((item, index) => {
              item.index = index
              return item
            })
          })
      },
      scroll(event) {
        let viewportHeight = window.innerHeight
        let scrollY = window.pageYOffset
        let documentHeight = document.documentElement.offsetHeight
        if(viewportHeight + scrollY === documentHeight && this.busy === false) {
          this.page++
          this.fetchData(this.keyword)
            .then((problems) => {
              this.problemList = this.problemList.concat(problems)
              this.busy = false
            })
        }
      }
    },
    created() {
      this.keyword = this.$route.params.keyword
      this.fetchData(this.keyword)
        .then((problems) => {
          this.problemList = problems
        })
        .catch(console.error)

      window.addEventListener('scroll', this.scroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.scroll)
    },
    beforeRouteUpdate(to, from, next) {
      let keyword = to.params.keyword
      if(keyword) {
        this.page = 1
        this.fetchData(keyword)
          .then((problems) => {
            this.problemList = problems
          })
          .catch(console.error)
        next()
      }
    }
  }
</script>
