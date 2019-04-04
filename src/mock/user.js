
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
      'permissions': [
        {
          desc: '用户',
          name: 'user',
          // permission存储数据级权限控制
          permission: ['modify', 'delete']
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
