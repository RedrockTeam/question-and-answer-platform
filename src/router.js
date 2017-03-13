import VueRouter from 'vue-router'

// home page and subpages
import home from './pages/home/'
import post from './pages/home/post'

import detail from './pages/detail'

import publish from './pages/publish/'
import publishCategorys from './pages/publish/publish_categorys'
import publishEditor from './pages/publish/publish_editor'

import reply from './pages/reply'

// search page and subpages
import search from './pages/search/'
import searchPrompts from './pages/search/prompts'
import searchResults from './pages/search/results'

// user page and subpages
import user from './pages/user/'
import userIndex from './pages/user/user_index'
import userEditor from './pages/user/user_editor'
import userMessage from './pages/user/user_message'
import userChat from './pages/user/user_chat'
import userCollection from './pages/user/user_collection'
import userPublish from './pages/user/user_publish'
import userReply from './pages/user/user_reply'
// /user sub routes
const userRoutes = [{
  path: '/',
  component: userIndex
}, {
  path: 'collection',
  component: userCollection
}, {
  path: 'editor',
  component: userEditor
}, {
  path: 'message',
  component: userMessage
}, {
  path: 'chat/:to',
  component: userChat
}, {
  path: 'publish',
  component: userPublish
}, {
  path: 'reply',
  component: userReply
}]

// /home sub routes
const homeRoutes = [{
  path: '/',
  redirect: 'new/-1'
}, {
  path: ':type/:id',
  component: post
}]

// publish sub routes
const publishRoutes = [{
  path: '/',
  redirect: 'categorys'
}, {
  path: 'categorys',
  component: publishCategorys
}, {
  path: 'editor/:category_id',
  component: publishEditor
}]

// search sub routes
const searchRoutes = [{
  path: '/',
  redirect: 'prompts'
}, {
  path: 'prompts',
  component: searchPrompts
}, {
  path: 'results/:keywords',
  component: searchResults
}]

// app routes
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
  children: publishRoutes
}, {
  path: '/search',
  component: search,
  children: searchRoutes
}, {
  path: '/user/:id',
  component: user,
  children: userRoutes
}, {
  path: '/detail/:id',
  component: detail
}, {
  path: '/reply/:id',
  component: reply
}]

const router = new VueRouter({routes})

export default router
