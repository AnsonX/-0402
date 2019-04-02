import Mock from 'mockjs'
import { detail, login } from './user'

const mockData = {
  detail,
  login
}

export default {
  mockData () {
    for (const k in mockData) {
      const item = mockData[k]
      Mock.mock(item.url, item.data)
    }
  }
}
