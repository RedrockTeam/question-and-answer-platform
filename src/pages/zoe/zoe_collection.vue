<style lang="less">
  .zoe-collection-container {
    margin-top: 30px;
  }
</style>

<template>

  <container class="zoe-collection-container">
    <problem-item :problem="problem"></problem-item>
    <problem-item :problem="problem"></problem-item>
    <problem-item :problem="problem"></problem-item>
  </container>

</template>

<script>

  import container from "../../components/container"
  import problemItem from "../../components/problem_item"

  export default {
    data(){
      return {
        problem: {
          username: 'yaermalfd',
          content: "hello world",
          title: "fjdsklfjd",
          images: [],
          type: '生活',
          comments_num: 100,
          time: '2016nian 1211',
          header: './static/logo.png'
        }
      }
    },
    name: 'zoe-collection',
    components: {
      container,
      problemItem,
    }
  }
</script>
