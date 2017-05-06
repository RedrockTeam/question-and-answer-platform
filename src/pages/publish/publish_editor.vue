<style lang="less">
.publish-editor {
  overflow: visible;
}
.publish-form {
  .publish-title {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .publish-content {
    margin-bottom: 43px;
  }
  .publish-images-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 75px;
    padding-top: 43px;
    width: 100%;
    border-top: 1px solid #95e3ef;
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
    position: relative;
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
    #image {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
}
</style>

<template>
  <container class="publish-editor">
    <form class="publish-form">
      <input
        type="text"
        name="title"
        v-model="title"
        class="publish-title inputbox"
        placeholder="请填写内容30个字以内">

      <textarea
        name="content"
        v-model="content"
        class="publish-content textareabox"
        placeholder="请填写内容30个字以内">
      </textarea>

      <div class="answer-images-wrap">
        <div v-for="(image, index) in previewImages" :key="index" class="answer-image">
          <img :src="image">
          <i class="iconfont answer-delete-img" v-on:click="deleteImage(index)">&#xe619;</i>
        </div>
        <div class="answer-image-add" v-show="image_url.length <= 2">
          <i type="file" class="iconfont">&#xe619;</i>
          <input type="file" id="image"  name="image" v-on:change="imageChange">
        </div>
      </div>
      <btn v-on:click.native="publish">发布</btn>
    </form>
  </container>
</template>

<script>
  import router from '../../router'

  import btn from '../../components/btn'
  import container from '../../components/container'

  export default {
    name: 'publish-editor',
    components: {
      container,
      btn,
    },
    data() {
      return {
        category_id: 0,
        title: '',
        content: '',
        previewImages: [],
        image_url: [],
        disable: false
      }
    },
    methods: {
      previewImage(file) {
        let reader = new FileReader()
        reader.onload = (e) => {
          this.previewImages.push(e.target.result)
        }
        reader.readAsDataURL(file)
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
      },
      deleteImage(index) {
        const imageFilter = (item, i) => index !== i
        this.previewImages = this.previewImages.filter(imageFilter)
        this.image_url = this.image_url.filter(imageFilter)
      },
      publish() {
        let title = this.title
        let category_id = this.category_id
        let content = this.content
        let image_url = this.image_url

        let data = {
          category_id,
          title,
          content,
          image_url
        }
        // check
        if(title.length === 0 || title.length > 30) {
          return alert('标题应该在 1-30个字之间')
        }
        if(content.length > 300 || content.length === 0) {
          return alert('内容长度: 1-300个字啊啊啊啊')
        }
        if(this.disable === true) {
          return
        }
        this.disable = true
        this.$http.post('/post', data)
          .then((res) => {
            if(res.body !== 0){
              router.push(`/detail/${res.body}`)
            }
            this.disable = false
          })
          .catch(console.error)
      }
    },
    created() {
      this.category_id = this.$route.params.category_id
    }
  }

</script>
