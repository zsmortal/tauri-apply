<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { store } from '@/store'
import { appWindow } from '@tauri-apps/api/window'
import { platform, version } from '@tauri-apps/api/os'
import { getTauriVersion, getVersion, getName } from '@tauri-apps/api/app'

onMounted(async () => {
  await appWindow.show() // 页面渲染完成显示窗口
  store.system.theme = await appWindow.theme() // 获取系统当前主题模式
  store.system.platform = await platform() // 获取系统平台
  store.system.version = await version() // 获取系统版本
  store.system.tauriVersion = await getTauriVersion() // 获取 tauri 版本
  store.system.appVersion = await getVersion() // 获取应用版本
  store.system.appName = await getName() // 获取应用名称
})
</script>

<style lang="scss">
@use '@/styles/app.scss';
@use '@/styles/theme.scss';
</style>
