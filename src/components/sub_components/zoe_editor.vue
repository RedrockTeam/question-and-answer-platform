<style lang="less">
  .zoe-editor-wrap {
    padding-top: 46px;
  }
  .zoe-editor-row {
    margin-bottom: 30px;
    .zoe-editor-key {
      float: left;
      width: 80px;
      height: 86px;
      line-height: 86px;
      font-size: 28px;
    }
    .zoe-editor-input {
      margin-left: 80px;
      width: 614px;
      text-align: right;
      color: #333;
      font-size: 28px;
    }
  }

</style>
<template>
  <container class="zoe-editor-wrap">
    <form>
      <div class="zoe-editor-row">
        <span class="zoe-editor-key">昵称</span>
        <inputbox class="zoe-editor-input" />
      </div>
      <div class="zoe-editor-row">
        <span class="zoe-editor-key">学校</span>
        <inputbox class="zoe-editor-input" />
      </div>
      <div class="zoe-editor-row">
        <span class="zoe-editor-key">学院</span>
        <inputbox class="zoe-editor-input" />
      </div>
    </form>
  </container>
</template>
<script>
  import container from '../../common_components/container'
  import inputbox from '../../common_components/inputbox'

  export default {
    'name': 'zoe-editor',
    'components': {
      container,
      inputbox,
    }
  }
</script> 