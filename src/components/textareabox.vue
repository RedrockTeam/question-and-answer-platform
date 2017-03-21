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
  color: #000;
  background-color: #90e6ee;
  // background-color: rgb(0, 0, 0);
  // mix-blend-mode:soft-light;
  ::-webkit-input-placeholder { /* WebKit browsers */
      color:    #ccc;
  }
  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color:    #ccc;
  }
  ::-moz-placeholder { /* Mozilla Firefox 19+ */
      color:    #ccc;
  }
  :-ms-input-placeholder { /* Internet Explorer 10+ */
      color:    #ccc;
  }
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
