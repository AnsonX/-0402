import axios from 'axios'
import { MessageBox } from 'element-ui'

/**
 * 一、request：
 *  1. 说明：封装对后台的请求，可以选择自动处理一些异常。
 *  2. 参数：
 *     - url：            后台地址，必填，String，如："/user/add"
 *     - params：         请求参数，必填，Object，如：{"name":"xxx"}
 *     - config：         axios参数，选填，Object，默认值：{}
 *     - autoErrorRes： 是否自动处理响应错误，选填，Boolean，默认值：true
 *     - autoErrorData：是否自动处理后台错误，选填，Boolean，默认值：true
 *  3. 返回：
 *     - 成功：Promise.resolve(请求成功后的结果：response.data.result)
 *     - 失败：
 *     - 请求异常：Promise.reject(http响应错误)
 *     - 请求失败：Promise.reject(请求失败后的结果：response.data.error)
 *  4. 约定后台返回数据格式：
 *     response.data = {
 *       "result": 'true/false',        // 请求成功或者失败
 *       "success": {},                  //请求成功后的结果
 *       "error":{
 *         "code": 100001,              //请求失败错误码
 *         "message": "用户名字重复"     //请求失败描述
 *       }
 *     }
 *
 * 另外为了加快访问速度，有时我们需要对请求进行缓存。
 * 二、sessionRequest：
 *  1. 说明：利用sessionStorage缓存请求，可以选择outTime，其他同request。
 *  2. 参数：
 *      - outTime：距离上次请求多少秒后需要重新请求，选填，Integer，小于0表示不重新请求，默认值：-1
 * 三、localRequest：
 *  1. 说明：利用localStorage缓存请求，可以选择outTime，其他同request。
 *  2. 参数：
 *      - outTime：距离上次请求多少秒后需要重新请求，选填，Integer，小于0表示不重新请求，默认值：604800（一周）
 *
 */

axios.defaults.baseURL = ''

export const request = (url, params, config = {}, autoErrorRes = true, autoErrorData = true) => {
  const args = Object.assign({
    'method': 'post',
    'url': url,
    'data': params
  }, config)
  // TODO 上传文件的接口请求如果需要额外参数或者不需要token，可以在config里配置，这里根据情况过滤处理一次args

  return axios(args).then(res => {
    if (!res.data.success) {
      res.data.error = res.data.error || {}
      console.error(res.data.error)
      if (autoErrorData) {
        const err_msg = res.data.error.message || '未知的服务器错误，请联系管理员！'
        const err_cod = res.data.error.code || -1
        MessageBox.alert(err_msg, '请求失败：' + err_cod, {confirmButtonText: '确定'})
      }
      return Promise.reject(res.data.error)
    }
    return res.data.result
  }, error => {
    console.error(error)
    if (autoErrorRes) {
      const err_status = error.response.status || -100
      MessageBox.alert('网络请求异常，请联系管理员！', '请求异常：' + err_status, {confirmButtonText: '确定'})
    }
    return Promise.reject(error)
  })
}

/* 使用sessionStorage缓存的请求 */
export const sessionRequest = (url, params, outTime = -1, config = {}, autoErrorRes = true, autoErrorData = true) => {
  const item_key = url + '#' + JSON.stringify(params)
  let itemVal = sessionStorage.getItem(item_key)
  const nowTime = new Date().getTime()
  if (itemVal) {
    itemVal = JSON.parse(itemVal)
    const over_time = nowTime - itemVal.last_time
    if (outTime < 0 || over_time < outTime * 1000) {
      return Promise.resolve(itemVal.data)
    }
  }
  return request(url, params, config, autoErrorRes, autoErrorData).then(data => {
    sessionStorage.setItem(item_key, JSON.stringify({
      'last_time': nowTime,
      'data': data
    }))
    return data
  })
}

/* 使用localStorage缓存的请求 */
export const localRequest = (url, params, outTime = 604800, config = {}, autoErrorRes = true, autoErrorData = true) => {
  const item_key = url + '#' + JSON.stringify(params)
  let itemVal = localStorage.getItem(item_key)
  const nowTime = new Date().getTime()
  if (itemVal) {
    itemVal = JSON.parse(itemVal)
    const over_time = nowTime - itemVal.last_time
    if (outTime < 0 || over_time < outTime * 1000) {
      return Promise.resolve(itemVal.data)
    }
  }
  return request(url, params, config, autoErrorRes, autoErrorData).then(data => {
    localStorage.setItem(item_key, JSON.stringify({
      'last_time': nowTime,
      'data': data
    }))
    return data
  })
}
