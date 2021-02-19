import { createApp } from 'vue'
import App from '@/App.vue'
import { configure } from '@/.boot'

import './css'

const app = createApp(App)
configure(app)

app.mount('#app')
