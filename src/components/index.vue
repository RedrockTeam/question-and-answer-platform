<style lang="less">
    @import '../assets/font/iconfont.css';
    @import '../assets/styles/index.less';
</style>

<template>
    <div>
        <div class="slider-wrap">
            <a class="slider-list" href="##">
                <img class="slider-list-image" src="../assets/images/slider.jpg">
            </a>
        </div>
        <container>
            <ul class="most-list-wrap">
                <li class="active"><a href="##">最新</a></li>
                <li class="most-hot"><a href="##">最热</a></li>
            </ul>
            <problem-item></problem-item>
        </container>
        <navbar/>
    </div>
</template>


<script>
    import navbar from '../common_components/navbar'
    import container from '../common_components/container'
    import bgContainer from '../common_components/bg-container'
    import type from '../common_components/type.vue'

    export default  {
        name: 'index',
        components: {
            navbar,
            bgContainer,
            container,
            type,

        }
    }
</script>