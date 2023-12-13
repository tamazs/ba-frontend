import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import prismic from "./prismic";
import { createHead } from '@unhead/vue'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(prismic)
app.use(head)

app.mount('#app')
