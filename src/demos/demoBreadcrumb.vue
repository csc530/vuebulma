<template>
	<BulmaBox>
		<BulmaHeading tag="h2">Breadcrumbs</BulmaHeading>
		<BulmaBreadcrumb :list="breadcrumbList" alignment="is-centered" last-crumb-is-active separator="succeeds"
		                 size="large"/>
	</BulmaBox>

</template>

<style scoped>

</style>

<script lang="ts" setup>
import BulmaBox from "../components/containers/BulmaBox.vue";
import {ref} from "vue";
import {BreadcrumbItem} from "../types/types";
import BulmaHeading from "../components/BulmaHeading.vue";
import BulmaBreadcrumb from "../components/BulmaBreadcrumb.vue";

const path = ref(window.location.pathname.split('/'));
path.value.shift();
//remove trailing slash if present and empty
if (path.value[path.value.length - 1] === '')
	path.value.pop();
path.value.unshift(window.location.hostname);
const breadcrumbList: BreadcrumbItem[] = path.value.map((item, index) => {
	const breadcrumb: BreadcrumbItem = {
		text: item,
		href: '/' + path.value.slice(1, index + 1).join('/'),
		isActive: false
	};
	return breadcrumb;

});
breadcrumbList[0].href = '/';
breadcrumbList[breadcrumbList.length - 1].isActive = true;

//? generate long url path
if (window.location.pathname.split('/').length <= 4)
	window.location.href = '/my/Vue3/Bulma/component-library?value=foo&great=true';

</script>

