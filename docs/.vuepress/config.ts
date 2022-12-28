import {defaultTheme, defineUserConfig} from 'vuepress'
import navbar from './navbar'

export default defineUserConfig({
	lang: 'en-CA',
	title: 'vuebulma Docs',
	description: 'Documentation for @csc530 vuebulma component library',
	base: '/vuebulma/',
	theme: defaultTheme({
		// logo: '/logo.png',
		// logoDark: '/logo-dark.png',
		navbar: navbar,
		// todo: copy suto with all items collapsible
		sidebar: 'auto',
		repo: 'csc530/vuebulma',
		repoLabel: 'Source',
		docsDir: 'docs',
		docsBranch: 'gh-pages',
		contributors: true,
		contributorsText: 'Contributors',
		lastUpdated: true,
		sidebarDepth: 2
	}),
	debug: true
})
