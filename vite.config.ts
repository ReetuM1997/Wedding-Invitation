import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Wedding-Invitation/', // 👈 your GitHub repo name here
  plugins: [react()],
})
