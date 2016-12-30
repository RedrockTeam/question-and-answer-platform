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
import zoeCollection from './components/sub_components/zoe_collection'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index,
  },
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
    children: [
      {
        path: '/',
        component: zoeIndex,
      }, {
        path: 'collection',
        component: zoeCollection,
      },{
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
      },
    ]
  }
]

const router = new VueRouter({
  routes
})


const app = new Vue({
  data() {
    return {
      active: ["active", "", "",""]
    }
  },
  el: '#app',
  template: '<App :active="active"/>',
  router,
  components: {
    App
  },
});
router.beforeEach((to, from, next) => {
    let path = to.path.split('/')[1];   
    let map = {
      'index': 0,
      'publish': 1,
      'search': 2,
      'zoe': 3,
    }
    let active = Array(4);
    active[map[path]] = 'active';
    app.active = active;
    next(true);
})


