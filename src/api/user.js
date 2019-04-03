import {request} from '../utils/request'

export const requestLogin = params => {
  return request('/api/user/login', params).then(res => {
    // TODO 个人信息存全局
    localStorage.setItem('user-token', JSON.stringify(res)) // TODO 根据具体返回格式调整 ，如res.success.token
  })
}

export const requestRegister = params => {
  return request('/api/user/register', params)
}

export const requestUserInfo = params => {
  return request('/api/user/info', params).then((data) => {
    sessionStorage.setItem('user-info', JSON.stringify(data))
    return data
  })
}
