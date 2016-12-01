<template>
  <div class="publish">
    <publish_type/>
    <publish_editor/>
</template>
<script>

  import publish_type from './sub_components/publish_type'
  import publish_editor from './sub_components/publish_editor'

  export default {
    name: 'publish',
    components: {
      publish_type,
      publish_editor
    }
  }
</script>