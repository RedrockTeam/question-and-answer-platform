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
  import problemItem from './problem_item'

  export default  {
    components: {
      problemItem
    },
    data(){
      return {
        problemList: []
      }
    },
    methods: {
      favorite(index, id) {
        this.$http.get(`/favorite/${id}`)
          .catch(console.error)
          .then((res) => {
            console.log(index, id)
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
    }
  }
</script>
