import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

// https://vite.dev/config/
export default defineConfig({
  // Served at the root of https://radicalreadings.github.io/ (GitHub Pages
  // user/org site, i.e. the repo is named radicalreadings.github.io).
  base: '/',
  plugins: [vue(), vuetify({ autoImport: true })],
  // One HTML entry per book, so each gets its own URL (and QR code):
  // fanon/index.html -> /fanon/, settlers/index.html -> /settlers/.
  // index.html (the root) just redirects to the current book.
  build: {
    rollupOptions: {
      input: {
        root: fileURLToPath(new URL('./index.html', import.meta.url)),
        wretched: fileURLToPath(new URL('./fanon/index.html', import.meta.url)),
        settlers: fileURLToPath(new URL('./settlers/index.html', import.meta.url)),
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
