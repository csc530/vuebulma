<template class="has-background-dark">
	<img alt="Vue logo" src="https://bulma.io/images/bulma-logo.png">
	<BulmaBreadcrumb :list="breadcrumbList" alignment="is-centered" last-crumb-is-active separator="succeeds" />
	<bulma-card :footer="socks">
		<template #header>mt yiy</template>
		toast..!
		<template v-slot:footer-item="{text,href}" @click="window.location.href=href">
			<h3>{{ href }}</h3>-><strong>{{ text }}</strong>
		</template>
	</bulma-card>
	<bulma-icon icon="fa-solid fa-wand-magic-sparkles" colour="danger">Wow an icon...</bulma-icon>
	<bulma-image dimensions="24.0" rounded>
		<img :src="require('./assets/made-with-bulma.png')" class="is-rounded" alt="made with Bulma"/>
	</bulma-image>
</template>

<style lang="sass">
</style>

<script lang="ts" setup>
	import BulmaBreadcrumb from '@/lib-components/BulmaBreadcrumb.vue';
	import BulmaCard from '@/lib-components/BulmaCard.vue';
	import BulmaIcon from '@/lib-components/BulmaIcon.vue';
	import BulmaImage from '@/lib-components/BulmaImage.vue';
	import {BreadcrumbItem, Link,} from '@/models';
	import {ref} from 'vue';
	
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
</script>
