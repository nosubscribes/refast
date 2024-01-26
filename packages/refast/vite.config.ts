/// <reference types="vitest" />
/// <reference types="vite" />
import getConfig from '@nosubscribes/config-vite/lib'
import path from 'path'
import { defineConfig } from 'vite'

import pkg from './package.json'

// https://cn.vitejs.dev/config/
export default defineConfig({
  ...getConfig({
    entry: path.resolve(__dirname, 'src/index.ts'),
    libName: pkg.name
  }),
  resolve: {
    // 路径别名
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  root: __dirname // 根目录
})
