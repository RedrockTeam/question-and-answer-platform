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
    <a class="type" href="##">
        <slot/>
    </a>
</template>
<script>
    export default {
        'name': 'type'
    }
</script>