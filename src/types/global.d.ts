/**
 * @description: 全局类型定义
 */

/**
 * @description: 基础请求返回类型
 */
declare interface ResType<T> {
  code: number
  data?: T
  message?: string
  errorCode?: string
}

/**
 * @description: 基础分页请求返回类型
 * 用法：ex.get<PageRes<T>>(...)
 */
declare interface PageRes<T> {
  current: number
  pageSize: number
  total?: number
  records: T[]
}

/**
 * @description: 基础分页请求参数类型
 */
declare enum sortEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

/**
 * @description 分页请求参数
 */
declare interface PageReq {
  current: number
  pageSize: number
  sortField?: string
  sortOrder?: sortEnum.ASC | sortEnum.DESC
}
