/// <reference types="vitest" />
/// <reference types="vite" />
import getConfig from '@nosubscribes/config-vite/lib'
import path from 'path'
import { defineConfig } from 'vite'

import pkg from './package.json'

const libConfig = getConfig({
  entry: path.resolve(__dirname, 'src/index.ts'),
  libName: pkg.name
})

// https://cn.vitejs.dev/config/
export default defineConfig({
  ...libConfig,
  root: __dirname // 根目录
})
