const plugins = {
  install: function (Vue) {
    Vue.prototype.$eventBus = new Vue()// 注册全局事件对象
  }
}

export default plugins
