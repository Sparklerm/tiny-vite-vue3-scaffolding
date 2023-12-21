/**
 * 这是一个请求示例
 */
import request from '@/utils/Request'

export default {
  /**
   * 这个方法定义了
   * 1. 请求参数 id
   * 2. 返回数据类型 string
   * @param id 请求参数
   */
  getFun1: (id: number) => {
    return request.get<string>('/demo/items/', id)
  },

  /**
   * 这个方法定义了
   * 1. 请求参数 id
   * 2. 自定义返回数据类型 DemoData
   * @param id 请求参数
   */
  getFun2: (id: number) => {
    return request.get<DemoData>('/demo/items/get', id)
  }
}
