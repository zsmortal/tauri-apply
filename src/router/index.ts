import { RouteRecordRaw, createRouter, createWebHistory, RouterOptions } from 'vue-router'
import { useRouter } from '@/hooks/useRouter'
import { store } from '@/store'

const routes: Array<RouteRecordRaw> = [...useRouter()]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: (to, from) => {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  }
} as RouterOptions)

router.beforeEach((_to, _from, next) => {
  if (_to.name !== 'login' && !store.user.token) next({ name: 'login' })
  else next()
})
