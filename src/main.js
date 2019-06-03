import Vue from 'vue'
import App from './App.vue'
import router from './routers/index'
import store from './store/index'
import VueTouch from 'vue-touch'

// 使用vue-touch
Vue.use(VueTouch, {name: 'v-touch'})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
