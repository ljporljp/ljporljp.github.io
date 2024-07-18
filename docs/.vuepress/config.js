import path from 'node:path'
import { blogPlugin } from '@vuepress/plugin-blog'
import { plumeTheme } from 'vuepress-theme-plume'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '兔笔鹅',
  description: 'TO BE A TOP BLOG',

  theme: plumeTheme({
    configFile: path.join(__dirname, 'plume.config.js'), 
  }),

  bundler: viteBundler(),
})
