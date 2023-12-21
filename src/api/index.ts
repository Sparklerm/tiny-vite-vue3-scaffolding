/**
 * 这个类的作用为将所有的API统一管理，调用。
 * 使用方法：
 * 1. 在需要调用接口处引入 import api from '@/api/index'
 * 2. 调用指定方法，如example下的getFun1，api.example.getFun1(param)
 */
import example from './example'

/**
 * 导出接口模块
 */
export default { example }
