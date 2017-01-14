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
    <router-view></router-view>
  </section>

</template>

<script>

  import inputbox from '../../components/inputbox'
  import container from '../../components/container'
  import problemItem from '../../components/problem_item'

  export default {
    'name': 'search',
    'components': {
      inputbox,
      container,
      problemItem,
    },
  }

</script>
