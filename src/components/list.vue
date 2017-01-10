<style lang="less">

.list {
  padding: 24px 0;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #b9ebf2;
  .list-link {
    display: block;
    overflow: hidden;
  }
}

</style>

<template>

  <li class="list">
    <a class="list-link" href="javascript:void(0)">
      <slot/>
    </a>
  </li>

</template>

<script>

  export default {
    'name': 'list',
  }

</script>
