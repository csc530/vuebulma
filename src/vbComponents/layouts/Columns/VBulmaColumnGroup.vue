<template>
	<component :is="tag" class="columns" :class="classes">
		<slot/>
	</component>
</template>

<script setup lang="ts">
	import {computed} from "vue";
	import {toGapClass} from "../../../class-transformers/columnTransformers";
	import {BulmaMediaSizes, getBulmaClassesFromProps} from "../../../types";
	import {BulmaColumnGapSizes} from "../../../types/ColumnTypes";

	const props = withDefaults(defineProps<{
		tag?: string
		// todo: removing custom gap size but works when just the numbers are used in the union showing
		// * [Vue warn]: Invalid prop: type check failed for prop "gaps". Expected Boolean | Null, got Number with value 8.
		gap?: boolean | BulmaColumnGapSizes
		breakpointGaps?: Record<Exclude<BulmaMediaSizes, "auto">, boolean | BulmaColumnGapSizes>
		isMultiline?: boolean
		isVcentered?: boolean
		isCentered?: boolean
	}>(), {
		tag: "div",
		gap: true
	});

	const classes = computed(() => {
		const classes = [];

		if(props.breakpointGaps) {
			let breakpoints = Object.keys(props.breakpointGaps || {}) as BulmaMediaSizes[];
			// console.log(breakpoints);
			for(let i = 0; i < breakpoints.length; i++) {
				let breakpoint = breakpoints[i];
				classes.push("is" + breakpoints);
				classes.push(toGapClass(props.breakpointGaps[breakpoint]));
			}
		}
		classes.push(toGapClass(props.gap));
		classes.push(getBulmaClassesFromProps(props));
		return classes;
	});
</script>

