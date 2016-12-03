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

            <bg-container>
                <div class="aq-list-wrap">
                    <div class="aq-list">
                        <p class="aq-list-user-info">
                            <img class="aq-list-header" src="../assets/logo.png">
                            <span class="aq-list-username">用户名</span>
                            <i class="iconfont aq-list-collect"></i>
                        </p>
                        <h3 class="aq-list-title">
                            新生来报道啦
                            <type>生活</type>
                        </h3>
                        <p class="aq-list-intro">
                            新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦新生来报道啦
                        </p>
                        <div class="aq-list-pics">
                            <img src="../assets/logo.png">
                            <img src="../assets/logo.png">
                            <img src="../assets/logo.png">
                        </div>
                        <div class="aq-list-time-comments">
                            <span class="aq-list-time">时间</span>
                            <span class="aq-list-comments" href="##">1000000条评论</span>
                        </div>
                    </div>
                </div>
            </bg-container>
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