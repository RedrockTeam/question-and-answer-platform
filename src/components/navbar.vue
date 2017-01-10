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
      <li class="nav-list" :class="active[0]">
        <router-link to="/index">
          <p>
            <i class="iconfont nav-icon">&#xe60a;</i>
          </p>
          <a href="##" class="nav-name">首页</a>
        </router-link>
      </li>
      <li class="nav-list" :class="active[1]">
        <router-link to="/publish">
          <p>
            <i class="iconfont nav-icon">&#xe625;</i>
          </p>
          <a href="##" class="nav-name">发布</a>
        </router-link>
      </li>
      <li class="nav-list" :class="active[2]">
        <router-link to="/search">
          <p>
            <i class="iconfont nav-icon">&#xe674;</i>
          </p>
          <a href="##" class="nav-name">搜索</a>
        </router-link>
      </li>
      <li class="nav-list" :class="active[3]">
        <router-link to="/zoe">
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
    props: {
      active: {
        type: Array,
        default() {
          let path = window.location.hash.slice(1).split('/')[1]
          let map = {
            '': 0,
            'index': 0,
            'publish': 1,
            'search': 2,
            'zoe': 3,
          }
          let active = [null, null, null, null];
          active[map[path]] = 'active';
          return active;
        }
      }
    },
    beforeRouteEnter(to, from , next) {
      console.log(to);
      next(true);
    }
  }
</script>
