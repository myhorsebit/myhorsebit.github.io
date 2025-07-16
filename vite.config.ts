import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/blog-official/', // 👈 这里加上你的仓库名
  plugins: [react()],
})
