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
  .publish-image {
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
    .iconfont {
      font-family: 'iconfont';
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

  .publish-image-add {
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
  <container class="publish-editor">
    <form class="publish-form">
      <inputbox class="publish-title"></inputbox>
      <textareabox class="publish-content"></textareabox>
      <div class="publish-images-wrap">
        <div class="publish-image">
          <img src="/static/logo.png">
          <i class="iconfont publish-delete-img">&#xe619;</i>
        </div>
        <div class="publish-image">
          <img src="/static/logo.png">
          <i class="iconfont publish-delete-img">&#xe619;</i>
        </div>
        <div class="publish-image">
          <img src="/static/logo.png">
          <i class="iconfont publish-delete-img">&#xe619;</i>
        </div>
        <div class="publish-image">
          <img src="/static/logo.png">
          <i class="iconfont publish-delete-img">&#xe619;</i>
        </div>
        <div class="publish-image">
          <img src="/static/logo.png">
          <i class="iconfont publish-delete-img">&#xe619;</i>
        </div>
        <div class="publish-image-add">
          <i class="iconfont">&#xe619;</i>
        </div>
      </div>
      <btn>发布</btn>
    </form>
  </container>
</template>

<script>
  import btn from '../../components/btn'
  import inputbox from '../../components/inputbox'
  import textareabox from '../../components/textareabox'
  import container from '../../components/container'

  export default {
    name: 'publish-editor',
    components: {
      container,
      btn,
      textareabox,
      inputbox
    }
  }

</script>
