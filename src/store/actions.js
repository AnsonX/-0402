import userApi from '@/api/user'

const user = {
  userLogin: function (context, params) {
    return userApi.login(params).then(res => {
      localStorage.setItem('user-token', JSON.stringify(res)) // TODO 根据具体返回格式调整 ，如res.success.token
    })
  },
  userRegister: function (context, params) {
    return userApi.register(params)
  },
  userInfo: function (context, params) {
    return userApi.info(params).then((data) => {
      sessionStorage.setItem('user-info', JSON.stringify(data))
      // TODO 个人信息存到state
      return data
    })
  }
}

const project = {
}

export default {
  ...user,
  ...project
}
