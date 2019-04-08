export default {
  login: function (params) {
    return this.$request('/api/user/login', params).then(res => {
      localStorage.setItem('user-token', JSON.stringify(res)) // TODO 根据具体返回格式调整 ，如res.success.token
    })
  },
  register: function (params) {
    return this.$request('/api/user/register', params)
  },
  info: function (params) {
    return this.$request('/api/user/info', params).then((data) => {
      sessionStorage.setItem('user-info', JSON.stringify(data))
      return data
    })
  }
}
