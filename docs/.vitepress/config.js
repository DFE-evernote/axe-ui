module.exports = {
  title: 'axe-ui', // 设置网站标题
  description: 'vue3组件库',
  dest: './build', // 输出目录
  themeConfig: {
    nav: [
      { test: '主页', link: '/' },
      { test: '联系我', link: '/' },
      { test: '源码', link: '/' }
    ],
    sidebar: [
      {
        text: 'Icon图标', // 必要的
        link: '/icon/', // 可选的，标题的跳转链接，应为绝对路径且路径正确
        collapsable: false, // 可选的，默认为true
        sidebarDepth: 1 // 可选的，默认1
      },
      {
        text: 'Button按钮',
        link: '/button/',
        collapsable: false,
        sidebarDepth: 1
      },
      {
        text: 'Input 输入框',
        link: '/input/',
        collapsable: false,
        sidebarDepth: 1
      },
      {
        text: 'Card卡片',
        link: '/card/',
        collapsable: false,
        sidebarDepth: 1
      }
    ]
  }
}
