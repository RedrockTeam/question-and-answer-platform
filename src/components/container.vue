<style lang="less">
  .container {
    margin: 0 auto;
    padding: 0 30px;
    border-radius: 5px;
    background-color: none;
    overflow: hidden;
    z-index: 10;
  }
</style>

<template>
  <section class="container">
    <slot/>
  </section>
</template>

<script>
  export default {
    name: 'container'
  }
</script>
