# Vite 实战

`index.html` 中的 URL 将被自动替换，因此不再需要 `%PUBLIC_PATH%` 占位符了。

## NPM 依赖解析和预构建

Vite 会检测到源码中的模块导入，并进行以下操作：

1. Vite 的开发服务器将所有代码视为原生 ES 模块，因此 Vite 必须并将以 CommonJS 或 UMD 形式提供的依赖项转换为 ES 模块。
2. 为了提高后续页面的加载速度，Vite 将那些具有许多内部模块的依赖项转换为单个模块。
3. 重写 URL。例如 `/node_modules/.vite/deps/vue.js?v=2asd` 使得浏览器可以正确导入。

> `lodash-es` 有超过 600 个内置模块。当 `import {} from 'lodash-es'` 时浏览器会发出 600 次请求。为了避免这种多次请求，Vite 在预构建时会把这个依赖打包成单独的模块，这样就只会发起一次请求。

### 依赖的预构建

当首次启动 `vite` 时，Vite 在加载你的项目之前预构建了项目依赖。
Vite 将预构建的依赖项缓存到 `node_modules/.vite` 中。

## 浏览器兼容性

- Chrome >=87
- Firefox >=78
- Safari >=14
- Edge >=88

默认情况下 Vite 只处理语法转译，默认不包含任何 polyfill。如果有需要在传统浏览器中使用那么需要使用 `@vitejs/plugin-legacy`。

## lint-staged 和 husky

### 利用 Pre-commit Hook

在 pre-commit 时出发 `npx lint-staged`。
在 package.json 中的 lint-staged 配置需要执行的脚本。
默认情况下，lint-staged 会同时运行配置的任务。这意味着对于每个 glob，所有的命令都会同时启动。
如果你想为同一组文件运行多个命令，你可以使用数组语法来确保命令按顺序运行。

`npx prettier` 如果没有提供文件则从标准输入中获取内容。`--write` 覆写文件的内容。
总结就是`prettier --write`用于覆写从标准输入读取的内容。

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

## Git 提交规范

Messages must be matched by the following regex:

```regexp
/^(revert: )?(feat|fix|polish|docs|style|refactor|perf|test|workflow|ci|chore|types)(\(.+\))?: .{1,50}/
```

If the prefix is feat, fix or perf, it will appear in the changelog.

```shell
npx husky add .husky/commit-msg  'npx --no -- commitlint --edit ${1}'
```

commit-msg: 在提交代码时校验提交信息是否符合规范。
使用 commitlint 校验提交信息是否符合预定义的规范。同时，${1} 指定了提交信息文件的路径，通过编辑提交信息文件，确保提交的信息符合要求。

### 解释一下

`npx --no-install` 和 `npx --no` 之间的区别：
