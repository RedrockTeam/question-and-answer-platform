<style lang="less">

  @import '../../assets/font/iconfont.css';
  @import '../../assets/styles/index.less';
  .index-content-container {
    padding-bottom: 180px;
  }

</style>

<template>

  <div>
    <div class="slider-wrap">
      <a class="slider-list" href="##">
        <img class="slider-list-image" src="../../assets/images/slider.jpg">
      </a>
    </div>
    <container class="index-content-container">
      <ul class="most-list-wrap">
        <router-link tag="li" activeClass="active" to="/home/new" replace>最新</router-link>
        <router-link tag="li" activeClass="active" to="/home/hot" replace>最热</router-link>
      </ul>
      <router-view></router-view>
    </container>
  </div>
</template>


<script>

  import container from '../../components/container'

  export default  {
    name: 'home',
    components: {
      container,
    }
  }

</script>
