<style lang="less">
</style>

<template>
  <div>
    <router-link v-for="problem in problem_list" :to="`/detail/${problem.id}`">
      <problem-item :problem="problem"></problem-item>
    </router-link>
  </div>
</template>


<script>
  import problemItem from '../../components/problem_item'

  export default  {
    name: 'home-hot',
    components: {
      problemItem
    },
    data(){
      return {
        problem_list: [{
          username: 'yaermalfd',
          content: 'hello world',
          title: 'fjdsklfjd',
          images: [],
          type: '生活',
          comments_num: 100,
          time: '2016nian 1211',
          header: '../static/logo.png'
        }, {
          username: 'yaermalfd',
          content: 'hello world',
          title: 'fjdsklfjd',
          images: ['../static/logo.png'],
          type: '生活',
          comments_num: 100,
          time: '2016nian 1211',
          header: '../static/logo.png'
        }]
      }
    }
  }

</script>
