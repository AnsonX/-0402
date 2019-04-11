// 配置页面级权限
const permissionMap = {
  'user': {
    desc: '用户信息',
    path: '/user'
  },
  'msg': {
    desc: '消息查看',
    path: ['/msg/list', '/msg/form']
  },
  'tjcx': {
    desc: '统计查询',
    path: '/tjcx'
  },
  'wdgcqd': {
    desc: '危大工程清单',
    path: ['/wdgcqd/list', '/wdgc/form'] // 某些情况下某个权限可能会对应多个页面，比如某个表单提交可能分好几步需要跳几个页面,查看列表以及某一条的详情
  },
  'zjkgl_zjxxcs': { // 专家库管理
    desc: '专家信息初审',
    path: ['/zjkgl/zjxxcs/list', '/zjkgl/zjxxcs/form']
  },
  'zjkgl_zjxxsh': { // 专家库管理
    desc: '专家信息审核',
    path: ['/zjkgl/zjxxsh/list', '/zjkgl/zjxxsh/form']
  },
  'zjkgl_hgzjxxk': { // 专家库管理
    desc: '合格专家信息库',
    path: ['/zjkgl/hgzjxxk/list', '/zjkgl/hgzjxxk/form']
  },
  'zjkgl_zjxypj': { // 专家库管理
    desc: '专家信用评价',
    path: ['/zjkgl/zjxypj/list', '/zjkgl/zjxypj/form']
  },
  'zjkgl_hmd': { // 专家库管理
    desc: '黑名单',
    path: ['/zjkgl/hmd/list', '/zjkgl/hmd/form']
  },
  'dagl': {
    desc: '档案管理',
    path: ['/dagl/list', '/dagl/form']
  }
}

export default permissionMap
