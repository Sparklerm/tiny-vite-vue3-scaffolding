import { defineStore } from 'pinia'

/**
 * Pinia 使用示例
 */
export const useExampleStore = defineStore('example', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  },
  // 默认持久化在local storage
  persist: true
})
