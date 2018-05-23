// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from '../node_modules/element-ui';
import '../node_modules/element-ui/lib/theme-chalk/index.css';
import './assets/styles/global.css';
import Vuex from 'vuex'
import Vue from 'vue'
import App from './App'
import router from './router/router'
import '../node_modules/normalize.css/normalize.css'
import Router from 'vue-router'

import createstore from './store/store'
Vue.use(Vuex)
Vue.use(Router)
Vue.use(ElementUI);
const store=createstore()
Vue.config.productionTip = false
//路由跳转时，会触发此钩子 注册一个全局前置首卫
router.beforeEach((to,from,next)=>{
  console.log('before each invoked')
  next()
})
//
router.beforeResolve((to,from,next)=>{
  console.log('before resolve invoked')
  next()
})
//导航跳转之后被触发
router.afterEach((to,from)=>{
  console.log('after each invoked')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
