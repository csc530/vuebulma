<template>
	<figure :class="[getDimensionClasses(dimension),getAspectRatioClasses(aspectRatio)]" class="image">
		<picture :class="{'is-rounded': rounded}">
			<slot v-if="$slots.default" :class="{'is-rounded': rounded}"/>
			<img v-bind="$attrs" v-else :alt="alt" :class="{'is-rounded': rounded}" :src="src"/>
		</picture>
	</figure>
</template>

<style lang="sass">
//@import "./node_modules/bulma/sass/elements/image"
</style>

<script lang="ts" setup>
import {AspectRatios, Dimensions} from "../types/types";
import {getAspectRatioClasses, getDimensionClasses} from "../types/types.js";

const props = defineProps<{
	dimension?: Dimensions
	rounded?: boolean
	///needs width to defaults to fullwidth
	aspectRatio?: AspectRatios
	// notFullwidth?: boolean, todo:  figure where and how this is used; https://bulma.io/documentation/elements/image/#responsive-images-with-ratios
	src?: string,
	alt?: string
}>();
</script>

