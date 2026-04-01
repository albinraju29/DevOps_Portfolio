import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/three')) return 'three'
          if (id.includes('node_modules/framer-motion')) return 'framer'
          if (id.includes('node_modules/gsap')) return 'gsap'
          if (id.includes('node_modules/lenis')) return 'lenis'
          if (id.includes('node_modules/react-dom') || 
              id.includes('node_modules/react/')) return 'react-vendor'
        }
      }
    }
  }
})