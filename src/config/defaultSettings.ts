// 为类型注解设置别名，然后可以复用 type SomeName = someValidTypeAnnotation
type LayoutSettings = {
  logo?: string
  title: string
}

// 控制标题和 Logo
const Settings: LayoutSettings = {
  logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  title: 'Ant Design Pro',
}
export default Settings
