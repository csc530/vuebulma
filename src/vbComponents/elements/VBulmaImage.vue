<template>
	<component :is="tag" :class="classes" class="image">
		<slot>
			<img :alt="alt" :class="{'is-rounded': isRounded,}" :src="src" />
		</slot>
	</component>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {toBulmaImageClasses} from "../../class-transformers/imageTransformers";
	import {BulmaAspectRatio, BulmaDimension} from "../../types/ImageTypes";

	const props = withDefaults(defineProps<{
		tag?: string,
		size?: BulmaDimension | BulmaAspectRatio,
		isRounded?: boolean,
		/** Src attribute for the img element */
		src?: string,
		/** Alt attribute for the img element; RECOMMENDED */
		alt?: string,
	}>(), {tag: "figure"});

	const classes = computed(() => toBulmaImageClasses(props.size));
</script>

