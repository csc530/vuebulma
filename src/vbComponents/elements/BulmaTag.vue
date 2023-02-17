<template>
	<component :is="tag" class="tag" :class="classes">
		<slot>{{ label }}</slot>
	</component>
</template>

<script setup lang="ts">
	import {computed} from "vue";
	import {BulmaColour, BulmaSize, getBulmaClassesFromProps} from "../../types";

	const props = withDefaults(defineProps<{
		tag?: string;
		label?: string
		colour?: BulmaColour
		size?: Exclude<BulmaSize, "small">
		isRounded?: boolean
		isDelete?: boolean
	}>(), {
		tag: "span"
	});

	const classes = computed(() => getBulmaClassesFromProps(props));
</script>