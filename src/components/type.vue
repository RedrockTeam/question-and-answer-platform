<style lang="less">

.type {
  padding: 0 10px;
  border: 1px solid #00aaf7;
  border-radius: 3px;
  font-weight: 500;
  color: #00aaf7;
}

</style>

<template>
  <span class="type" href="">
    <slot/>
  </span>
</template>

<script>
  export default {
    'name': 'type'
  }
</script>
