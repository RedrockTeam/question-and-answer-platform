<style lang="less">

.search-form-wrap {
  margin: 0;
  padding: 24px;
  width: 100%;
  height: 140px;
  overflow: visible;
  background-color: rgba(255, 255, 255, .5);
  box-sizing: border-box;
  border-radius: 0;
  margin-bottom: 57px;
  .input-wrap {
    background-color: rgb(0, 0, 0);
    mix-blend-mode: soft-light;
  }
  .search-input {

  }
}
.search-prompt-wrap {
  text-align: justify;

  .justify_fix{
    display: inline-block;
    width: 100%;
    height: 0;
    overflow: hidden;
  }
  .search-prompt {
    display: inline-block;
    margin-bottom: 30px;
    width: 158px;
    height: 72px;
    line-height: 72px;
    box-sizing: border-box;
    text-align: center;
    font-size: 30px;
    color: #76c5fd;
    font-weight: 100;
    border-color: #76c5fd;
  }
}

</style>

<template>

  <section>
    <container class="search-form-wrap">
      <form>
        <div class="input-wrap">
          <inputbox class="search-input" value="yaerjkljafl;djfkjdskl;fjdfj"/>
        </div>
      </form>
    </container>
    <container class="search-prompt-wrap">
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <type class="search-prompt">火锅店</type>
      <div class="justify_fix"></div>
    </container>
    <container>
    </container>
  </section>

</template>

<script>

  import inputbox from '../components/inputbox'
  import container from '../components/container'
  import type from '../components/type'
  import problemItem from '../components/problem_item'

  export default {
    'name': 'search',
    'components': {
      inputbox,
      container,
      type,
      problemItem,
    }
  }

</script>
