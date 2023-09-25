import './assets/main.css'

import { createApp,} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css' // Import Tailwind CSS
import './assets/css/dark-mode.css' // Import Dark Mode styles

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
