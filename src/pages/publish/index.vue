<style lang="less">
</style>

<template>
  <div class="publish">
    <publish-editor/>
  </div>
</template>
<script>
  import publishType from './publish_type'
  import publishEditor from './publish_editor'

  export default {
    name: 'publish',
    components: {
      publishType,
      publishEditor
    }
  }
</script>
