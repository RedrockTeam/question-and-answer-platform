<style lang="less">
  @import "../assets/styles/publish.less";
</style>
<template>
  <div class="publish">
    <form class="publish-form">
      <p>
        <input class="publish-title" type="text" name="title" placeholder="标题(20字以内)">
      </p>
      <p>
        <textarea class="publish-content" placeholder="内容(100字以内)">
          
        </textarea>
      </p>
      <div class="add-images">

      </div>
      <btn>发布</btn>
    </form>
  </div>
</template>
<script>

  import btn from '../common_components/btn'

  export default {
    name: 'publish',
    components: {
      btn,
    }
  }
</script>