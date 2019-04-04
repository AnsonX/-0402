
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

const info = {
  url: '/api/user/info',
  data: {
    'success': true,
    'result': {
      'id': '100001',
      'name': '林锦泽',
      'roles': ['admin'],
      // 后端存储的表单或者表格如果想在前端展示出来就需要页面级权限，
      // 页面级权限还可以根据情况调整分为模块级权限和页面级权限，模块级权限需要配置子页面级权限
      'permissions': [
        {
          desc: '用户',
          name: 'user',
          // permission存储数据级权限控制
          permission: ['modify', 'delete']
        },
        {
          desc: '统计查询',
          name: 'tjcx'

        },
        {
          desc: '危大工程',
          name: 'wdgc',
          permission: ['add', 'modify', 'delete']
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
  info
}
