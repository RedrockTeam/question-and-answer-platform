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
  <span class="btn" href="##">
    <slot>
  </span>
</template>

<script>
  export default {
    'name': 'btn'
  }

</script>
