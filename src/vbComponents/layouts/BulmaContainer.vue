<template>
	<component :is="tag" :class="classes" class="container">
		<slot />
	</component>
</template>


<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaMediaSizes, BulmaMobileSizes} from "../../types";

	const props = withDefaults(defineProps<{
		tag?: string,
		/** Maintains left and right margins on the container
		 * @default false */
		isFluid?: boolean;
		/** For the selected media it will have a max width that will center it with appropriate margins */
		//export type BulmaMediaSizes = 'auto' | 'desktop' | 'widescreen' | 'fullhd';
		breakpoint?: Exclude<BulmaMediaSizes, BulmaMobileSizes>;
		/** narrow will have margins applied to and lower than it's modifier breakpoint (only for `fullwidth` and `fullhd`)
		 * fullwidth will have no margins until media breakpoint */
		modifier?: "narrow" | "fullwidth"

	}>(), {tag: 'div', modifier: 'narrow'});

	const classes = computed(() => {
		if(props.isFluid || (props.breakpoint === 'auto' && props.modifier === 'fullwidth'))
			return 'is-fluid';
		else if(!props.breakpoint || props.breakpoint === "auto")
			return;
		let container = 'is-';
		if(props.modifier === 'narrow')
			container += 'max-';
		return container.concat(props.breakpoint) as const;
	});
</script>