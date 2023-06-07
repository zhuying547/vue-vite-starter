# vite-vue-starter

`index.html` 中的 URL 将被自动替换，因此不再需要 `%PUBLIC_PATH%` 占位符了。

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
