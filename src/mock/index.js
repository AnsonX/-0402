import Mock from 'mockjs'
import user from './user'

const mockData = {
  ...user
}

export default {
  mockData () {
    for (const k in mockData) {
      const item = mockData[k]
      Mock.mock(item.url, item.data)
    }
  }
}
