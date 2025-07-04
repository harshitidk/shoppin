import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? '/shoppin/' : '/',
  server: {
    host: true, // allows external access
    allowedHosts: [
      '595e-2401-4900-1f30-251b-2928-8024-c4ab-9b03.ngrok-free.app' // 👈 paste your ngrok domain here
    ]
  },
})
