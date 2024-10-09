import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "代码学习仓库",
    description: "关于springboot、vue3、微信小程序的学习笔记",
    themeConfig: {
        siteTitle: "前端学习",
        logo: "https://first-buckt.oss-cn-nanjing.aliyuncs.com/img/%E6%9A%82%E6%97%A0%E8%AE%B0%E5%BD%95.png",
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
            "/springboot/": [
                {
                    text: "开始",
                    collapsed: true,
                    items:[
                        {text: "介绍",link: "/springboot/"},
                        {text: "SpringBoot与IDEA",link: "/springboot/text1.md"},
                        {text: "跟踪调试与日志管理",link: "/springboot/text2.md"}
                    ]
                }
            ],
            "/vue3/": [
                {
                    text: "开始",
                    collapsed: true,
                    items:[
                        {text: "介绍",link: "/vue3/"},
                        {text: "前端发展的几个时代",link: "/vue3/text1.md"},
                        {text: "前端的三驾马车",link: "/vue3/text3.md"},
                        {text: "新时代的 JavaScript",link: "/vue3/text2.md"}
                    ]
                }
            ]
        }
    }

})
