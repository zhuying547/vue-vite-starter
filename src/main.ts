import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'tdesign-vue-next/es/style/index.css'
import '@/style/index.less'

// import { toolTipPlugin } from '@/plugins/ToolTipPlugin'
// ⬇️ import the create function
import { createToolTipPlugin } from '@/plugins/ToolTipPlugin'

const app = createApp(App)
app.use(router)
// app.use(toolTipPlugin)
app.use(
  createToolTipPlugin({
    // ⬅️ pass the opts to function instead of .use
    arrow: true,
    placement: 'top',
  })
)
app.mount('#app')
