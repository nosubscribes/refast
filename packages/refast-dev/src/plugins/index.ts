import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import { PluginOption } from 'vite'
import checker from 'vite-plugin-checker'
import viteCompression from 'vite-plugin-compression'
import { viteVConsole } from 'vite-plugin-vconsole'

interface RefastPluginOptions {
  isProduction: boolean
  legacy: boolean
  compression: boolean
  visualizer: {
    enabled: boolean
    output: string
  }
  checker: boolean
  vconsole: {
    enabled: boolean
    entry: string
  }
}

const defaultOptions: RefastPluginOptions = {
  isProduction: true,
  legacy: false,
  compression: true,
  visualizer: {
    enabled: true,
    output: './build/analyze.html'
  },
  checker: true,
  vconsole: {
    enabled: false,
    entry: 'src/app.tsx'
  }
}

export const refast = (options?: Partial<RefastPluginOptions>): PluginOption[] => {
  const resolvedOptions = { ...defaultOptions, ...options }
  const isProduction = resolvedOptions.isProduction

  const plugins: PluginOption[] = []

  plugins.push(
    ...react({
      babel: {}
    })
  )

  if (resolvedOptions.vconsole && resolvedOptions.vconsole.enabled) {
    plugins.push(
      viteVConsole({
        entry: resolvedOptions.vconsole.entry,
        enabled: false,
        localEnabled: false,
        config: {
          log: {
            maxLogNumber: 1000,
            showTimestamps: true
          },
          theme: 'light',
          onReady() {
            console.log('vConfig init success')
          }
        }
      })
    )
  }

  if (isProduction && resolvedOptions.legacy) {
    plugins.push(
      ...legacy({
        // 旧浏览器支持
        targets: ['defaults', 'not IE <= 11', 'ios >= 9']
      })
    )
  }

  if (isProduction && resolvedOptions.compression) {
    plugins.push(
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 1025, // 大于此大小的文件会被压缩
        algorithm: 'gzip',
        ext: '.gz'
      })
    )
  }

  if (isProduction && resolvedOptions.visualizer && resolvedOptions.visualizer.enabled) {
    plugins.push(
      visualizer({
        // 打包分析
        filename: resolvedOptions.visualizer.output || defaultOptions.visualizer.output,
        title: 'analyze',
        template: 'treemap',
        open: false
      })
    )
  }

  if (!isProduction && resolvedOptions.checker) {
    plugins.push(checker({ typescript: true }))
  }

  return plugins
}
