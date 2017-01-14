import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import home from './pages/home/index'
import homeHot from './pages/home/hot'
import homeNew from './pages/home/new'
import publish from './pages/publish/index'
import zoe from './pages/zoe/index'
import search from './pages/search'
import zoeIndex from './pages/zoe/zoe_index'
import zoeEditor from './pages/zoe/zoe_editor'
import zoeAnswer from './pages/zoe/zoe_answer'
import zoeMessage from './pages/zoe/zoe_message'
import zoeChat from './pages/zoe/zoe_chat'
import zoeCollection from './pages/zoe/zoe_collection'

Vue.use(VueRouter)

const zoeRoutes = [{
  path: '/',
  component: zoeIndex,
}, {
  path: 'collection',
  component: zoeCollection,
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
  component: zoeChat,
}]

const homeRoutes = [{
  path: '/',
  redirect: 'new',
} , {
  path: 'hot',
  component: homeHot,
}, {
  path: 'new',
  component: homeNew,
}]

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: home,
  children: homeRoutes
}, {
  path: '/publish',
  component: publish,
}, {
  path: '/search',
  component: search,
}, {
  path: '/zoe',
  component: zoe,
  children: zoeRoutes
}]


const router = new VueRouter({
  routes,
})


const app = new Vue({
  el: '#app',
  components: {
    App,
  },
  router,
  template: '<App/>',
})
