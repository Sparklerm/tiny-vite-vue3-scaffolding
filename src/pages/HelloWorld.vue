<script lang="ts" setup>
import { useAppStore } from '@/stores/app'
import { DownloadOutlined } from '@ant-design/icons-vue'
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
  <div class="card">
    <a-button @click="changeLocale()">
      {{ appStore.locale === 'zh-CN' ? 'Switch to English' : '切换简体中文' }}
    </a-button>
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
    </a-space>
  </div>
</template>

<style scoped lang="less">
.button {
  background-color: @example-color;
}
</style>
