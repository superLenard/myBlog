import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点基础路径，必须和仓库名一致！
  base: '/myblog/',
  title: "Lenard的博客",
  description: "个人知识聚合门户，学习笔记、项目实践、资源存档",
  lang: 'zh-CN',
  // 在这里添加配置，关闭标题旁边的 # 锚链接标记
  markdown: {
    anchor: {
      permalink: false
    }
  },
  // 页面头部元信息
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/myblog/favicon.svg' }],
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/myblog/favicon.ico' }]
  ],

  // 顶部导航栏
  themeConfig: {
    siteTitle: "Lenard · 个人博客",
    logo: undefined,
    // 右侧「本页大纲」标题
    outline: {
      label: '本章目录'
    },
    // 底部分页文案
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    // nav: [
    //   { text: '首页', link: '/' },
    //   { text: '知识库', link: '/knowledge/' },
    //   { text: '项目实践', link: '/projects/' },
    //   { text: '资源合集', link: '/resources/' },
    //   { text: '关于我', link: '/about' }
    // ],

    // 左侧侧边栏
    sidebar: [
      {
        text: '📚︎ 知识库',
        items: [
          { text: 'LearnAI 笔记', link: 'https://superlenard.github.io/learnAI/' },
          { text: 'AI 实时资讯', link: 'https://superlenard.github.io/AINews/' },
          // { text: '阅读笔记', link: '/knowledge/reading' }
        ]
      },
      // {
      //   text: '🛠️ 项目实践',
      //   items: [
      //     { text: '开源项目列表', link: '/projects/' },
      //     { text: 'Demo实验', link: '/projects/demo' }
      //   ]
      // },
      // {
      //   text: '📎 资源汇总',
      //   items: [
      //     { text: '工具合集', link: '/resources/tools' },
      //     { text: '书单论文', link: '/resources/books' }
      //   ]
      // },
      // {
      //   text: '👤 最新资讯',
      //   items: [
      //     { text: '关于我', link: '/about' },
      //     { text: '联系邮箱', link: '/about#contact' }
      //   ]
      // }
    ],

    // 页脚信息
    footer: {
      message: '持续沉淀知识，记录学习与实践',
      copyright: '© 2026 Lenard | Powered by VitePress'
    },

    // GitHub 右上角链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/superLenard' }
    ],

    // 关闭标题锚点 #
    markdown: {
      headers: {
        anchor: false
      }
    }
  }
})
