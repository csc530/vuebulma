<template>
	<component :is="tag" :class="classes" class="tags">
		<slot/>
	</component>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaSize, getBulmaClassesFromProps} from "../../types";

	const props = withDefaults(defineProps<{
		tag?: string
		size?: Exclude<BulmaSize, "small">
		hasAddons?: boolean

	}>(), {
		tag: "div"
	});
	const classes = computed(() => getBulmaClassesFromProps(props, true));
</script>