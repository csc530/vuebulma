<template>
	<component :is="tag" :class="classes" class="tile">
		<slot/>
	</component>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaTileContext, BulmaTileSize} from "../../types/TileTypes";

	const props = withDefaults(defineProps<{
		/**
		 * Parent tag for the tile
		 * @default div
		 */
		tag?: string,
		/**
		 * __must have child tile__
		 * displays children vertically instead of horizontally; children are appended downwards
		 * @default false
		 */
		isVertical?: boolean;

		/**
		 * Size of the __12-column__ grid this tile should take up
		 * Unassigned tiles will share the remaining space equally
		 */
		size?: BulmaTileSize

		/**
		 * The relative context of a tile
		 * @default tile
		 */
		context?: BulmaTileContext
		/** Place tile in a box
		 * @default false
		 */
		box?: boolean
	}>(), {
		tag: "div",
		context: "tile"
	});

	const classes = computed(() => {
		const classes = [];
		if(props.box)
			classes.push("box");
		if(props.size)
			classes.push(`is-${props.size}`);
		if(props.isVertical)
			classes.push("is-vertical");
		if(props.context && props.context !== "tile")
			classes.push(`is-${props.context}`);
		if(props.size)
			switch(props.size) {
				case "half":
					classes.push(`is-6`);
					break;
				case "full":
					classes.push("is-12");
					break;
				case "1/4":
					classes.push("is-3");
					break;
				case "1/3":
					classes.push("is-4");
					break;
				default:
					classes.push(`is-${props.size}`);
					break;
			}

		return classes;
	});
</script>