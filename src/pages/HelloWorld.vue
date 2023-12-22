<script lang="ts" setup>
import { useAppStore } from '@/store/app'
import { DownloadOutlined } from '@ant-design/icons-vue'
import { Button } from 'ant-design-vue'
import type { SizeType } from 'ant-design-vue/es/config-provider'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const size = ref<SizeType>('large')
const appStore = useAppStore()
const { locale } = useI18n()

/**
 * 切换语言
 */
const changeLocale = () => {
  const changeTo = locale.value === 'zh-CN' ? 'en-US' : 'zh-CN'
  localStorage.setItem('locale', changeTo)
  locale.value = changeTo
  appStore.changeLocale(changeTo)
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <h1>vite + vue</h1>

  <div class="card">
    <button @click="changeLocale()">
      {{ appStore.locale === 'zh-CN' ? 'Switch to English' : '切换简体中文' }}
    </button>
    <p>{{ $t('page.title') }}</p>
  </div>

  <div class="card">
    <a-divider>Antd 组件</a-divider>
    <a-space direction="vertical">
      <a-radio-group v-model:value="size">
        <a-radio-button value="large">Large</a-radio-button>
        <a-radio-button value="default">Default</a-radio-button>
        <a-radio-button value="small">Small</a-radio-button>
      </a-radio-group>
      <a-space>
        <a-button type="primary" :size="size">Primary</a-button>
        <a-button :size="size">Normal</a-button>
        <a-button type="dashed" :size="size">Dashed</a-button>
        <a-button danger :size="size">Danger</a-button>
        <a-button type="link" :size="size">Link</a-button>
      </a-space>
      <a-space>
        <a-button type="primary" :size="size">
          <template #icon>
            <DownloadOutlined />
          </template>
        </a-button>
        <a-button type="primary" shape="circle" :size="size">
          <template #icon>
            <DownloadOutlined />
          </template>
        </a-button>
        <a-button type="primary" shape="round" :size="size">
          <template #icon>
            <DownloadOutlined />
          </template>
          Download
        </a-button>
        <a-button type="primary" shape="round" :size="size">
          <template #icon>
            <DownloadOutlined />
          </template>
        </a-button>
        <a-button type="primary" :size="size">
          <template #icon>
            <DownloadOutlined />
          </template>
          Download
        </a-button>
      </a-space>
      <div
        :style="{
          width: '320px',
          border: `1px solid grey`,
          'border-radius': '8px'
        }"
      >
        <a-calendar :fullscreen="false" />
      </div>
    </a-space>
  </div>
</template>

<style scoped lang="less">
.read-the-docs {
  color: #888;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.button {
  background-color: @example-color;
}
</style>
