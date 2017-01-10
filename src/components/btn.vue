<style type="less">

.btn {
  display: block;
  line-height: 2.5;
  border-radius: 100px;
  text-decoration: none;
  text-align: center;
  font-size: 36px;/*px*/
  background-color: #76c6fc;
  color:  #fff;
}

</style>

<template>

  <a class="btn" href="##">
    <slot>
  </a>

</template>
<script>

  export default {
    'name': 'btn',
  }

</script>
