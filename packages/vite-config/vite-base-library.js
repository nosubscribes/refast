/// <reference types="vitest" />
/// <reference types="vite" />
import path from 'path'
import dts from 'vite-plugin-dts'

// https://cn.vitejs.dev/config/
/**
 * getBaseLibraryConfig
 * @param {Object} param0
 * @param {string} param0.name
 * @param {string} param0.dirname
 * @returns {import('vite').UserConfig}
 */
export const getBaseLibraryConfig = ({ dirname, name }) => ({
  // 共享配置: https://cn.vitejs.dev/config/shared-options.html
  appType: 'custom', // 指定app类型: spa单页应用、mpa多页应用、custom自定义
  resolve: {
    // 路径别名
    alias: {
      '@': path.join(dirname, 'src')
    }
  },
  base: '/',
  cacheDir: 'node_modules/.vite', // 缓存目录位置
  clearScreen: true, // 设为 false 可以避免 Vite 清屏而错过在终端中打印某些关键信息
  json: {
    stringify: true // 导入的 JSON 会被转换为 export default JSON.parse("..."), 这样会比转译成对象字面量性能更好
  },
  logLevel: 'info', // 日志等级
  plugins: [dts({ include: ['src'] })],
  publicDir: 'public', // public目录位置
  root: dirname, // 根目录
  build: {
    // 构建配置: https://cn.vitejs.dev/config/build-options.html
    assetsDir: 'static', // 资源目录
    assetsInlineLimit: 4096, // 小于4kb的资源将会被内联为base64
    copyPublicDir: true, // 拷贝public目录到out文件夹
    chunkSizeWarningLimit: 9000, // 触发警告的chunk大小, kb
    minify: false, // 最小化混淆
    outDir: 'build', // 输出目录
    reportCompressedSize: false, // gzip压缩大小报告, 禁用可以提高构建速度
    sourcemap: false, // sourcemap
    target: 'es2015', // 打包目标平台
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      formats: ['es', 'umd', 'cjs'],
      name,
      fileName: 'index'
    }
  },
  test: {
    // 测试: https://cn.vitest.dev/config/
    include: ['test/**/*.test.?(c|m)[jt]s?(x)'],
    exclude: ['**/node_modules/**', '**/build/**'],
    environment: 'node',
    globals: true
  }
})
