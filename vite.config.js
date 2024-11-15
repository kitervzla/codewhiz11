import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: []
    }
  },
  optimizeDeps: {
    include: ['react-intersection-observer']
  },
  server: {
    port: 3000
  },
  base: '/'
})
