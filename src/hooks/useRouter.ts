/**
 * 设置路由
 * @param routers 按文件名称生成路由
 * @returns 路由表
 */
export const useRouter = () => {
  const pages: ObjectType = import.meta.glob('../views/**/page.ts', {
    eager: true,
    import: 'default'
  })
  const vues: ObjectType = import.meta.glob(['../views/**/index.vue', '!../views/**/components/**/index.vue'])
  return Object.entries(pages).map(([key, value]) => {
    const path: string = getPath(key, 'views')
    return {
      path: path,
      name: getName(path),
      meta: value,
      component: vues[`../views${path}/index.vue`]
    }
  })
}

/**
 * 获取 path
 * @param key 路径
 * @param keyword 关键字
 * @returns path
 */
const getPath = (key: string, keyword: string) => {
  const path: string = key.replace(`../${keyword}/`, '').replace('/page.ts', '')
  return path === import.meta.env.VITE_ROUTE_ROOT_NAME ? '/' : `/${path}`
}

/**
 * 获取 name
 * @param path path
 * @returns name
 */
const getName = (path: string) => {
  const name: string = path.split('/').filter(Boolean).join('-')
  return path === '/' ? import.meta.env.VITE_ROUTE_ROOT_NAME : name
}
