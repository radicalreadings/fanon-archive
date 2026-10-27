import './styles/main.css'

import { createApp, type Component } from 'vue'

import App from './App.vue'
import vuetify from './plugins/vuetify'

// Each book is its own HTML entry (see vite.config.ts); its entry file in
// src/entries/ just calls this with the book's page component.
export function mountPage(page: Component) {
  const app = createApp(App, { page })

  app.use(vuetify)

  app.mount('#app')
}
