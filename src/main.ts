import 'default-passive-events'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import 'virtual:windi.css'
import { createApp } from 'vue'
import App from './App.vue'
import i18n from './locales/index'
import router from './router/router'
import './style.css'

const app = createApp(App)
// 启用router
app.use(router)
// 启用国际化
app.use(i18n)
// 启用Pinia
const pinia = createPinia()
// 启用Pinia 持久化
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// 挂载
app.mount('#app')
