
const register = {
  url: '/api/user/register',
  data: {
    code: 5200,
    success: true,
    data: {},
    message: '注册失败'
  }
}

const login = {
  url: '/api/user/login',
  data: {
    code: 5200,
    success: true,
    data: 'fdsjfhjkdshfkldsa123123jfjasdfbjsdkfhsdajfj',
    message: '登录失败'
  }
}

const superviseInfo = {
  url: '/api/user/info',
  data: {
    code: 5200,
    success: true,
    data: {
      id: '100001',
      name: '张主任',
      org: {
        id: 101,
        name: '主管单位',
        type: 'supervise', // supervise&construct&work&constructControl&monitor
        roles: ['admin']
      },
      // 后端存储的表单或者表格如果想在前端展示出来就需要页面级权限，
      // 页面级权限还可以根据情况调整分为模块级权限和页面级权限，模块级权限需要配置子页面级权限
      permissions: [
        {
          title: '用户',
          name: 'user',
          // permission存储数据操作级权限
          permission: ['modify', 'delete']
        },
        {
          title: '消息',
          name: 'msg'
        },
        {
          title: '统计查询',
          name: 'tjcx'
        },
        {
          title: '危大工程清单',
          name: 'wdgcqd'
        },
        {
          title: '专家库管理',
          name: 'zjkgl',
          children: [
            {
              title: '专家信息初审',
              name: 'zjkgl_zjxxcs',
              permission: ['modify', 'delete', 'add']
            },
            {
              title: '专家信息审核',
              name: 'zjkgl_zjxxsh',
              permission: ['modify', 'delete', 'add']
            },
            {
              title: '合格专家信息库',
              name: 'zjkgl_hgzjxxk',
              permission: ['modify', 'delete', 'add']
            },
            {
              title: '专家信用评价',
              name: 'zjkgl_zjxypj',
              permission: ['modify', 'delete', 'add']
            },
            {
              title: '黑名单',
              name: 'zjkgl_hmd',
              permission: ['modify', 'delete', 'add']
            }
          ]
        },
        {
          title: '档案管理',
          name: 'dagl',
          permission: ['modify', 'delete', 'add']
        }
      ]
    },
    message: '请求用户信息失败'
  }
}

const constructorInfo = {
  url: '/api/user/info',
  data: {
    code: 5200,
    success: true,
    data: {
      id: '100002',
      name: '张建设',
      roles: ['admin'],
      org: {
        id: 102,
        name: '建设单位',
        type: 'CONSTRUCT'
      },
      permissions: [
        {
          title: '用户',
          name: 'user',
          permission: ['modify', 'delete']
        },
        {
          title: '消息',
          name: 'msg'
        },
        {
          title: '危大工程清单管理',
          name: 'wdgcqdgl',
          children: [
            {
              title: '危大清单管理',
              name: 'wdgcqdgl_wdqdgl',
              permission: ['modify', 'delete', 'add']
            },
            {
              title: '危大工程中止管理',
              name: 'wdgcqdgl_wdgczzgl_mid',
              permission: ['modify', 'delete', 'add']
            },
            {
              title: '危大工程终止管理',
              name: 'wdgcqdgl_wdgczzgl_end',
              permission: ['modify', 'delete', 'add']
            },
            {
              title: '项目管理',
              name: 'wdgcqdgl_xmgl',
              children: [
                {
                  title: '报监申请',
                  name: 'wdgcqdgl_xmgl_bjsq',
                  permission: ['modify', 'delete', 'add']
                },
                {
                  title: '中止管理',
                  name: 'wdgcqdgl_xmgl_zzgl',
                  permission: ['modify', 'delete', 'add']
                },
                {
                  title: '终止申请',
                  name: 'wdgcqdgl_xmgl_zzsq',
                  permission: ['modify', 'delete', 'add']
                }
              ]
            }
          ]
        },
        {
          title: '危大工程清单',
          name: 'dagl',
          permission: ['modify', 'delete', 'add']
        }
      ]
    },
    message: '用户信息获取失败'
  }
}
/***
 * token 失效
 *
 * code:5401
 * success:false
 * data:null
 * message:"无效的token"
 */
export default {
  register,
  login,
  info: superviseInfo,
  backupData: {
    constructorInfo
  }
}
