<style lang="less">

</style>

<template>
  <input
    class="inputbox"
    type="text"
    v-bind:value="value"
    v-on:input="update_value($event.target.value)">
</template>
<script>
  export default {
    name: 'inputbox',
    props: ['value'],
    methods: {
      update_value(value) {
        let formattedValue = value.trim()
        this.$emit('input', formattedValue)
      }
    }
  }
</script>
