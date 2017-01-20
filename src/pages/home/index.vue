<style lang="less">
  @import '../../assets/font/iconfont.css';
  @import '../../assets/styles/index.less';
  .index-content-container {
    padding-bottom: 180px;
  }
  .disabled {
    display: none;
  }
  .notice {
    &-wrap {
      z-index: 100;
      position: fixed;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, .5);
    }
    & {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -300px;
      margin-top: -380px;
      padding: 0 30px;
      width: 540px;
      border-radius: 5px;
      background-image: url('/static/notice.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      p {
        margin-top: 280px;
        margin-bottom: 50px;
        font-size: 26px;
        color: #777;
      }
      .btn {
        margin-bottom: 54px;
      }
    }
  }
</style>

<template>
  <div>
    <div :class="{disabled: noticeReaded}" class="notice-wrap">
      <div class="notice">
        <p>{{notice.content}}</p>
        <btn v-on:click.native="read">确定</btn>
      </div>
    </div>
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
  import btn from '../../components/btn'
  export default  {
    name: 'home',
    components: {
      container,
      btn
    },
    data() {
      return {
        notice: {
        },
        noticeReaded: true,
      }
    },
    methods: {
      read() {
        console.log(this.notice.readed)
        this.noticeReaded = true
      }
    },
    created() {
      this.$http.get('/notice')
        .then((res) => {
          this.notice = res.body
        })
        .catch(console.error)
    }
  }
</script>
