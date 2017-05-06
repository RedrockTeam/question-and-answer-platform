<template>
  <container>
    <router-link
      v-for="(problem, index) in problemList"
      :to="`/detail/${problem.id}`
      :key="problem.id"
      ">
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
        busy: false
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
        return this.$http.get(`/q/category/${keyword}?page=${this.page}`)
          .then((res) => {
            return res.body.map((item, index) => {
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
          this.busy = true
          this.page++
          this.fetchData(this.id)
            .then((problems) => {
              this.problemList = this.problemList.concat(problems)
              this.busy = false
            })
        }
      }
    },
    created() {
      this.id = this.$route.params.id
      this.fetchData(this.id)
        .then((problems) => {
          this.problemList = this.problemList.concat(problems)
        })
        .catch(console.error)
      window.addEventListener('scroll', this.scroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.scroll)
    },
    beforeRouteUpdate(to, from, next) {
      this.id = to.params.id
      if(this.id) {
        this.fetchData(this.id)
          .then((problems) => {
            this.problemList = problems
          })
          .catch(console.error)

        next()
      }
    }
  }
</script>
