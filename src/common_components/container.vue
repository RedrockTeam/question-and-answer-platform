<template>
  <section class="container">
    <slot/>
  </section>
</template>

<style lang="less">
  .container {
    margin: 0 auto;
    width: 710px;
    border-radius: 5px;
    background-color: none;
    overflow: hidden;
    z-index: 10;
  }
</style>

<script>
  export default {
    name: 'container',
  }
</script>