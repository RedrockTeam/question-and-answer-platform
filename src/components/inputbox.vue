<style lang="less">
.inputbox {
  display: block;
  padding: 28px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  font-size: 26px;
  color: #000;
  background-color: #90e6ee;
  &:focus {
    outline: none;
  }
}
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
