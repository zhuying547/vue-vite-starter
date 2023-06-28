## 加载页

### js 加载后

如果我们在项目中打开了代码分割的话，在每次路由切换的时候都会进入一个加载页面。

### 业务中的加载

在实际的项目中，我们需要等待用户信息或者鉴权系统的请求完成后才能展示页面。

## 页面开发

layouts 是内置的布局集合。

### 布局

#### 根据路由隐藏左侧菜单、隐藏导航头、footer

有时我们的页面可能存在一些沉浸式的设计，需要针对路由隐藏部分布局。

```js
const layout = {
  hideMenu: false,
  hideNav: false,
  hideFooter: false,
}
```

### 路由

- `name` 和 `icon` 分别代表生成菜单项的文本和图标。
- `hideChildrenInMenu` 用于隐藏不需要在菜单中展示的子路由。
- `hideInMenu` 可以在菜单中不展示这个路由，包括子路由。
- `authority` 用来配置这个路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示。
- `headerRender:false` 当前路由不展示顶栏
- `footerRender:false` 当前路由不展示页脚
- `menuRender: false` 当前路由不展示菜单

```js
const [menuData, setMenuData] = useState([])
```

## 错误处理

### 页面级报错

- 路由直接引导到报错页面，比如你输入的网址没有匹配到任何页面，可以由路由引导到预设的 404 页面。
- 代码控制跳转到报错页面，比如根据请求返回的数据，将没有权限的用户引导到 403 页面。

### 提示性报错

- 表单项校验报错。
- 操作反馈。
- 网络请求错误。

## 权限管理

### 根据路由隐藏左侧菜单、隐藏导航头、footer

```js
const meta = {
  hideMenu: false,
  hideNav: false,
  hideFooter: false,
}
```
