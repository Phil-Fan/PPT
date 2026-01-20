import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'PPT 模板中心',
  description: 'Phil Fan 的 PPT 模板、规则、技能库',
  base: '/PPT/',

  // 忽略二进制文件链接检查
  ignoreDeadLinks: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '最佳实践', link: '/bp/' },
      { text: '工具配置', link: '/extra/' },
      { text: '模板', link: '/templates/' },
      { text: '示例', link: '/examples/' },
    ],

    sidebar: {
      '/bp/': [
        {
          text: '最佳实践',
          items: [
            { text: '概述', link: '/bp/' },
            { text: '演讲哲学', link: '/bp/philosophy.md' },
            { text: 'PPT 规则', link: '/bp/rules.md' },
            { text: '技能技巧', link: '/bp/skills.md' },
            { text: '绘图技巧', link: '/bp/pics.md' },
            { text: '参考资源', link: '/bp/refs.md' },
          ]
        }
      ],
      '/extra/': [
        {
          text: '工具配置',
          items: [
            { text: '概述', link: '/extra/' },
            { text: '自定义工具栏', link: '/extra/diy_toolbar.md' },
          ]
        }
      ],
      '/templates/': [
        {
          text: '模板',
          items: [
            { text: '概述', link: '/templates/' },
            { text: 'Beamer 风格', link: '/templates/beamer_type.md' },
          ]
        }
      ],
      '/examples/': [
        {
          text: '示例作品',
          items: [
            { text: '概述', link: '/examples/' },
          ]
        }
      ],
      '/': [
        {
          text: '导航',
          items: [
            { text: '最佳实践', link: '/bp/' },
            { text: '工具配置', link: '/extra/' },
            { text: '模板', link: '/templates/' },
            { text: '示例', link: '/examples/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Phil-Fan/PPT' }
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: '<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA-4.0</a> &copy; 2023-2025 Phil Fan'
    },

    // 深色模式（原 Jekyll 使用 dark 皮肤）
    appearance: 'dark',

    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    search: {
      provider: 'local'
    }
  }
})
