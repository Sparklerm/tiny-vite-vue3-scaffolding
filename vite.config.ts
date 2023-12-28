import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Icons from 'unplugin-icons/vite'
import { AntDesignVueResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { ConfigEnv, UserConfig, defineConfig, loadEnv } from 'vite'
import viteCompression from 'vite-plugin-compression'
import WindiCSS from 'vite-plugin-windicss'
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd())
  return {
    plugins: [
      vue(),
      vueJsx(),
      viteCompression({
        // 对超过1m的文件开启gzip压缩
        threshold: 10240,
      }),
      legacy({
        targets: ['defaults', 'not IE 11'],
      }),
      svgLoader(),
      AutoImport({
        dts: './src/auto-imports.d.ts',
        imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        resolvers: [
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
      Components({
        dts: './src/components.d.ts',
        // imports 指定组件所在位置，默认为 src/components
        dirs: ['src/components/'],
        resolvers: [
          IconsResolver(),
          VueUseComponentsResolver(),
          // 按需引入antd组件 https://antdv.com/docs/vue/introduce-cn#%E8%87%AA%E5%8A%A8%E6%8C%89%E9%9C%80%E5%BC%95%E5%85%A5%E7%BB%84%E4%BB%B6
          AntDesignVueResolver({
            importStyle: false,
          }),
        ],
      }),
      Icons({
        compiler: 'vue3',
        autoInstall: true,
      }),
      WindiCSS(),
    ],
    resolve: {
      // 别名配置
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    css: {
      preprocessorOptions: {
        // 引入全局less样式
        less: {
          modifyVars: {
            hack: `true; @import "./src/assets/less/base.less";`,
          },
          javascriptEnabled: true,
        },
      },
    },
    //启动服务配置
    server: {
      host: '0.0.0.0',
      // 端口号
      port: Number(env.VITE_APP_PORT),
      // 开启热更新
      hmr: true,
      // 开启跨域允许
      cors: true,
      // 启动后是否打开浏览器
      open: false,
      // 如果端口被占用直接退出
      strictPort: true,
      proxy: {
        //反向代理解决跨域
        [env.VITE_APP_BASE_API]: {
          target: env.VITE_APP_API_URL,
          changeOrigin: true,
          // eg: https://www.xxx.com/dev-api/user => https://www.xxx.com/user
          rewrite: (path) => path.replace(new RegExp(`^${env.VITE_APP_BASE_API}`), ''),
        },
      },
    },
    // 生产环境打包配置
    build: {
      terserOptions: {
        compress: {
          // 构建时移除控制台输出
          drop_console: true,
          // 构建时移除debug信息
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.info'],
        },
      },
    },
  }
})
