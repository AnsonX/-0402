import BaseMainLayout from '@/components/layout/BaseMainLayout'
import BaseFormLayout from '@/components/layout/BaseFormLayout'
const WDGCForm = () => import('@/components/weiDaGongCheng/Form')
const AppLogin = () => import('@/pages/login/AppLogin')
const AppRegister = () => import('@/pages/login/AppRegister')
const HelloWorld = () => import('@/components/HelloWorld')
const AppError401 = () => import('@/pages/error/AppError401')
const AppError404 = () => import('@/pages/error/AppError404')

/* 静态页面路由 */
const staticRouter = [
  {
    path: '/',
    component: BaseMainLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: HelloWorld
      }
    ]
  },
  {
    path: '/wdgc/form',
    props: {
      title: '危大工程',
      headline: true,
      savebtn: true,
      submitbtn: true,
      closebtn: true,
      footer: true
    },
    component: BaseFormLayout,
    children: [
      {
        path: '',
        name: 'formDetail',
        component: WDGCForm
      }
    ]
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
    path: '/error/401',
    name: '错误401',
    meta: {errorPage: true},
    component: AppError401
  },
  {
    path: '*',
    name: '错误404',
    meta: {errorPage: true},
    component: AppError404
  }
]

export default staticRouter
