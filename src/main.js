import Vue from 'vue'
import App from './App'
import router from './router'
import Plugins from './plugin'
import Mock from './mock/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/common.scss'
import './assets/css/overwrite.scss'
import './assets/css/font/iconfont.scss'

Mock.mockData()
Vue.config.productionTip = false
Vue.use(Plugins)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  mounted () {
    console.log('$router:', this.$router)
  }
})
