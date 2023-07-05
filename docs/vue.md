# 开发过程遇到的问题

Vite 对 ts 文件只执行转译，类型检测的功能则交给编辑器插件，其目的是为了保持飞快的速度。

- Volar: 提供了 Vue 单文件的组件中的 TypeScript 支持。
- TypeScript Vue Plugin: 支持在 ts 中导入`.vue`文件。

Vite 默认提供对 ts 文件的转译支持，这就意味着只需要配置 vscode 的插件进行类型校验就可以了。
在 TypeScript 3.8 版本中，我们添加了一个仅仅导入/导出声明语法来作为解决方式。

```ts
import type { SomeThing } from './some-module.js'
export type { SomeThing }
```

`import type` 仅导入被用于类型注解或声明的声明语句
`export type` 仅提供一个用于类型的导出

## TypeScript 声明文件

虽然通过直接引用可以调用库的类和方法，但是却无法使用 TypeScript 诸如类型检查等特性功能。
只保留导出类型声明，创建一个描述 JavaScript 库和模块信息的声明文件，引用该文件可以借用 TypeScript 的各种特性来使用库了。
当使用原生 ES 模块作为配置文件时，有一些注意事项：

## 获取当前目录

对于 CommonJS 文件，人们经常使用 `__dirname` 访问当前目录并将相对路径解析为绝对路径。
这在原生 ES 模块中不被支持。

`import.meta.url` 在 Node 中指代的是当前配置文件的绝对路径 file 协议。
