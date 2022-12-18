<template>
	<figure :class="[getDimensionClasses(dimension), getAspectRatioClasses(aspectRatio)]" class="image">
		<picture>
			<!--! todo: bind is rounded class in some sort of container to work if they slot the image or ifram eor wtv			-->
			<slot v-if="$slots.default" />
			<!--! todo: fix isBulma classes			-->
			<img v-else :alt="alt" :class="classes" :src="src" v-bind="$attrs" />
		</picture>
		<figcaption v-if="$slots.figcaption || caption">
			<slot name="figcaption">{{ caption }}</slot>
		</figcaption>
	</figure>
</template>

<script lang="ts" setup>
	import { computed } from "vue";
	import {
		AspectRatios,
		Dimensions,
		getAspectRatioClasses,
		getBulmaClassesFromProps,
		getDimensionClasses
	} from "../types";

	const props = defineProps<{
		/** Standard dimension for the image container to be from 16 - 128 increase by a factor of 2^x */
		dimension?: Dimensions
		/** If the container should be rounder; clipping whatever does not fit into the image */
		isRounded?: boolean
		///needs width to defaults to fullwidth
		aspectRatio?: AspectRatios
		// notFullwidth?: boolean,
		//TODO:  figure where and how this is used; https://bulma.io/documentation/elements/image/#responsive-images-with-ratios
		/**Src attribute for the img elemnet */
		src?: string,
		/** Alt attribute for the img element; RECOMMNENDED */
		alt?: string,
		/** Optional caption text to display in figcaption */
		caption?: string
	}>();

	const classes = computed(() => getBulmaClassesFromProps(props));
</script>

