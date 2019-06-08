import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
import VueTouch from 'vue-touch'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueLazyload from 'vue-lazyload'
import * as filters from './filters'

// 使用vue-touch
Vue.use(VueTouch, {name: 'v-touch'})

// 使用MintUI
Vue.use(MintUI)

//使用图片懒加载
Vue.use(VueLazyload, {
  error: '',
})

//添加全局过滤器
Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
