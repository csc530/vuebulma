<template>
	<component :is="tag" class="column" :class="classes">
		<slot />
	</component>
</template>


<script setup lang="ts">
	import {computed} from "vue";
	import {BulmaMediaSizes} from "../../../types";
	import {toColumnOffsetClass, toColumnSizeClass} from "../../../class-transformers/columnTransformers";
	import {BulmaColumnSizes} from "../../../types/ColumnTypes";

	const props = withDefaults(defineProps<{
		tag?: string
		size?: BulmaColumnSizes
		offset?: BulmaColumnSizes
		isNarrow?: boolean
		breakpoint?: false | BulmaMediaSizes
	}>(), {
		tag: "div"
	});

	const classes = computed(() => {
		const offset = props.offset ? toColumnOffsetClass(props.offset) : null;
		const sizeClass = (() => {
			if(props.isNarrow)
				return "is-narrow";
			return props.size ? toColumnSizeClass(props.size) : null;
		})();
		const responsiveClass = props.breakpoint ? "is-" + props.breakpoint : null;
		return [sizeClass, offset, responsiveClass];
	});

</script>

