import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "代码学习仓库",
    description: "关于springboot、vue3、微信小程序的学习笔记",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "/assets/logo.png",
        nav:[
            {text:"首页",link:"/"},
            {text:"指南",link:"/guide/"},
            {text:"springboot",link:"/springboot/"},
            {text:"Vue3 + TS",link:"/vue3/"},
            {text:"微信小程序",link:"/weixin/"},
            {text:"常见问题",link:"/faq/"},
        ],
        socialLinks:[
            {icon: "github",link:"https://github.com/DRIVESAF/vue3-ts-docs"}
        ],
        sidebar:{
            "/guide/": [
                {
                    text: "开始",
                    collapsed: true,
                    items:[
                        {text: "介绍",link: "/guide/"}
                    ]
                }
            ]
        }
    }

})
