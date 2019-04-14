import { request } from './request'

const plugins = {
  install: function (Vue) {
    Vue.prototype.$request = request // 注册axios

    // this.$eventBus.$on('eventName', handle)
    // this.$eventBus.$emit('eventName', value)
    Vue.prototype.$eventBus = new Vue() // 注册全局事件对象
  }
}

export default plugins
