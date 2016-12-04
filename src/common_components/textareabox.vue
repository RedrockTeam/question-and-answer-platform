<style lang="less">
  .textareabox {
    display: block;
    padding: 28px;
    width: 100%;
    height: 307px;
    box-sizing: border-box;
    border: none;
    border-radius: 10px;
    font-size: 26px;
    color: #3c676e;
    background-color: rgb(0, 0, 0);
    mix-blend-mode:soft-light;
    &:focus {
      outline: none;
    }
  }
</style>
<template>
  <textarea class="textareabox">
  </textarea>
</template>
<script>
  export default {
    name: 'textareabox'
  }
</script> 