import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '')

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    server: {
      port: parseInt(env.PORT) || 3000,
      allowedHosts: true,
      proxy: {
        '/api': {
          target: env.VITE_PRODUCTION === "true" ? env.VITE_API_URL : `http://localhost:${env.BACKEND_PORT || 5000}`,
          changeOrigin: true,
        }
      }
    }
  }
})


