<style lang="less">
.answer-editor {
  margin-top: 30px;
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
<div>
  <container class="answer-editor">
    <form class="answer-form">
      <textarea
        v-model="content"
        class="textareabox answer-content"
      ></textarea>
      <div class="answer-images-wrap">
        <div v-for="(image, index) in previewImages" :key="index" class="answer-image">
          <img :src="image">
          <i class="iconfont answer-delete-img" v-on:click="deleteImage(index)">&#xe619;</i>
        </div>
        <div class="answer-image-add" v-show="false">
          <label for="image">
            <i class="iconfont">&#xe619;</i>
            <input type="file" id="image" accept="image/gif, image/jpeg" v-show="false" name="image" v-on:change="imageChange">
          </label>
        </div>
      </div>
      <btn v-on:click.native="reply">发布</btn>
    </form>
  </container>
</div>
</template>

<script>
  import router from '../router'
  import btn from '../components/btn'
  import textareabox from '../components/textareabox'
  import container from '../components/container'

  export default {
    name: 'reply',
    components: {
      container,
      btn,
      textareabox,
    },
    data() {
      return {
        id: 0,
        content: '',
        image_url: [],
        previewImages: []
      }
    },
    methods: {
      deleteImage(index) {
        this.image_url = this.image_url.filter((a, i) => {
          return index !== i
        })
        this.previewImages = this.previewImages.filter((a, i) => {
          return index !== i
        })
      },
      previewImage(file) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImages.push(e.target.result)
        }
        reader.readAsDataURL(file)
      },
      reply() {
        let pid = 0
        let content = this.content
        let image_url = this.image_url
        if(content.length === 0 && content.length > 100) {
          alert('内容不能多于100个字, 或没有内容')
        }
        let data = {
          pid,
          content,
          image_url
        }
        this.$http.post(`/reply/${this.id}`, data)
          .then((res) => {
            if(res.body !== 0) {
              router.go(-1)
            }
          })
          .catch(console.error)
      },
      imageChange(e) {
        let file = e.target.files[0]
        let size = file.size
        if(size > 5000000) {
          return alert('图片太大, 不能上传')
        }
        let data = new FormData()
        data.append('image', file)
        this.$http.post('/upload/image', data)
          .then((res) => {
            let body = res.body
            if(body.status === 200) {
              this.image_url.push(body.data)
            }
          })
          .catch(console.error)

        this.previewImage(file)
      }
    },
    created() {
      this.id = this.$route.params.id
    }
  }
</script>
