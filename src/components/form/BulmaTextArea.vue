<template>
	<textarea class="textarea" :rows="rows" :class="classes" />
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaColour, BulmaSize, getBulmaClassesFromProps} from "../../types";

	//todo: add v:model support

	const props = defineProps<{
		colour?: BulmaColour
		size?: BulmaSize
		//todo: loading needs to go on parent control tag
		isLoading?: boolean
		isStatic?: boolean
		rows?: number
		hasFixedSize?: boolean
	}>();

	const classes = computed(() => getBulmaClassesFromProps(props));
</script>

