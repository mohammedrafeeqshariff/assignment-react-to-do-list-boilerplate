import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/assignment-react-to-do-list-boilerplate/",
  plugins: [react()],
})
