
const AppLogin = () => import('@/pages/login/AppLogin')
const AppRegister = () => import('@/pages/login/AppRegister')
const AppError401 = () => import('@/pages/error/AppError401')
const AppError404 = () => import('@/pages/error/AppError404')
const user = () => import('@/pages/user')
const msgForm = () => import('@/pages/msg/form')
const msgList = () => import('@/pages/msg/list')

const commonRouter = [
  {
    path: '/',
    name: 'redirect'
  },
  {
    path: '/login',
    name: 'login',
    component: AppLogin
  },
  {
    path: '/register',
    name: 'register',
    component: AppRegister
  },
  {
    path: '/user',
    name: 'user',
    component: user
  },
  {
    path: '/msg/form',
    name: 'msgForm',
    component: msgForm
  },
  {
    path: '/msg/list',
    name: 'msgList',
    component: msgList
  },
  {
    path: '/error/401',
    name: '错误401',
    meta: {errorPage: true},
    component: AppError401
  },
  {
    path: '/error/404',
    name: '错误404',
    meta: {errorPage: true},
    component: AppError404
  }
]
export const footRouter = [
  {
    path: '*',
    redirect: '/error/404',
    hidden: true,
    meta: {errorPage: true}
  }
]

/* 静态页面路由 */
export const staticRouter = [
  ...commonRouter
]
