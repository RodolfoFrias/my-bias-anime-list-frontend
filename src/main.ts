import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Global Components
import AlertItem from '@/components/shared/AlertItem.vue'
import LoadingItem from '@/components/shared/LoadingItem.vue'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)

app
  .component('AlertItem', AlertItem)
  .component('LoadingItem', LoadingItem)

app.mount('#app')
