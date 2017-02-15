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

  export default {
    name: 'search-results',
    components: {
      container,
    },
    mixins: [problemContainer],
    created() {
      let keywords = this.$route.params.keywords
      if(typeof (~~keywords) === 'number') {
        this.$http.get(`/q/category/${keywords}`)
          .catch(console.error)
          .then((res) => {
            this.problemList = res.body.map((item, index) => {
              item.index = index
              return item
            })
          })
      } else {
        console.log(keywords)
      }
    },
  }

</script>
