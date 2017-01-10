<style lang="less">

.inputbox {
  display: block;
  padding: 28px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  font-size: 26px;
  // color: #3c676e;
  background-color: rgb(0, 0, 0);
  mix-blend-mode:soft-light;
  &:focus {
    outline: none;
  }
}

</style>

<template>

  <input class="inputbox" type="text">

</template>
<script>

  export default {
    'name': 'inputbox'
  }

</script>
