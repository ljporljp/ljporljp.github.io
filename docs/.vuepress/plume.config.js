import { defineThemeConfig } from 'vuepress-theme-plume'

export default defineThemeConfig({
    logo: '/images/tobea.png',

    profile: {
        name: '兔笔鹅',
        description: 'TO BE A TOP BLOG',
        avatar: '/images/tobea.png',
        circle: true,
    },

    autoFrontmatter: {
        permalink: true,
        createTime: true,
        author: true,
        title: true,
    },

    social: [
        'github'
    ],

    footer: {
        message: 'life is like a boat',
        copyright: 'Copyright@ljp',
    }
})
