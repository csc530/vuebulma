import { defaultTheme, defineUserConfig } from 'vuepress'
import { createNavbar } from "./navbar";
import { clipboardPlugin } from 'vuepress-plugin-clipboard'

export default defineUserConfig({
	plugins: [clipboardPlugin({})],
	lang: 'en-CA',
	title: 'vuebulma Docs',
	description: 'Documentation for @csc530 vuebulma component library',
	base: '/vuebulma/',
	theme: defaultTheme({
		// logo: '/logo.png',
		// logoDark: '/logo-dark.png',
		navbar: createNavbar(false),
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
	debug: true
})
