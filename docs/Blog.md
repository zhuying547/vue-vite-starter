# How to Migrate from Vue CLI to Vite

可以删除 sass-loader，因为 Vite 为最常见的预处理器提供了开箱即用的内置支持。
`@vitejs/plugin-vue`以便在 vite 中支持单文件组件编译，同时删除`vue-template-compiler`。

实际上，这意味着我们可以将 Babel 从我们的依赖关系中完全删除，因为大多数移动和桌面的常青浏览器几乎完全支持所有 ES6 特性。如果你仍然需要支持旧的浏览器，如 Internet Explorer 11，Vite 确实为此提供了一个官方插件[@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy) 。

最后，当我们在.eslintrc 中时，我们需要添加环境 es2022，因为项目的 src 现在完全生活在 ES 模块中。你也可以保留 node 环境，因为一些配置文件仍然在 node 环境中运行。
这一变化也将迫使我们更新`eslint`本身，以及`eslint-plugin-vue`以支持 es2021 环境。

添加路径别名：

```js
export default defineConfig({
  //...
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

一般来说，推荐使用相对路径的方式（"./src"），因为它更明确地指示了相对于当前模块的路径。这样做也更有利于代码的可读性和维护性。

补全导入文件的后缀名，有助于类型推断。

## How to Structure a Large Scale Vue.js Application

如何构建一个大规模的 Vue.js 应用程序

| Path             | Route and Component Name | What it Does             |
| ---------------- | ------------------------ | ------------------------ |
| /users           | UsersIndex               | List all users           |
| /users/create    | UsersCreate              | Form to create the user  |
| /users/{id}      | UsersShow                | Display the users detail |
| /users/{id}/edit | UsersEdit                | Form to editthe user     |

```html
<router-link :to="{name: 'UsersIndex'}">Users</router-link>
```

使用 PascalCase 来命名你的路由以保持一致性。

### A More Comprehensive File Structure

更全面的文件结构

#### docs

这个目的是显而易见的，但更重要的是，它被包括在内，并且在你的团队每次打开代码库的时候，都会坐在那里盯着他们的脸。如果开发者不必离开他们的 IDE，那么项目的某些方面就会更有可能被记录下来。我还发现（这是一个惊喜），在编码一个可重用的类或组件之前先写文档，通常能帮助我更好地设计上述代码的界面或 API。来吧，我敢说你可以试一试!

另外，除了 docs 目录，我发现在每个标准化目录的根部提供一个 README.md，解释该目录的目的和任何应该包括在其中的规则，这很有帮助。这对那些非社区范围内的标准尤其有帮助。

#### helpers

这是许多框架中常见的目录，用于基本的输入-输出类型的函数，在整个项目中可重复使用。它们通常很容易进行单元测试，而且通常最终会被使用不止一次。我喜欢从一个 index.js 文件开始，然后随着助手的增加，把它们分成更多的文件，如 https.js、cache.js、time.js 等。这个目录中的所有东西都可以被导入并按需使用，如果一个功能最终根本没有被使用，它可以很容易地从生产捆绑包中被树起来。

#### layouts

我从 Nuxt 以及 Laravel 中提取了这个惯例。它不仅可以方便地定义页面组件，而且还可以在多个页面上重复使用的布局组件。这些组件不是定义页面的内容，就像它的名字一样，而是定义一般的布局。例如，它是一个单栏还是双栏页面？它有一个左侧边栏还是右侧边栏？布局是否包括典型的页眉和页脚，或者是一个完全空白的布局，也许页面内容绝对居中？通常情况下，这些布局组件只有 2 或 3 个，但尽管如此，它们可以成为方便的抽象概念。

#### mixins

这个目录是用来组织你所有的 Vue.js 混合组件。我认为在每个文件名的末尾加上 Mixin 这个词很重要（比如 ResourceTableMixin.js），以便于在文件切换器中搜索。虽然我还没有机会真正在一个更大规模的 Vue 3 项目上工作，但我认为这可能会很快变成一个 composables 目录，因为我更倾向于用 Composition API 而不是用 mixin 提取反应式数据/方法。或者至少在我的标准文件结构中，除了 mixins 目录之外，可能还会增加一个 composables 目录。用 hooks？

#### plugins

我喜欢为我所有的 Vue 项目包含的最后一个目录是插件目录。在一个由包和库组成的世界里，我们最终做的配置和注册工作有时比我们实际的编码工作还要多。这就是这个目录的作用，包括并设置所有第三方的 Vue 东西。虽然它被称为插件，但我并不总是在最严格的意义上使用这个词。换句话说，它不一定是通过 Vue .use()方法注册的第三方 lib。很多时候，它是，但其他时候，它使用其他的方法来设置 Vue 的 lib（比如.component()）。对于那些只需要一两行设置的 lib，我会把它写在 plugins/index.js 文件中。对于那些需要更多设置的 lib，我喜欢在 plugins 目录下为其创建一个专门的文件，然后将其导入 plugins/index.js 中。

#### globals.ts

这是我真正添加过的唯一的标准文件。它的目的是为 Vue 应用程序添加数量有限的全局变量，对于只在客户端的 SPA 来说，通常是窗口。

这就是通常装饰在这个文件顶部的注释。

```js
Vue.prototype.$http = () => {}
const app = createApp({})
app.config.globalProperties.$http = () => {}
```

## ESLint and Prettier with Vite and Vue.js 3

那么，什么是提示 linting ？提示是静态地分析代码的潜在错误的自动化过程。通常情况下，提示可以做一些事情，如检测语法错误，如缺少逗号，或警告你一个文件中定义了一个从未使用的变量。提示并不能使你的代码摆脱任何商业逻辑的缺陷，但它可以确保你的代码在语法上是准确的，并遵循一些最佳实践。那么，我们有什么解决方案可以用来给我们的 Vue.js 项目打分？用于 JavaScript 的提示工具是 ESLint。

ESLint 不仅能够检测到你代码中的错误，而且在很多情况下，甚至可以自动为你纠正错误。它可以作为一个命令行工具运行，也可以集成到大多数常见的 IDE 中。这些 IDE 的集成是非常有价值的，因为它们允许 ESLint 检测到的错误直接显示在你正在编辑的文件里。一般来说，这包括在错误代码下的一条斜线，很像拼写检查，但却是为你的代码而设的!集成开发环境通常也会使你可以通过键盘快捷键或在文件保存时运行命令来自动修复错误。

TODO:https://vueschool.io/articles/vuejs-tutorials/eslint-and-prettier-with-vite-and-vue-js-3/
