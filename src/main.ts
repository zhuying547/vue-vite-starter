import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// ES 模块适用于现代浏览器和支持 ES 模块的 Node.js 版本，可以直接在这些环境中使用，无需额外的构建步骤。
// ESM 模块适用于一些特定的构建工具或打包器，通常用于构建应用程序。在使用 ESM 模块时，需要使用适当的构建工具将其转换为适合目标环境的代码。

// ES用的是编译后的CSS，ESM用的是LESS
import 'tdesign-vue-next/esm/style/index.js'
import '@/style/index.less'

// import { toolTipPlugin } from '@/plugins/ToolTipPlugin'
// ⬇️ import the create function
// import { createToolTipPlugin } from '@/plugins/ToolTipPlugin'

const app = createApp(App)
app.use(router)
// app.use(toolTipPlugin)
// app.use(
//   createToolTipPlugin({
//     // ⬅️ pass the opts to function instead of .use
//     arrow: true,
//     placement: 'top',
//   })
// )
app.mount('#app')
