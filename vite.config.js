import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// vant按需引入
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  sourceMap: true,
  plugins: [
    vue(),
    vueJsx(),
    Components({
      dirs: ['src/base-ui/d-form', 'src/components'], // 指定需要自动引入的组件的目录
      resolvers: [VantResolver({})]
    })
  ],
  base: './',
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
