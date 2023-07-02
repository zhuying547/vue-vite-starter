## Project Setup

```sh
pnpm install
```

### Development

```sh
pnpm dev
```

### Build

```sh
npm build
```

## vite-vue-starter

当首次启动 `vite` 时，Vite 在加载你的项目之前预构建了项目依赖。Vite 将预构建的依赖项缓存到 `node_modules/.vite` 中并且重写导入为合法的 URL。例如 `/node_modules/.vite/deps/vue.js?v=f3sf2ebd` 使得浏览器可以正确导入。

### eslint-plugin-vue

专门为 Vue.js 项目提供代码检查和规范性指导。它包含一系列的规则，用于检查和强制执行 Vue.js 代码的最佳实践和约定。

### typescript-eslint

ESLint 的默认 JavaScript 解析器无法直接解析 TypeScript 特定的语法，并且其规则无法直接访问 TypeScript 的类型信息。

使用 `typescript-eslint` 插件提供了以下功能：

1. 解析 TypeScript 语法：它允许 ESLint 解析 TypeScript 代码，并将 TypeScript 的语法转换为 ESLint 可以理解的格式。这样，ESLint 就可以分析和处理 TypeScript 文件，而不仅限于 JavaScript 文件。
2. TypeScript 类型信息的支持：意味着 ESLint 规则可以访问变量的类型、函数的参数类型、返回类型等 TypeScript 的类型信息，并根据这些信息进行代码检查和提示。
3. 特定于 TypeScript 的规则：这些规则利用了 TypeScript 的类型信息，并通过检查类型不一致、类型错误、未使用的变量等来提供更准确的代码质量和一致性检查。

### vue-tsc

对于单文件组件，你可以使用工具 `vue-tsc` 在命令行检查类型和生成类型声明文件。
