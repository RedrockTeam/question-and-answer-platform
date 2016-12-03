<template>
  <div class="publish">
    <!-- <publish_type/> -->
    <publish-editor/>
</template>
<script>

  import publishType from './sub_components/publish_type'
  import publishEditor from './sub_components/publish_editor'

  export default {
    name: 'publish',
    components: {
      publishType,
      publishEditor
    }
  }
</script>