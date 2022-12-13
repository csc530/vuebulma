<template>
	<textarea class="textarea" :rows="rows" :class="classes" />
</template>

<script setup lang="ts">
	import {computed} from "vue";
	import {BulmaColours, BulmaSizes, getBulmaClassesFromProps} from "../../types/types";

	const props = defineProps<{
		colour?: BulmaColours
		size?: BulmaSizes
		isRounded?: boolean
		isLoading?: boolean
		isStatic?: boolean
		rows?: number
		hasFixedSize?: boolean
	}>();

	const classes = computed(() => getBulmaClassesFromProps(props));
</script>

