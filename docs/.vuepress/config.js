import { defaultTheme } from '@vuepress/theme-default'


export default {
    theme: defaultTheme({
      // 在这里进行配置
    }),
    markdown: {
        // the markdown-it-anchor
            anchor: { permalink: false },
        // the markdown-it-toc extension
            toc: { includeLevel: [1, 2] },
        config: md => {
            d.use(require('markdown-it')({
                breaks:true
              }))
            // this is where you add more markdown-it extensions
            md.use(require('markdown-it-name-of-extension'))
            }
        }
  }