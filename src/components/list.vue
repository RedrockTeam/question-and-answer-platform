<style lang="less">

.list {
  padding: 24px 0;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #b9ebf2;
  overflow: hidden;
  .list-link {
    display: block;
    overflow: hidden;
  }
}

</style>

<template>

  <li class="list">
    <slot/>
  </li>

</template>

<script>

  export default {
    'name': 'list',
  }

</script>
