<template>
	<component :is="tag" :class="classes" class="buttons">
		<slot />
	</component>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaAlignments, BulmaSize, getBulmaClassesFromProps} from "../../types";


	const props = withDefaults(defineProps<{
		tag?: string
		size?: BulmaSize
		hasAddons?: boolean
		alignment?: BulmaAlignments
	}>(), {
		tag: 'div'
	});

	const classes = computed(() => [getBulmaClassesFromProps(props, true)]);

</script>

