import axios, { InternalAxiosRequestConfig } from 'axios'
import NProgress from 'nprogress'

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: import.meta.env.TIMEOUT,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

// 请求拦截器
service.interceptors.request.use(
  (config): InternalAxiosRequestConfig<any> => {
    // 执行请求前的操作，如添加Header等
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(res => {
  // 拦截接口响应信息，根据响应信息定义不同的操作
  return res
})

interface Request {
  get<T>(url: string, params?: unknown): Promise<ResType<T>>

  post<T>(url: string, params?: unknown): Promise<ResType<T>>

  put<T>(url: string, params?: unknown): Promise<ResType<T>>

  delete<T>(url: string, params?: unknown): Promise<ResType<T>>

  upload<T>(url: string, params: unknown): Promise<ResType<T>>

  download(url: string): void
}

const request: Request = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      service
        .get(url, { params })
        .then(res => {
          NProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      service
        .post(url, JSON.stringify(params))
        .then(res => {
          NProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  put(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      service
        .put(url, JSON.stringify(params))
        .then(res => {
          NProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  delete(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      service
        .delete(url, { params })
        .then(res => {
          NProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      service
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then(res => {
          NProgress.done()
          resolve(res.data)
        })
        .catch(err => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  download(url) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = url
    iframe.onload = function () {
      document.body.removeChild(iframe)
    }
    document.body.appendChild(iframe)
  }
}

export default request
