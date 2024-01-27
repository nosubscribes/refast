/// <reference types="vitest" />
/// <reference types="vite" />
import type { UserConfig } from 'vite'

import base from './base'

// https://cn.vitejs.dev/config/
const getConfig = ({ libName, entry }: { libName: string; entry: string }): UserConfig => ({
  ...base,
  // 共享配置: https://cn.vitejs.dev/config/shared-options.html
  appType: 'custom', // 指定app类型: spa单页应用、mpa多页应用、custom自定义
  build: {
    ...base.build,
    lib: {
      entry,
      formats: ['es', 'umd', 'cjs'],
      name: libName,
      fileName: 'index'
    }
  },
  test: {
    ...base.test,
    environment: 'node'
  }
})

export default getConfig
