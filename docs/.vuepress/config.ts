import {defineUserConfig} from 'vuepress'
// import {clipboardPlugin} from 'vuepress-plugin-clipboard'
import checkbox from 'vuepress-plugin-markdown-checkbox'
import {createNavbar} from "./navbar";
import {defaultTheme} from "@vuepress/theme-default";
import viteBundler from "@vuepress/bundler-vite";
import vue from "@vitejs/plugin-vue";
import {resolve} from "path";

export default defineUserConfig({
    // plugins: [clipboardPlugin({}), checkbox({enabled: false})],
    lang: 'en-CA',
    title: 'vuebulma Docs',
    description: 'Documentation for @csc530 vuebulma component library',
    base: '/vuebulma/',
    theme: defaultTheme({
        // logo: '/logo.png',
        // logoDark: '/logo-dark.png',
        navbar: createNavbar(false, './docs'),
        // todo: copy auto with all items collapsible
        sidebar: 'auto',
        repo: 'csc530/vuebulma',
        repoLabel: 'Source',
        docsDir: 'docs',
        contributors: true,
        contributorsText: 'Contributors',
        lastUpdated: true,
        sidebarDepth: 2
    }),
    bundler: viteBundler({
        viteOptions: {},
        vuePluginOptions: {}
    }),
    debug: true
})
