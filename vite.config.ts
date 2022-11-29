import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    //设置别名
    alias: {
        '@': '/src',
    }
  },
  plugins: [vue()],
  server: {
    port: 8000,
    hmr: {
        host: 'localhost',
        port: 8000,
    }
  }
})
