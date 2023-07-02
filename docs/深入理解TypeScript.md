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
