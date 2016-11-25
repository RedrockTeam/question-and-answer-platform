<style lang="less">
    @import '../assets/styles/navbar.less';
</style>

<template>
    <div>
        <ul class="nav-wrap">
            <li class="nav-list active">
                <p>
                    <i class="iconfont nav-icon">&#xe60a;</i>
                </p>
                <a class="nav-name" href="##">首页</a>
            </li>
            <li class="nav-list">
                <p>
                    <i class="iconfont nav-icon">&#xe625;</i>
                </p>
                <a class="nav-name" href="##">发布</a>
            </li>
            <li class="nav-list">
                <p>
                    <i class="iconfont nav-icon">&#xe674;</i>
                </p>
                <a class="nav-name" href="##">搜索</a>
            </li>
            <li class="nav-list">
                <p>
                    <i class="iconfont nav-icon">&#xe606;</i>
                </p>
                <a class="nav-name" href="##">个人中心</a>
            </li>
        </ul>
    </div>
</template>




<script>
    export default {
        name: 'navbar'
    }
</script>