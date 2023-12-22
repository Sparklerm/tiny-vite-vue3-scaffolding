# Vue 3 + TypeScript + Vite 的轻量脚手架

> 没有组件的二次封装，没有晦涩难懂的配置方式，只是一个干干净净的开发脚手架

## 项目依赖

- [Vite](https://vitejs.cn/vite3-cn/)
- [Vue3](https://cn.vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vue Router](https://router.vuejs.org/zh/) 【Vue官方路由】
- [Axios](https://www.axios-http.cn/) 【请求库】
- [Pinia](https://pinia.vuejs.org/zh/) 【全局状态管理工具】
- [vue-i18n](https://kazupon.github.io/vue-i18n/zh/) 【国际化插件】
- [VueUse](https://vueuse.org/) 【Vue工具库】
- [Ant Design Vue](https://antdv.com/components/overview) 【Vue3 UI组件库】

## 推荐VSCode插件

- [Vue Language Features (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 【Vue生态插件】
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) 【Vue-TS生态插件】
- [Ant Design Vue helper](https://marketplace.visualstudio.com/items?itemName=ant-design-vue.vscode-ant-design-vue-helper) 【Antdv官方插件】
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) 【国际化插件】

## 项目结构

```text
├── public                    # 静态资源文件夹
├── src
│   ├── api                  # 后台接口服务
│   ├── assets               # 本地静态资源
│   ├── components           # 业务通用组件
│   ├── locales              # 国际化资源
│   ├── layouts              # 通用布局
│   ├── pages                # 业务页面入口和常用模板
│   ├── router               # 路由配置
│   ├── stores               # Pinia全局状态管理配置
│   ├── types                # 全局类型声明
│   ├── utils                # 工具库
│   ├── App.vue              # 入口文件
│   ├── main.ts              # 项目入口
├── README.md
└── package.json
└── tsconfig.json
└── vite.config.json

```
