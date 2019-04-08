import Vue from 'vue'
import Router from 'vue-router'
import whiteList from './whiteList'
import permissionMap from '@/permission'
import staticRouter from './staticRouter'
import userApi from '@/api/user'

Vue.use(Router)

const router = new Router({
  routes: staticRouter
})

// 利用router.meta保存操作级权限
const routerInit = (permissions) => {
  permissions.forEach(function (v) {
    // 如果该权限下配了array（多个路由）
    if (Array.isArray(permissionMap[v.name].path)) {
      permissionMap[v.name].path.forEach(subPath => {
        let routeItem = router.match(subPath)
        if (routeItem) {
          routeItem.meta.permission = v.permission ? v.permission : []
        }
        console.log('routeItem:', routeItem)
      })
    } else {
      // 该权限下只配了string（一个路由）
      let routeItem = router.match(permissionMap[v.name].path)
      if (routeItem) {
        routeItem.meta.permission = v.permission ? v.permission : []
      }
    }
  })
}

// 检测用户是否有权限访问页面
const pagePermission = (permissions, toPath, next) => {
  let allowPage = false

  // 登陆后主layout界面不需要权限
  if (toPath === '/') {
    allowPage = true
  }

  permissions.forEach(function (v) {
    // 如果该权限下配了array（多个路由）
    if (Array.isArray(permissionMap[v.name].path)) {
      permissionMap[v.name].path.forEach(subPath => {
        if (toPath === subPath) {
          allowPage = true
        }
      })
    } else {
      // 该权限下只配了string（一个路由）
      if (toPath === permissionMap[v.name].path) {
        allowPage = true
      }
    }
  })

  allowPage ? next() : next({path: '/error/401'})
}

// 权限控制
router.beforeEach((to, from, next) => {
  // 忽略错误页面的权限判断
  if (to.meta.errorPage) {
    return next()
  }

  // 进入登录页面将注销用户信息
  if (to.path === '/login') {
    sessionStorage.removeItem('user-info')
    localStorage.removeItem('user-token')
  }

  // 免登录页面
  if (whiteList.indexOf(to.fullPath) >= 0) {
    return next()
  }

  let userInfo = JSON.parse(sessionStorage.getItem('user-info'))
  console.log('userApi:', userApi)
  // 上次会话结束，重新获取用户信息
  if (!userInfo) {
    userApi.info({}).then(userInfo => {
      const permissions = userInfo.permissions || []

      // 初始化操作级权限
      routerInit(permissions)

      // 路由跳转控权
      pagePermission(permissions, to.path, next)
    }).catch((err) => {
      // 获取用户信息异常
      console.error(err)
    })
  } else {
    // 已登录时判断页面权限
    const permissions = userInfo.permissions || []
    pagePermission(permissions, to.path, next)
  }
})

export default router
