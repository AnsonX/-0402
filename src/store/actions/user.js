/*
 * 文件名尽量与后端服务对应上
 * 接口命名request[服务名][接口名]
 */

const userLogin = function (context, params) {
  return this.$request('/api/user/login', params).then(res => {
    localStorage.setItem('user-token', JSON.stringify(res)) // TODO 根据具体返回格式调整 ，如res.success.token
  })
}

const userRegister = function (context, params) {
  return this.$request('/api/user/register', params)
}

const userInfo = function (context, params) {
  return this.$request('/api/user/info', params).then((data) => {
    sessionStorage.setItem('user-info', JSON.stringify(data))
    // TODO 个人信息存到state
    return data
  })
}

export default {
  userLogin,
  userRegister,
  userInfo
}
