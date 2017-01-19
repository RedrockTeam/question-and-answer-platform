<style lang="less">
.answer-editor {
  overflow: visible;
}
.answer-form {
  .answer-title {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .answer-content {
    margin-bottom: 43px;
  }
  .answer-images-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 75px;
    padding-top: 43px;
    width: 100%;
    border-top: 1px solid #95e3ef;
  }
  .answer-image {
    display: inline-block;
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid #95e3ef;
    border-radius: 10px;
    margin-bottom: 43px;
    box-sizing: border-box;
    img {
      width: 200px;
      height: 200px;
    }
    .answer-delete-img {
      font-family: 'iconfont';
      content: '\e619';
      position: absolute;
      top: -17px;
      right: -17px;
      display: block;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      text-align: center;
      line-height: 34px;
      transform: rotateZ(45deg);
      font-size: 30px;
      color: #fff;
      background-color: #f5c33e;
    }
  }

  .answer-image-add {
    display: inline-block;
    width: 200px;
    height: 200px;
    border: 1px dashed #95e3ef;
    border-radius: 5px;
    overflow: hidden;
    text-align: center;
    .iconfont {
      vertical-align: middle;
      font-size: 110px;
      color: #95e3ef;
      font-weight: 100;
      line-height: 200px;
    }
  }
}
</style>

<template>
  <container class="answer-editor">
    <form class="answer-form">
      <textarea v-model="content" class="textareabox answer-content"></textarea>
      <div class="answer-images-wrap">
<!--         <div class="answer-image">
          <img src="/static/logo.png">
          <i class="iconfont answer-delete-img">&#xe619;</i>
        </div>
        <div class="answer-image">
          <img src="/static/logo.png">
          <i class="iconfont answer-delete-img">&#xe619;</i>
        </div> -->
        <div class="answer-image-add">
          <i class="iconfont">&#xe619;</i>
        </div>
      </div>
      <btn v-on:click.native="reply">发布</btn>
    </form>
  </container>
</template>

<script>
  import router from '../router'
  import btn from '../components/btn'
  import inputbox from '../components/inputbox'
  import textareabox from '../components/textareabox'
  import container from '../components/container'

  export default {
    name: 'reply',
    components: {
      container,
      btn,
      textareabox,
      inputbox
    },
    data() {
      return {
        id: 0,
        content: ''
      }
    },
    methods: {
      reply() {
        let pid = 0
        let content = this.content
        if(content.length === 0 && content.length > 100) {
          alert('content so long or empty')
        }
        let data = {
          pid,
          content
        }
        this.$http.post(`http://stu.dev/public/reply/${this.id}`, data)
          .then((res) => {
            if(res.body !== 0) {
              console.log(router.go(-1))
            }
          })
          .catch(console.error)
      }
    },
    created() {
      this.id = this.$route.params.id
    }
  }
</script>
