import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import prismic from "./prismic";

const app = createApp(App)

app.use(router)
app.use(prismic)

app.mount('#app')
