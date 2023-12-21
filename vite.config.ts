import vue from '@vitejs/plugin-vue'
import path from 'path'
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [vue()],
    resolve: {
      // 别名配置
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    //启动服务配置
    server: {
      host: '0.0.0.0',
      port: Number(env.VITE_APP_PORT),
      hmr: true,
      open: false,
      proxy: {
        //反向代理解决跨域
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_API_URL,
          changeOrigin: true,
          // eg: https://www.xxx.com/dev-api/user => https://www.xxx.com/user
          rewrite: path =>
            path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), '')
        }
      }
    },
    // 生产环境打包配置
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  }
})
