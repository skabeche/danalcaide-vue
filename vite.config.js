import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@pages": path.resolve(__dirname, "./src/pages/"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@composables": path.resolve(__dirname, "./src/composables/"),
      "@public": path.resolve(__dirname, "./public/"),
    },
  },
})
