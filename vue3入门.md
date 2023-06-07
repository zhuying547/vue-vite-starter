Vite 对 ts 文件只执行转译，类型检测的功能则交给编辑器插件，其目的是为了保持飞快的速度。

- Volar: 提供了 Vue 单文件的组件中的 TypeScript 支持。
- TypeScript Vue Plugin: 支持在 ts 中导入`.vue`文件。

Vite 默认提供对 ts 文件的转译支持，这就意味着只需要配置 vscode 的插件进行类型校验就可以了。
