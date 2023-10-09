
import { createApp } from 'vue'
import '@/assets/main.css'
// import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router'
import './plugins/axios';
import { createPinia } from 'pinia'



// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi, fa
    },
  },
})

const pinia = createPinia()

const app = createApp(App)

// app.use(createPinia());
app.use(pinia)
app.use(router)
app.use(vuetify)

app.mount('#app')
