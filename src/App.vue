<script setup lang="ts">
import enUS from 'ant-design-vue/es/locale/en_US'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

import { useAppStore } from '@/stores/app'
const appStore = useAppStore()
</script>

<template>
  <a-config-provider :locale="appStore.locale === 'zh-CN' ? zhCN : enUS">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<style lang="less"></style>
