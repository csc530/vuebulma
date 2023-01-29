<template>
	<component :is="tag" class="level" :class="classes">
		<div v-if="$slots.left" class="level-left">
			<slot name="left" />
		</div>

		<slot />

		<div v-if="$slots.right" class="level-right">
			<slot name="right" />
		</div>
	</component>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {getBulmaClassesFromProps} from "../../../types";

	const props = withDefaults(defineProps<{
		/** Level element tag
		 * @default div */
		tag?: string;
		/** maintain horizontal display on mobile
		 * @default false */
		isMobile: boolean;
	}>(), {tag: 'div', isMobile: false});
	const classes = computed(() => getBulmaClassesFromProps(props));
</script>