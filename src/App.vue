<template>
	<img alt="Vue logo" src="https://bulma.io/images/bulma-logo.png">
	<BulmaBreadcrumb :list="breadcrumbList" alignment="is-centered" last-crumb-is-active separator="succeeds" />
</template>
<script lang="ts" setup>
	import BulmaBreadcrumb from '@/components/BulmaBreadcrumb.vue';
	import {BreadcrumbItem,} from '@/models';
	import {ref} from 'vue';
	
	const path = ref(window.location.pathname.split('/'));
	path.value.shift();
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

</script>

<style lang="sass">

</style>
