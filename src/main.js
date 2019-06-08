import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
import VueTouch from 'vue-touch'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// 绑定发布订阅模式
import Observer from './utils/observer'

Vue.prototype.$Observer = Observer


// 使用vue-touch
Vue.use(VueTouch, {name: 'v-touch'})

// 使用MintUI
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
