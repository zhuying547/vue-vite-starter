在 TypeScript 3.8 版本中，我们添加了一个仅仅导入/导出声明语法来作为解决方式。

```ts
import type { SomeThing } from './some-module.js'
export type { SomeThing }
```

`import type` 仅导入被用于类型注解或声明的声明语句
`export type` 仅提供一个用于类型的导出
