import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    locale: 'zh-CN'
  }),
  actions: {
    changeLocale(locale: string) {
      this.locale = locale
      dayjs.locale(locale.toLowerCase())
    }
  },
  persist: true
})
