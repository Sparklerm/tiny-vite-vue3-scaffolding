// src/types/env.d.ts
interface ImportMetaEnv {
  /**
   * 应用标题
   */
  VITE_APP_TITLE: string
  /**
   * 应用端口
   */
  VITE_APP_PORT: number
  /**
   * API基础路径(反向代理)
   */
  VITE_APP_BASE_API: string
  /**
   * 后端服务地址
   */
  VITE_APP_API_URL: string
  /**
   * 请求超时时间
   */
  TIMEOUT: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
