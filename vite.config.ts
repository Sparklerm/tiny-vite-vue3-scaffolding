import vue from '@vitejs/plugin-vue'
import path from 'path'
import { ConfigEnv, defineConfig, loadEnv, UserConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      viteCompression({
        // 对超过1m的文件开启gzip压缩
        threshold: 10240
      })
    ],
    resolve: {
      // 别名配置
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    css: {
      preprocessorOptions: {
        // 引入全局less样式
        less: {
          modifyVars: {
            hack: `true; @import "./src/assets/less/base.less";`
          },
          javascriptEnabled: true
        }
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
          // 构建时移除控制台输出
          drop_console: true,
          // 构建时移除debug信息
          drop_debugger: true
        }
      }
    }
  }
})
