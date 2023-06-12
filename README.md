# vite-vue-starter

`index.html` 中的 URL 将被自动替换。

在 `package.json` 中开启 `"type": "module"`。目的是告诉 Node.js 以 ECMAScript 模块（ESM）的方式解析和执行 JavaScript 文件，而不是使用 CommonJS 模块规范。当 `"type": "module"` 被设置时，Node.js 将默认以 ESM 的方式处理 JavaScript 文件，支持使用 `import` 和 `export` 语法进行模块导入和导出，而不需要使用 `require()` 和 `module.exports`。

> 这里需要注意如果有工具的配置文件内容是以 `module.exports` 导出时，记得将改为 JSON 文件避免报错

## NPM 依赖解析和预构建

Vite 会检测到源码中的模块导入，并进行以下操作：

1. Vite 的开发服务器将所有代码视为原生 ES 模块，因此 Vite 必须并将以 CommonJS 或 UMD 形式提供的依赖项转换为 ES 模块(esbuild)。
2. 重写导入为合法的 URL。例如 `/node_modules/.vite/deps/vue.js?v=f3sf2ebd` 使得浏览器可以正确导入。

### 依赖的预构建

当首次启动 `vite` 时，Vite 在加载你的项目之前预构建了项目依赖。Vite 将预构建的依赖项缓存到 `node_modules/.vite` 中。

## 浏览器兼容性

- Chrome >=87
- Firefox >=78
- Safari >=14
- Edge >=88

默认情况下 Vite 只处理语法转译，默认不包含任何 polyfill。如果有需要在传统浏览器中使用那么需要使用 `@vitejs/plugin-legacy`。

## Git Hook

### husky

利用 husky 创建触发 git 指定钩子时执行的脚本

### lint-staged

在触发 `pre-commit` 钩子时执行 `npx lint-staged` 用于校验风格和代码质量。

`lint-staged` 同时运行配置的任务。这意味着对于每个 glob，所有的命令都会同时启动。如果你想为同一组文件运行多个命令，你可以使用数组语法来确保命令按顺序运行。

`npx prettier` 如果没有提供文件则从标准输入中获取内容，`--write` 覆写文件的内容。总结就是 `prettier --write` 用于覆写从标准输入读取的内容。

```json
{
  "lint-staged": {
    "*.{js,jsx,vue,ts,tsx}": [
      "prettier --write",
      "eslint --ext .vue,.js,.jsx --fix"
    ]
  }
}
```

### commitlint

```shell
npx husky add .husky/commit-msg  'npx --no-install commitlint --edit ${1}'
```

在触发 `commit-msg` 钩子时即 `git commit` 提交代码时校验提交信息是否符合规范。

- `--edit` 读取指定文件中的最后一条提交信息。

- `${1}` 指定了提交信息文件的路径，通过编辑提交信息文件，确保提交的信息符合要求。

### Getting started

```shell
pnpm add -D husky lint-staged @commitlint/cli @commitlint/config-conventional
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit 'npx --no-install lint-staged'
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit ${1}'
```

## typescript-eslint

ESLint的默认JavaScript解析器无法直接解析TypeScript特定的语法，并且其规则无法直接访问TypeScript的类型信息。

为了解决这个问题，我们使用一个名为"typescript-eslint"的工具。"typescript-eslint"插件提供了以下功能：

1. 解析TypeScript语法：它允许ESLint解析TypeScript代码，并将TypeScript的语法转换为ESLint可以理解的格式。这样，ESLint就可以分析和处理TypeScript文件，而不仅限于JavaScript文件。
2. TypeScript类型信息的支持："typescript-eslint"创建了一组工具，使ESLint规则能够使用TypeScript的类型信息。这意味着ESLint规则可以访问变量的类型、函数的参数类型、返回类型等TypeScript的类型信息，并根据这些信息进行代码检查和提示。
3. 特定于TypeScript的规则："typescript-eslint"提供了一系列特定于TypeScript的规则。这些规则利用了TypeScript的类型信息，并通过检查类型不一致、类型错误、未使用的变量等来提供更准确的代码质量和一致性检查。

通过将"typescript-eslint"与ESLint配合使用，我们可以在TypeScript项目中实现更强大和准确的代码检查。它允许我们检测类型错误、未使用的变量、不一致的类型注解等与TypeScript相关的问题，并通过使用TypeScript的类型信息提供更准确的提示和警告。

```shell
pnpm add --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
```

WARNING: You are currently running a version of TypeScript which is not officially supported by @typescript-eslint/typescript-estree.

You may find that it works just fine, or you may not.

SUPPORTED TYPESCRIPT VERSIONS: >=3.3.1 <5.1.0 这个包要求安装`typescript@~5.0.0`

## eslint-plugin-vue

"eslint-plugin-vue"是一个ESLint插件，专门为Vue.js项目提供代码检查和规范性指导。它包含一系列的规则，用于检查和强制执行Vue.js代码的最佳实践和约定。

```shell
pnpm add --save-dev eslint eslint-plugin-vue
```

这个插件需要配置parser为vue-eslint-parser去解析`.vue`文件。
