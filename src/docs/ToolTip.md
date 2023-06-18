## Define the Vue Plugin

To start, we’ll need to define the plugin. This can either be an object with an install method or simply a function that runs to install the plugin with the Vue app.

```js
import type { App } from 'vue'
export const toolTipPlugin = (app: App) => {}
```

## Register the Vue Plugin

```js
createApp(App).use(toolTipPlugin).mount('#app')
```

Let’s say that we want the plugin to support a `<ToolTip/>` component that can be nested inside any element. Then whenever that parent element is hovered over, the tooltip will show like this:

```html
<span>
  Hover Over Me
  <ToolTip text="Hello world!" />
</span>
```
