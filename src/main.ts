import 'default-passive-events'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import './style.css'

const app = createApp(App)
// 启用router
app.use(router)
// 挂载
app.mount('#app')
