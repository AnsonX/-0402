const testLogin = function (context, params) {
  return this.$request('/api/user/login', params).then(res => {
    context.commit('SET_TEST_ID', 123)
    context.commit('SET_TEST_NAME', 'abc')
  })
}

export default {
  testLogin
}
