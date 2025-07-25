import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? '/shoppin/' : '/',
  server: {
    host: true, // allows external access
    allowedHosts: ['.ngrok-free.app']
  },
})
