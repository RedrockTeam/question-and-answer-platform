<style lang="less">
.bg-container {
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, .5);
}
</style>

<template>
  <section class="bg-container">
    <slot/>
  </section>
</template>

<script>
  export default {
    'name': 'bg-container'
  }
</script>
