// Register a Global Component from Within the Vue.js Plugin
import type { App } from 'vue'
import type { Props } from 'tippy.js'

// ⬇️ options can be manually typed
// or in this case just reused from tippy
type PluginOptions = Partial<Props>

import { defineAsyncComponent } from 'vue'

export const tooltipOptionsInject = Symbol()
// export const toolTipPlugin = (app: App, options) => {
//   options = {
//     placement: 'left',
//     ...options, // ⬅️ make sure user provided options are spread last 最后传播的
//   }
//   app.component(
//     'ToolTip',
//     defineAsyncComponent(() => import('./ToolTip.vue'))
//   )
//   app.provide(tooltipOptionsInject, options)
// }
// ⬇️ export the create function instead of the install function
export function createToolTipPlugin(options: PluginOptions) {
  return (app: App) => {
    // ... the meat of the plugin
    options = {
      placement: 'left',
      ...options, // ⬅️ make sure user provided options are spread last 最后传播的
    }
    app.component(
      'ToolTip',
      defineAsyncComponent(() => import('./ToolTip.vue'))
    )
    app.provide(tooltipOptionsInject, options)
  }
}
