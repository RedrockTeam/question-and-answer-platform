import VueRouter from 'vue-router'


// home page and subpages
import home from './pages/home/'
import homeHot from './pages/home/hot'
import homeNew from './pages/home/new'

import detail from './pages/detail'

import publish from './pages/publish/'
import publishCategorys from './pages/publish/publish_categorys'
import publishEditor from './pages/publish/publish_editor'

import reply from './pages/reply'

// search page and subpages
import search from './pages/search/'
import searchPrompts from './pages/search/prompts'
import searchResults from './pages/search/results'

// zoe page and subpages
import zoe from './pages/zoe/'
import zoeIndex from './pages/zoe/zoe_index'
import zoeEditor from './pages/zoe/zoe_editor'
import zoeMessage from './pages/zoe/zoe_message'
import zoeChat from './pages/zoe/zoe_chat'
import zoeCollection from './pages/zoe/zoe_collection'
import zoePublish from './pages/zoe/zoe_publish'
import zoeReply from './pages/zoe/zoe_reply'
// /zoe sub routes
const zoeRoutes = [{
  path: '/',
  component: zoeIndex
}, {
  path: 'collection',
  component: zoeCollection
}, {
  path: 'editor',
  component: zoeEditor
}, {
  path: 'message',
  component: zoeMessage
}, {
  path: 'chat/:id',
  component: zoeChat
}, {
  path: 'publish',
  component: zoePublish
}, {
  path: 'reply',
  component: zoeReply
}]

// /home sub routes
const homeRoutes = [{
  path: '/',
  redirect: 'new'
}, {
  path: 'hot',
  component: homeHot
}, {
  path: 'new',
  component: homeNew
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
  path: '/zoe',
  component: zoe,
  children: zoeRoutes
}, {
  path: '/detail/:id',
  component: detail
}, {
  path: '/reply/:id',
  component: reply
}]

const router = new VueRouter({routes})

export default router
