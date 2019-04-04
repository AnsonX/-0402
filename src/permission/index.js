// 配置页面级权限
const permissionMap = {
  'user': {
    desc: '用户信息',
    path: '/user'
  },
  'user_list': {
    desc: '用户列表',
    path: '/user/list'
  },
  'wdgc': {
    desc: '危大工程',
    path: ['/wdgc/form']
  },
  'user_something': {
    desc: 'somthing',
    path: ['/user/something1', '/user/somthing2'] // 某些情况下某个权限可能会对应多个页面，比如某个表单提交可能分好几步需要跳几个页面
  }
}

export default permissionMap
