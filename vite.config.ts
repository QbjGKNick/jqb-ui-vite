import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const rollupOptions = {
  external: ['vue'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 添加JSX插件
    vueJsx()
  ],
  // 添加库模式配置
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './src/entry.ts',
      name: 'SmartyUI',
      fileName: 'smarty-ui',
      // 导出模块格式
      formats: ['es', 'umd', 'iife']
    }
  }
})