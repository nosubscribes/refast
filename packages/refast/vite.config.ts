/// <reference types="vitest" />
/// <reference types="vite" />
import { getBaseLibraryConfig } from '@nosubscribes/vite-config/vite-base-library'
import { defineConfig } from 'vite'

import pkg from './package.json'

// https://cn.vitejs.dev/config/
export default defineConfig({
  ...getBaseLibraryConfig({
    dirname: __dirname,
    name: pkg.name
  })
})
