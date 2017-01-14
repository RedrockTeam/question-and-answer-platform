<style lang="less">

  @import '../../assets/font/iconfont.css';
  @import '../../assets/styles/index.less';
  .index-content-container {
    padding-bottom: 180px;
  }

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
    data(){
      return {
        problem_list: [{
            id: 1,
            username: 'yaermalfd',
            content: "hello world",
            title: "fjdsklfjd",
            images: [],
            type: '生活',
            comments_num: 100,
            time: '2016nian 1211',
            header: '../static/logo.png'
          }, {
            id: 2,
            username: 'yaermalfd',
            content: "hello world",
            title: "fjdsklfjd",
            images: ['../static/logo.png'],
            type: '生活',
            comments_num: 100,
            time: '2016nian 1211',
            header: '../static/logo.png',
          }
        ]
      }
    } ,
    name: 'home-new',
    components: {
      problemItem,
    }
  }

</script>
