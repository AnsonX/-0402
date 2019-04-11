import { request } from '@/plugin/request'

export default {
  login: function (params) {
    return request('/api/user/login', params)
  },
  register: function (params) {
    return request('/api/user/register', params)
  },
  info: function (params) {
    return request('/api/user/info', params)
  }
}
