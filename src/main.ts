import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'tdesign-vue-next/es/style/index.css'
import 'tdesign-vue-next/dist/reset.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
