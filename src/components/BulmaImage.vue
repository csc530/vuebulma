<template>
	<figure :class="[getDimensionClasses(dimension),getAspectRatioClasses(aspectRatio)]" class="image">
		<picture>
			<!--! todo: bind is rounded class in some sort of container to work if they slot the image or ifram eor wtv			-->
			<slot v-if="$slots.default"/>
			<!--! todo: fix isBulma classes			-->
			<img v-else :alt="alt" :class="classes" :src="src" v-bind="$attrs"/>
		</picture>
		<figcaption v-if="$slots.figcaption || caption">
			<slot name="figcaption">{{ caption }}</slot>
		</figcaption>
	</figure>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {AspectRatios, Dimensions, getBulmaClassesFromProps} from "../types/types";
	import {getAspectRatioClasses, getDimensionClasses} from "../types/types.js";

	const props = defineProps<{
		dimension?: Dimensions
		isRounded?: boolean
		///needs width to defaults to fullwidth
		aspectRatio?: AspectRatios
		// notFullwidth?: boolean, todo:  figure where and how this is used; https://bulma.io/documentation/elements/image/#responsive-images-with-ratios
		src?: string,
		alt?: string,
		caption?: string
	}>();
	const classes = computed(() => getBulmaClassesFromProps(props));
</script>

