<template>
	<div :class="[classes, {'has-name':fileName}]" class="file">
		<label class="file-label">
			<input class="file-input" name="resume" type="file" v-bind="$attrs" />
		</label>
		<span class="file-label">{{ label }}</span>
		<span class="file-name">{{ fileName }}</span>
	</div>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaAlignment, BulmaColours, BulmaSizes, getBulmaClassesFromProps} from "../../types/types";

	const props = defineProps<{
		label?: string;
		/** The name of the file input */
		fileName?: string;
		/** The size of the file input */
		size?: BulmaSizes
		/** The colour of the file input */
		colour?: BulmaColours;
		alignment?: BulmaAlignment
		/** Whether the file input is rounded */
		isRounded?: boolean;
		/** Whether the file input is loading */
		isLoading?: boolean;
		/** Whether the file input is static */
		isStatic?: boolean;
		/** If the file input should have a boxed display */
		isBoxed?: boolean;
		/** Determines if the input file name will expand to fill the available space */
		isFullwidth?: boolean;
		//todo: add icon for the file input
	}>();

	const classes = computed(() => getBulmaClassesFromProps(props));
</script>

