import type { System } from 'pinia'

export const useSystemStore = defineStore('system', {
  persist: {
    storage: sessionStorage // 开启后对 state 的数据读写都将持久化，指定缓存方式
  },
  state: (): System => ({
    theme: '', // 系统当前主题模式
    platform: '', // 系统平台
    version: '', // 系统版本
    tauriVersion: '', // tauri 版本
    appVersion: '', // 应用版本
    appName: '' // 应用名称
  }),
  getters: {},
  actions: {}
})
