import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import { Message } from 'element-ui'
import whiteList from './whiteList'
import permissionMap from '@/permission'
import { staticRouter, footRouter } from './staticRouter'
import superviseUnitRouter from './superviseUnitRouter'
import constructionUnitRouter from './constructionUnitRouter'
import workUnitRouter from './workUnitRouter'
import constructionControlUnitRouter from './constructionControlUnitRouter'
import monitorUnitRouter from './monitorUnitRouter'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style

Vue.use(Router)

const router = new Router({
  routes: staticRouter
})

// 根据机构类型(子系统)更新路由
const updateRouter = (orgType, permissions) => {
  const map = {
    supervise: superviseUnitRouter,
    construct: constructionUnitRouter,
    work: workUnitRouter,
    constructionControl: constructionControlUnitRouter,
    monitor: monitorUnitRouter
  }
  let part = map[orgType] || []

  // 暂时不做权限级别的路由动态更新，每次刷新页面权限可能会动态改变，可以根据权限控制路由跳转。前端不管怎么控制权限其实都是不安全的，后端权限校验是逃不掉的。
  // let permissionPart = []
  // if (Array.isArray(permissions)) {
  //   permissions.forEach(item => {
  //     let permission = item.name
  //     if (Array.isArray(item.children)) {
  //       // 包含子权限，继续查找子权限
  //       item.children.forEach(child => {
  //         permission = child.name

  //         // 获取权限对应的路由，通过permissionMap来查找权限和路由的映射关系
  //         let o = part.find(partItem => {
  //           if (Array.isArray(permissionMap[permission].path)) {
  //             // permissionMap中配了多个路由
  //             return permissionMap[permission].path.includes(partItem.path)
  //           } else {
  //             // permissionMap中只配了一个路由
  //             return permissionMap[permission].path === partItem.path
  //           }
  //         })

  //         if (o) {
  //           permissionPart.push(o)
  //         }
  //       })
  //     } else {
  //       // 不包含子权限
  //       permission = item.name

  //       // 获取权限对应的路由，通过permissionMap来查找权限和路由的映射关系
  //       let o = part.find(partItem => {
  //         if (Array.isArray(permissionMap[permission].path)) {
  //           // permissionMap中配了多个路由
  //           return permissionMap[permission].path.includes(partItem.path)
  //         } else {
  //           // permissionMap中只配了一个路由
  //           return permissionMap[permission].path === partItem.path
  //         }
  //       })

  //       if (o) {
  //         permissionPart.push(o)
  //       }
  //     }
  //   })
  // }

  router.addRoutes(part)
  router.addRoutes(footRouter)
}

// 根据权限查判断默认跳转的首页路由
const isHasPermission = (permissions, routeItem) => {
  const path = routeItem.path
  let r = false
  let arr = []

  permissions.forEach(subPermission => {
    // 获取权限列表
    if (Array.isArray(subPermission.children)) { // 如果有子权限
      arr = [...arr, ...subPermission.children]
    } else {
      arr.push(subPermission)
    }
  })

  // 查找当前路由是否有对应权限支持
  arr.some(permissionItem => {
    if (permissionMap[permissionItem.name]) { // 过滤父级权限
      if (Array.isArray(permissionMap[permissionItem.name].path)) {
        r = permissionMap[permissionItem.name].path.includes(path)
      }
      return r
    }
  })

  return r
}

// 检测用户是否有权限访问页面
const pagePermission = (orgType, permissions, to, next) => {
  let allowPage = false
  // 根据当前子系统，依次遍历子系统路由，如果有权限，则自动跳转到该路由
  if (to.path === '/') {
    const map = {
      supervise: superviseUnitRouter,
      construct: constructionUnitRouter,
      work: workUnitRouter,
      constructionControl: constructionControlUnitRouter,
      monitor: monitorUnitRouter
    }
    let part = map[orgType] || []
    let target = null

    part.some(routeItem => {
      if (isHasPermission(permissions, routeItem)) {
        target = routeItem
        return true
      }
    })

    if (target) {
      next({ path: target.path })
      return
    } else {
      Message({
        message: '没有访问权限，请联系管理员',
        type: 'error'
      })
      next({ path: '/error/401' })
      return
    }
  }

  // 指定路由跳转权限检查
  if (isHasPermission(permissions, { path: to.path })) {
    allowPage = true
  }

  allowPage ? next() : next({ path: '/error/401' })
}

// 权限控制
router.beforeEach((to, from, next) => {
  console.log('router:', router)
  // 进入登录页面将注销用户信息
  if (to.path === '/login') {
    sessionStorage.removeItem('user-token')
    return next()
  }

  // 忽略错误页面的权限判断
  if (to.meta.errorPage) {
    return next()
  }

  // 免登录页面
  if (whiteList.indexOf(to.fullPath) >= 0) {
    return next()
  }

  const userToken = sessionStorage.getItem('user-token')
  const userInfoStore = store.getters.getUserInfo

  // 无token则跳登录页
  if (!userToken) {
    return next({ path: '/login' })
  }

  // 页面刷新或者跳转的时候更新用户信息和权限信息，用户信息和权限信息放到store管理，页面刷新的时候会重新初始化
  NProgress.start()
  if (userInfoStore && userInfoStore.permissions) { // 已加载了用户信息&权限信息意味着路由已经初始化过
    // 路由跳转控权
    pagePermission(userInfoStore.org.type, userInfoStore.permissions, to, next)
    NProgress.done()
  } else {
    store.dispatch('userInfo', { token: userToken }).then(res => {
      NProgress.done()
      const userInfo = res.data
      const permissions = userInfo.permissions || []

      updateRouter(userInfo.org.type, permissions)
      next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
    }).catch((err) => {
      console.error(err)
    })
  }
})

export default router
