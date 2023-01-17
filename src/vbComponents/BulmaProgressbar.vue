<template>
	<progress class="progress" :class="classes" :value="value" :max="max">{{ value }}</progress>
</template>

<script setup lang="ts">
	import {computed} from "vue";
	import {BulmaColour, BulmaSize, getBulmaClassesFromProps} from "../types";

	const props = defineProps<{
		/** The progress current value, if no value is set an indeterminate animation is shown instead */
		value?: number,
		/** The final value for the progress to reach */
		max?: number,
		/** Colour of the progress bar */
		colour?: BulmaColour
		/** The size of the progress bar */
		size?: BulmaSize
	}>();

	const classes = computed(() => getBulmaClassesFromProps(props))
</script>