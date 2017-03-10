<template>
  <div>
    <router-link v-for="problem in problemList" :to="`/detail/${problem.id}`">
      <problem-item
        v-on:favorite="favorite"
        :problem="problem">
      </problem-item>
    </router-link>
  </div>
</template>

<script>
  import problemItem from '../../components/problem_item'
  import util from '../../util'

  export default  {
    components: {
      problemItem,
    },
    data(){
      return {
        type: '',
        id: '0',
        problemList: [],
        categorgs: {},
        fetchURL: '',
        page: 1,
        busy: false
      }
    },
    methods: {
      loadMore() {

      },
      fetchProblemList() {

        if(this.id === '0') {
          this.fetchURL = `/q/${this.type}?page=${this.page}`
        } else {
          this.fetchURL = `/q/${this.type}?category_id=${this.id}&page=${this.page}`
        }

        // 获取某个分类下的最新或者最热消息
        return this.$http.get(this.fetchURL)
          .then((res) => {
            return res.body.map((item, index) => {
              item.index = index + (this.page * 10 - 10)
              return item
            })
          })
      },
      favorite(index, id) {
        this.$http.get(`/favorite/${id}`)
          .catch(console.error)
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
      },
      scroll(event) {
        let viewportHeight = window.innerHeight
        let scrollY = window.pageYOffset
        let documentHeight = document.documentElement.offsetHeight
        if(viewportHeight + scrollY === documentHeight && this.busy === false) {
          console.log('fetch data')
          this.busy = true
          this.page++
          this.fetchProblemList()
            .then((problems) => {
              this.problemList = this.problemList.concat(problems)
              console.log(this.problemList)
              this.busy = false
            })
        }
      }
    },
    created() {
      this.type = this.$route.params.type
      this.id = this.$route.params.id
      this.fetchProblemList()
        .then((problems) => {
          this.problemList = problems
        })

      window.addEventListener('scroll', this.scroll)
    },
    beforeRouteUpdate(to, from , next) {
      this.id = to.params.id
      this.type = to.params.type
      this.fetchProblemList()
        .then((problems) => {
          this.problemList = problems
        })
      next(true)
    },
    beforeRouteLeave() {
      window.removeEventListener('scroll', this.scroll)
    }
  }
</script>
