import userApi from '@/api/user'

const user = {
  userLogin: function (context, params) {
    return userApi.login(params).then(res => {
      sessionStorage.setItem('user-token', res.token) // TODO 根据具体返回格式调整
    })
  },
  userRegister: function (context, params) {
    return userApi.register(params)
  },
  userInfo: function (context, params) {
    return new Promise((resolve, reject) => {
      userApi.info(params).then(data => {
        context.commit('SET_USER_INFO', data)
        resolve(data)
      }).catch(data => {
        reject(data)
      })
    })
  }
}

const project = {
}

export default {
  ...user,
  ...project
}
