import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'


import router from './router'

Vue.use(VueRouter)
Vue.use(VueResource)


const el = '#app'
const components = {App}
const template = '<App/>'

new Vue({
  el,
  components,
  template,
  router
})
