<style lang="less">
    .list-wrap {
        width: 100%;
        padding: 0 24px;
        box-sizing: border-box;
        .list:last-child {
            border: none;
        }
    }
</style>
<template>
    <ul class="list-wrap">
        <slot/>
    </ul>    
</template>
<script>
    export default {
        'name': 'list-wrap'
    }
</script>