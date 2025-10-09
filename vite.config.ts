import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  base: '/nook.github.io/',
  plugins: [
    tailwindcss(),
  ],
})