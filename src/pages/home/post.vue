<template>
  <div class="problem_container-mixin">
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
      problemItem
    },
    data(){
      return {
        type: '',
        id: 0,
        problemList: [],
        categorgs: {}
      }
    },
    methods: {
      fetchProblemList(type, id) {

        this.id = id || ~~this.$route.params['id']
        this.type = type || this.$route.params['type']

        console.log(this.id , this.type)
        // 0 获取所有数据
        if(this.id === 0) {
          return this.$http.get(`/q/${this.type}`)
            .then((res) => {
              this.problemList =  res.body.map((item, index) => {
                item.index = index
                return item
              })
            })
            .catch(console.error)
        }

        // 获取某个分类下的最新或者最热消息
        this.$http.get(`/q/${this.type}?category_id=${this.id}`)
          .then((res) => {
            this.problemList = res.body.map((item, index) => {
              item.index = index
              return item
            })
          })
          .catch(console.error)
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
      }
    },
    created() {
      this.fetchProblemList()
    },
    beforeRouteUpdate(to, from , next) {
      let id = ~~to.params['id']
      let type = to.params['type']
      this.fetchProblemList(type, id)
      next(true)
    }
  }
</script>
