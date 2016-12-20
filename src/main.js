import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'


import index from './components/index'
import publish from './components/publish'
import zoe from './components/zoe'
import search from './components/search'


import zoeIndex from './components/sub_components/zoe_index'
import zoeEditor from './components/sub_components/zoe_editor'
import zoeAnswer from './components/sub_components/zoe_answer'
import zoeMessage from './components/sub_components/zoe_message'
import zoeChat from './components/sub_components/zoe_chat'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index', 
    component: index,
  }, { 
    path: '/publish', 
    component: publish 
  }, , {
    path: '/search', 
    component: search 
  }, { 
    path: '/zoe', 
    component: zoe,
    children: [{
      path: '/',
      component: zoeIndex,
    }, {
      path: 'editor',
      component: zoeEditor,
    }, {
      path: 'answer',
      component: zoeAnswer,
    }, {
      path: 'message',
      component: zoeMessage,
    }, {
      path: 'chat/:id',
      component: zoeChat
    }]
  }
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

