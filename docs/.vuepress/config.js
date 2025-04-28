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
      {text:'介绍',link:'/baseComponents/base/introduction'},
      {
        text: 'github',
        // 这里是下拉列表展现形式。
        items: [
          { text: 'my-github', 
          link: 'https://github.com/luoawai/elementUI-enhance' }
        ]
      }
    ],
    // 为以下路由添加侧边栏
    sidebar:{
      '/baseComponents/': [
        {
          title: '简介',
          collapsable: true,
          children: [
            { title: '介绍', path: 'base/introduction' },
            'base/button',
            'base/countUp',
            'base/Avatar',
            'base/Login',
            'base/Empty',
            // 'base/Skeleton',
            'base/Step',
            'base/Table',
            'base/Text',
            // 'base/upload',
          ]
        }
      ]
    }
  }
}
