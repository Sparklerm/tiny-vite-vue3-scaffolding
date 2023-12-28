import { createI18n } from 'vue-i18n'
import enUS from './lang/en-US'
import zhCN from './lang/zh-CN'

// 获取浏览器默认语言
const navLang = navigator.language
// 获取本地缓存语言
const localLocale = localStorage.getItem('locale')

const i18n = createI18n({
  legacy: false,
  // 指定语言，顺序为：本地缓存 > 浏览器默认 > 备选语言
  locale: localLocale || navLang || 'zh-CN',
  // 备选语言
  fallbackLocale: 'zh-CN',
  // 开启全局 $t
  globalInjection: true,
  messages: {
    'zh-CN': zhCN,
    'en-US': enUS,
  },
})

export default i18n
