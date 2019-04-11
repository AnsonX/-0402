import router from '@/router'
import permissionMap from '@/permission'

const user = {
  getUserInfo (state, getters) {
    return state.userInfo
  },
  getPermissions (state, getters) {
    return state.userInfo.permissions
  },
  getOperatingAuth (state, getters) { // 获取当前界面的操作权限
    const currentRoute = router.currentRoute
    const currentPath = currentRoute.path
    const permissions = state.userInfo.permissions
    let auth = null
    let result = null

    // 找到当前路由下对应的权限
    for (const item in permissionMap) {
      if (Array.isArray(permissionMap[item].path) && permissionMap[item].path.includes(currentPath)) {
        auth = item
      } else if (permissionMap[item].path === currentPath) {
        auth = item
      }
    }

    // 返回当前权限对应的操作权限
    if (Array.isArray(permissions) && auth) {
      permissions.forEach(item => {
        if (Array.isArray(item.children) && item.children.length > 0) {
          const subPermission = item.children.find(child => {
            return child.name === auth
          })
          if (subPermission) {
            result = subPermission.permission
          }
        } else if (item.name === auth) {
          result = item.permission
        }
      })
    }

    return result
  }
}

const project = {
  getProjectInfo (state, getters) {
    return state.projectInfo
  }
}

export default {
  ...user,
  ...project
}
