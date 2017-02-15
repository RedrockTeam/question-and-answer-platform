<style lang="less">
  @import '../../assets/font/iconfont.css';
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
  .slider-wrap {
    width: 100%;
    height: 300px;
  }
  .slider-list {
    width:  100%;
    height: 100%;
  }
  .slider-list-image {
    width:  100%;
    height: 100%;
  }
  .container {
    margin: 0 auto;
    width: 690px;

  }
  .most-list-wrap {
    margin-top: 45px;
    padding-bottom: 30px;
    overflow: hidden;
    li {
      position: relative;
      float: left;
      width: 50%;
      height: 64px;
      text-align: center;
      font-size: 28px;
      background-color: #fff;
      color: #76c5fd;
      line-height: 64px;
    }
    li:nth-child(1) {
      border-radius: 5px 0 0 5px;
    }
    li:nth-child(2) {
      border-radius: 0 5px 5px 0;
    }
    li.active {
      background-color: #76c5fd;
      color: #fff;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -16px;
        border-style: solid;
        border-width: 6px 8px 0 8px;
        border-color: #76c5fd transparent transparent transparent;
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
