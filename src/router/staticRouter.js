const AppLogin = import('@/pages/login/AppLogin')
const AppRegister = import('@/pages/login/AppRegister')
const HelloWord = import('@/components/HelloWord')

/* 静态页面路由 */
const staticRouter = [
  {
    path: '/',
    redirect: '/index'
  }, {
    path: '/login',
    name: '登录',
    component: AppLogin
  }, {
    path: '/register',
    name: '注册',
    component: AppRegister
  }, {
    path: '/index',
    name: '首页',
    component: HelloWord
  }
]

export default staticRouter
