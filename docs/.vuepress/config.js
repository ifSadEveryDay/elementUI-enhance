module.exports = {
  title: 'elementUI-enhance', // 设置网站标题
  base: '/elementUI-enhance/',
  description: 'elementUI-enhance', //描述
  dest: './dist',   // 设置输出目录
  port: 2999, //端口
  plugins: ['vuepress-plugin-code-copy','demo-container'],
  themeConfig: { //主题配置
    // 添加导航栏
    nav: [
      { text: '主页', link: '/' }, // 导航条
      { text: '组件文档', link: '/baseComponents/' },
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'my-github', 
          link: 'https://github.com/luoawai' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/baseComponents/': [
        {
          title: '布局类组件',
          collapsable: true,
          children: [
            'base/button',
            'base/countUp',
            'base/Avatar',
            'base/test4',
            'base/Empty',
            'base/Skeleton',
            'base/Step',
            'base/Table',
            'base/Text',
          ]
        },
        {
          title: '可视化组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '工具类组件',
          collapsable: true,
          children: [
          ]
        },
        {
          title: '方法类函数',
          collapsable: true,
          children: [
          ]
        }
      ]
    }
  }
}