// docs/.vuepress/config.js
module.exports = {
  base:'',
  title: "黄立贤的Blog",
  description: "黄立贤的思考和笔记",
  markdown: {
    lineNumbers: true,
    breaks: true,
  },
themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '黄立贤介绍', link: '/MyIntroduce/huanglixian' },
      { text: '我的公司', link: 'http://kdsult.com' },
    ]
// sidebar: [
//       {
//         title: '人生指导手册',
//         children: ['/人生指导手册/0.手册说明' ],
//         initialOpenGroupIndex: 1 // 可选的, 默认值是 0
//       }
//     ]

},
plugins: [
    ["vuepress-plugin-auto-sidebar", {
      // options
    }]
  ]
};