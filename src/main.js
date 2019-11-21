import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible'
import {post,get} from './utils/request';
import axios from 'axios';  
Vue.prototype.$axios=axios;
Vue.use(Vant);
Vue.prototype.$post = post
Vue.prototype.$get = get
Vue.config.productionTip = false
Vue.prototype.$sleep = time => {
	return new Promise(resolve => {
	  window.setTimeout(() => {
		  resolve()
	  }, time)
	})
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
