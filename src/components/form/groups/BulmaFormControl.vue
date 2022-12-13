<template>
	<component :is="tag" :class="classes" class="control">
		<slot />
	</component>
</template>
<!--todo: simplify or well document/explain how to use and proeprly nest all these form constrols 🙃 so much for making the library an easier version of Bulma to work with-->
<script lang="ts" setup>
	import {computed} from "vue";
	import {getBulmaClassesFromProps} from "../../../types/types";

	const props = withDefaults(defineProps<{
		tag?: string
		isExpanded?: boolean
		//todo: add icons support https://bulma.io/documentation/form/general/#with-icons
	}>(), {tag: 'p'});

	const classes = computed(() => getBulmaClassesFromProps(props));
</script>