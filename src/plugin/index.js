import { request } from './request'

const plugins = {
  install: function (Vue) {
    Vue.prototype.$eventBus = new Vue() // 注册全局事件对象
    Vue.prototype.$request = request // 注册axios
  }
}

export default plugins
