<template>
	<component :is="tag" :class="classes" class="notification">
		<slot name="delete" />
		<slot />
	</component>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaColour, getBulmaClassesFromProps} from "../../types";

	const props = withDefaults(defineProps<{
		/** the parent tag to wrap notification
		 * @default div */
		tag?: string,
		/** background colour of the notification */
		colour?: BulmaColour
		/** Make the colour lighter, requires {@link colour} */
		isLight?: boolean,
	}>(), {
		tag: 'div'
	});

	const classes = computed(() => getBulmaClassesFromProps(props))
</script>