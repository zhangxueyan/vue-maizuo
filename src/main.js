// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/css/reset.css'
import './assets/icon/iconfont.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import 'lib-flexible'
Vue.config.productionTip = false


/**
 * 对象数组去重，根据str属性
 */
Array.prototype.unique = function(str){
	const seen = new Map()
	return this.filter((a) => {
		return !seen.has(a['name']) && seen.set(a['name'], 1)
	})
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
