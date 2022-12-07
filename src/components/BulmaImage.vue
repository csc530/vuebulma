<template>
	<figure :class="[getDimensionClasses(dimension),getAspectRatioClasses(aspectRatio)]" class="image">
		<picture>
			<!--! todo: bind is rounded class in some sort of container to work if they slot the image or ifram eor wtv			-->
			<slot v-if="$slots.default"/>
			<!--! todo: fix isBulma classes			-->
			<img v-bind="$attrs" v-else :alt="alt" :class="getBulma_IS_Classes(props)" :src="src"/>
		</picture>
	</figure>
</template>

<style lang="sass">
//@import "./node_modules/bulma/sass/elements/image"
</style>

<script lang="ts" setup>
import {AspectRatios, Dimensions, getBulma_IS_Classes} from "../types/types";
import {getAspectRatioClasses, getDimensionClasses} from "../types/types.js";

const props = defineProps<{
	dimension?: Dimensions
	isRounded?: boolean
	///needs width to defaults to fullwidth
	aspectRatio?: AspectRatios
	// notFullwidth?: boolean, todo:  figure where and how this is used; https://bulma.io/documentation/elements/image/#responsive-images-with-ratios
	src?: string,
	alt?: string
}>();
</script>

