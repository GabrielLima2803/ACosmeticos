// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const app = createApp(App)

// import Vue from "vue"
// import VueSimpleAlert from "vue-simple-alert";

// Vue.use(VueSimpleAlert);


app.use(router)

app.mount('#app')
