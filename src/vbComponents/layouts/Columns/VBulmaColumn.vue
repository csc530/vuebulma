<template>
	<component :is="tag" class="column" :class="[sizeClass,offset,responsiveClass]">
		<slot/>
	</component>
</template>


<script setup lang="ts">
	import {computed} from "vue";
	import {BulmaMediaSizes, removeDecimals} from "../../../types";
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

	function toColumnSizeClass(prefix: string, size: BulmaColumnSizes) {
		switch(size) {

			case undefined:
				return;
			case "full":
				return prefix + "full";
			case "4/5":
				return prefix + "four-fifths";
			case "3/4":
				return prefix + "three-quarters";
			case "2/3":
				return prefix + "two-thirds";
			case "3/5":
				return prefix + "three-fifths";
			case "half":
				return prefix + "half";
			case "2/5":
				return prefix + "two-fifths";
			case "1/3":
				return prefix + "one-third";
			case "quarter":
				return prefix + "one-quarter";
			case "1/5":
				return prefix + "one-fifth";
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			default:
				//must be a number from int range type
				return prefix + removeDecimals(Number(size));
		}
	}

	const offset = computed(() => props.offset ? toColumnSizeClass("is-offset-", props.offset) : null);
	const sizeClass = computed(() => props.isNarrow ? "is-narrow" : props.size ? toColumnSizeClass("is-", props.size) : null);
	const responsiveClass = computed(() => props.breakpoint ? "is-" + props.breakpoint : null);
</script>

