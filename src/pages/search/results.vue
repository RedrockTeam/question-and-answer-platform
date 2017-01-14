<style lang="less">

</style>
<template>

  <container>
    <problem-item v-for="problem in problem_list" :problem="problem">
    </problem-item>
  </container>

</template>

<script>
  import problemItem from '../../components/problem_item'
  import container from '../../components/container'


  let mockData = [{
      username: 'yaermalfd',
      content: "hello world",
      title: "fjdsklfjd",
      images: [],
      type: '生活',
      comments_num: 100,
      time: '2016nian 1211',
      header: '../static/logo.png'
    }, {
      username: 'yaermalfd',
      content: "hello world",
      title: "fjdsklfjd",
      images: ['../static/logo.png'],
      type: '生活',
      comments_num: 100,
      time: '2016nian 1211',
      header: '../static/logo.png',
    }]

  export default {
    name: 'search-prompt',
    components: {
      container,
      problemItem,
    },
    beforeRouteEnter(to, from, next) {
      let keywords = to.params.keywords
      next((vm) => {
        vm.$http.get('problem list with keywords')
          .then(res => {
            this.problem_list = res.body.problem_list
          })
          .catch(console.error)
        return true
      })
    },
    data() {
      return {
        problem_list: mockData
      }
    }
  }

</script>
