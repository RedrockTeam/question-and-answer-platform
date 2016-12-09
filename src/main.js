import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'


import index from './components/index'
import publish from './components/publish'
import zoe from './components/zoe'
import search from './components/search'


// import zoeIndex from './components/sub_components/zoe_index'


Vue.use(VueRouter)

const routes = [
  {
    path: '/index', 
    component: index,
  }, { 
    path: '/zoe', 
    component: zoe,
    children: [
      {
        path: 'index',
        // component: zoeIndex,
      }
    ]
  }, {
    path: '/search', 
    component: search 
  }, { 
    path: '/publish', 
    component: publish 
  },
]

const router = new VueRouter({
  routes
})


const app = new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: {
    App
  }
})

