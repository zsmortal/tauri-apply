import type { User } from 'pinia'

export const useUserStore = defineStore('user', {
  persist: {
    storage: sessionStorage // 开启后对 state 的数据读写都将持久化，指定缓存方式
  },
  state: (): User => ({}),
  getters: {},
  actions: {}
})
