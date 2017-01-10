<style lang="less">

  @import '../assets/font/iconfont.css';
  @import '../assets/styles/index.less';
  .index-content-container {
    padding-bottom: 180px;
  }

</style>

<template>

  <div>
    <div class="slider-wrap">
      <a class="slider-list" href="##">
        <img class="slider-list-image" src="../assets/images/slider.jpg">
      </a>
    </div>
    <container class="index-content-container">
      <ul class="most-list-wrap">
        <li class="active"><a href="##">最新</a></li>
        <li class="most-hot"><a href="##">最热</a></li>
      </ul>
      <problem-item v-for="problem in problem_list" :problem="problem"></problem-item>
    </container>
    <navbar/>
  </div>
</template>


<script>

  import navbar from '../components/navbar'
  import container from '../components/container'
  import bgContainer from '../components/bg-container'
  import type from '../components/type.vue'
  import problemItem from '../components/problem_item'


  export default  {
    data(){
      return {
        problem_list: [{
            username: 'yaermalfd',
            content: "hello world",
            title: "fjdsklfjd",
            images: [],
            type: '生活',
            comments_num: 100,
            time: '2016nian 1211',
            header: './static/logo.png'
          }, {
            username: 'yaermalfd',
            content: "hello world",
            title: "fjdsklfjd",
            images: ['./static/logo.png'],
            type: '生活',
            comments_num: 100,
            time: '2016nian 1211',
            header: './static/logo.png',
          }
        ]
      }
    } ,
    name: 'index',
    components: {
      navbar,
      bgContainer,
      container,
      type,
      problemItem,
    }
  }

</script>
