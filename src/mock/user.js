
const register = {
  url: '/api/user/register',
  data: {
    'success': true,
    'result': {}
  }
}

const login = {
  url: '/api/user/login',
  data: {
    'success': true,
    'result': {
      'token': 'fdsjfhjkdshfkldsa123123jfjasdfbjsdkfhsdajfj'
    }
  }
}

const superviseInfo = {
  url: '/api/user/info',
  data: {
    'success': true,
    'result': {
      'id': '100001',
      'name': '张主任',
      'org': {
        id: 101,
        name: '主管单位',
        type: 'supervise', // supervise&construct&work&constructControl&monitor
        roles: ['admin']
      },
      // 后端存储的表单或者表格如果想在前端展示出来就需要页面级权限，
      // 页面级权限还可以根据情况调整分为模块级权限和页面级权限，模块级权限需要配置子页面级权限
      'permissions': [
        {
          desc: '用户',
          name: 'user',
          // permission存储数据操作级权限
          permission: ['modify', 'delete']
        },
        {
          desc: '消息',
          name: 'msg'
        },
        {
          desc: '统计查询',
          name: 'tjcx'
        },
        {
          desc: '危大工程清单',
          name: 'wdgcqd'
        },
        {
          desc: '专家库管理',
          name: 'zjkgl',
          children: [
            {
              desc: '专家信息初审',
              name: 'zjkgl_zjxxcs',
              permission: ['modify', 'delete', 'add']
            },
            {
              desc: '专家信息审核',
              name: 'zjkgl_zjxxsh',
              permission: ['modify', 'delete', 'add']
            },
            {
              desc: '合格专家信息库',
              name: 'zjkgl_hgzjxxk',
              permission: ['modify', 'delete', 'add']
            },
            {
              desc: '专家信用评价',
              name: 'zjkgl_zjxypj',
              permission: ['modify', 'delete', 'add']
            },
            {
              desc: '黑名单',
              name: 'zjkgl_hmd',
              permission: ['modify', 'delete', 'add']
            }
          ]
        },
        {
          desc: '档案管理',
          name: 'dagl',
          permission: ['modify', 'delete', 'add']
        }
      ]
    },
    'error': {
      'code': 100000,
      'message': '无效的token'
    }
  }
}

const constructorInfo = {
  url: '/api/user/info',
  data: {
    'success': true,
    'result': {
      'id': '100002',
      'name': '张建设',
      'roles': ['admin'],
      'org': {
        id: 102,
        name: '建设单位',
        type: 'CONSTRUCT'
      },
      'permissions': [
        {
          desc: '用户',
          name: 'user',
          permission: ['modify', 'delete']
        },
        {
          desc: '消息',
          name: 'msg'
        },
        {
          desc: '危大工程清单管理',
          name: 'wdgcqdgl',
          children: [
            {
              desc: '危大清单管理',
              name: 'wdgcqdgl_wdqdgl',
              permission: ['modify', 'delete', 'add']
            },
            {
              desc: '危大工程中止管理',
              name: 'wdgcqdgl_wdgczzgl_mid',
              permission: ['modify', 'delete', 'add']
            },
            {
              desc: '危大工程终止管理',
              name: 'wdgcqdgl_wdgczzgl_end',
              permission: ['modify', 'delete', 'add']
            },
            {
              desc: '项目管理',
              name: 'wdgcqdgl_xmgl',
              children: [
                {
                  desc: '报监申请',
                  name: 'wdgcqdgl_xmgl_bjsq',
                  permission: ['modify', 'delete', 'add']
                },
                {
                  desc: '中止管理',
                  name: 'wdgcqdgl_xmgl_zzgl',
                  permission: ['modify', 'delete', 'add']
                },
                {
                  desc: '终止申请',
                  name: 'wdgcqdgl_xmgl_zzsq',
                  permission: ['modify', 'delete', 'add']
                }
              ]
            }
          ]
        },
        {
          desc: '危大工程清单',
          name: 'dagl',
          permission: ['modify', 'delete', 'add']
        }
      ]
    },
    'error': {
      'code': 100000,
      'message': '无效的token'
    }
  }
}

export default {
  register,
  login,
  info: superviseInfo,
  backupData: {
    constructorInfo
  }
}
