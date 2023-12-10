<template>
	<component :is="tag" class="columns is-" :class="classes">
		<slot/>
	</component>
</template>

<script setup lang="ts">
	import {computed} from "vue";
	import {BulmaMediaSizes, getBulmaClassesFromProps} from "../../../types";
	import {BulmaColumnGapSizes} from "../../../types/ColumnTypes";

	const props = withDefaults(defineProps<{
		tag?: string
		// todo: removing custom gap size but works when just the numbers are used in the union showing
		// * [Vue warn]: Invalid prop: type check failed for prop "gaps". Expected Boolean | Null, got Number with value 8.
		gaps?: boolean | BulmaColumnGapSizes
		breakpointGaps?: Record<Exclude<BulmaMediaSizes, "auto">, boolean | BulmaColumnGapSizes>
		isMultiline?: boolean
		/** center the child columns vertically
		 * @default false
		 */
		isVcentered?: boolean
		/** Center child columns horizontally
		 * @default false
		 */
		isCentered?: boolean
	}>(), {
		tag: "div",
		gaps: true
	});

	function toGapClass(gap: boolean | BulmaColumnGapSizes) {
		if(gap === true)
			return;
		else if(gap === false)
			return ("is-gapless");
		else if(gap !== true) {
			return [("is-variable"), ("is-" + gap.toString())];
		}
	}

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
		classes.push(toGapClass(props.gaps));
		classes.push(getBulmaClassesFromProps(props));
		return classes;

	});
</script>

