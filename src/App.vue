<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img alt="Vite logo" class="logo" src="/vite.svg" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img alt="Vue logo" class="logo vue" src="assets/vue.svg" />
		</a>
	</div>
	<HelloWorld msg="Vite + Vue" />
	<img alt="Vue logo" src="https://bulma.io/images/bulma-logo.png">
	<BulmaBreadcrumb :list="breadcrumbList" alignment="is-centered" last-crumb-is-active separator="succeeds" />

	<bulma-card :footer="socks">
		<template #header>mt yiy</template>
		toast..!
		<template v-slot:footer-item="{text,href}" @click="window.location.href=href">
			<h3>{{ href }}</h3>-><strong>{{ text }}</strong>
		</template>
	</bulma-card>
	<bulma-icon colour="danger" icon="fa-solid fa-wand-magic-sparkles">Wow an icon...</bulma-icon>
	<bulma-image dimensions="24.0" rounded>
		<img :src="png" alt="made with Bulma" class="is-rounded" />
	</bulma-image>
</template>

<style scoped>
.logo {
	height      : 6em;
	padding     : 1.5em;
	will-change : filter;
}

.logo:hover {
	filter : drop-shadow(0 0 2em #646CFFAA);
}

.logo.vue:hover {
	filter : drop-shadow(0 0 2em #42B883AA);
}
</style>

<script lang="ts" setup>
	import {ref} from 'vue';
	import {BreadcrumbItem, Link} from './models';
	const png =  import('./assets/made-with-bulma.png');

	// !* BreadCrumb
	const path = ref(window.location.pathname.split('/'));
	path.value.shift();
	//remove trailing slash if present and empty
	if(path.value[path.value.length - 1] === '')
		path.value.pop();
	path.value.unshift(window.location.hostname);
	const breadcrumbList: BreadcrumbItem[] = path.value.map((item, index) => {
		const breadcrumb: BreadcrumbItem = {
			text: item,
			href: '/' + path.value.slice(1, index + 1).join('/'),
			isActive: false,
		};
		return breadcrumb;
		
	});
	breadcrumbList[0].href = '/';
	breadcrumbList[breadcrumbList.length - 1].isActive = true;
	
	// !* Card
	const socks: (Link)[] = [
		{href: 'https://bulma.io', text: 'Bulma'},
		{href: 'https://vuejs.org', text: 'Vue'},
		{href: 'https://y.at/✝🧠🍁👽', text: 'Me'},
	];
	console.log(socks);
</script>