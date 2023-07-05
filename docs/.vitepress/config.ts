import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: 'ViteVueStarter',
  description: '使用TDesignVue构建的前端应用',
  // Theme related configurations.
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
      // { text: 'ant-design-pro', link: '/ant-design-pro' },
      // { text: '设计规范', link: '/tdesign' },
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '设计规范', link: '/tdesign' },
          { text: 'ant-design-pro', link: '/ant-design-pro' },
        ],
      },
      {
        text: '博客',
        items: [
          { text: 'blog', link: 'blog' },
          { text: 'vue', link: 'vue' },
        ],
      },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/zhuying547/vue-vite-starter',
      },
    ],
  },
})
