import Mock from 'mockjs'

Mock.setup({
  timeout: '200-600'
})

Mock.mock('/api/task', 'get', {
  status: 200,
  message: '获取商品信息成功',
  "data|5-10": [
    {
      "id|+1": 1,
    }
  ]
})

export default Mock


