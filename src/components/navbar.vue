<style lang="less">
.nav-wrap {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 97px;
  background-color: #fff;
  .active {
    .nav-icon {
      color: #00aaf9;
    }
    a.nav-name {
      color: #00aaf9;
    }
  }
}
.nav-list {
  float: left;
  width: 25%;
  text-align: center;
  font-size: 24px;
  color: #999;
  .nav-icon {
    color: #999;
    font-size: 50px;
  }
  .nav-name {
    color: #999;
    font-size: 24px;
  }
}

</style>

<template>
  <div>
    <ul class="nav-wrap">
      <li class="nav-list">
        <router-link to="/index" activeClass="active">
          <p>
            <i class="iconfont nav-icon">&#xe60a;</i>
          </p>
          <a href="##" class="nav-name">首页</a>
        </router-link>
      </li>
      <li class="nav-list">
        <router-link to="/publish" activeClass="active">
          <p>
            <i class="iconfont nav-icon">&#xe625;</i>
          </p>
          <a href="##" class="nav-name">发布</a>
        </router-link>
      </li>
      <li class="nav-list">
        <router-link to="/search" activeClass="active">
          <p>
            <i class="iconfont nav-icon">&#xe674;</i>
          </p>
          <a href="##" class="nav-name">搜索</a>
        </router-link>
      </li>
      <li class="nav-list">
        <router-link to="/zoe" activeClass="active">
          <p>
            <i class="iconfont nav-icon">&#xe606;</i>
          </p>
          <a href="##" class="nav-name" >个人中心</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'navbar',
  }
</script>
