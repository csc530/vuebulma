<template>
	<component :is="tag" :class="[sizeClass, type, { 'is-spaced': isSpaced }]">
		<slot />
	</component>
</template>

<style scoped></style>

<script lang="ts" setup>
	import {computed} from 'vue';
	import {BulmaHeadingSizes, BulmaHeadingTypes, getBulmaHeadingSizeClass} from '../types';

	const props = withDefaults(defineProps<{
			/** If there will be regular spacing between `title`s and `subtitle`s*/
			isSpaced?: boolean,
			/** The container element or component for the BulmaHeading, defaults to `p` */
			tag?: string,
			/** Text size 1-6; 1 being the largest, defaults to 1 */
			size?: BulmaHeadingSizes,
			/**A title or subtitle, defaults to title*/
			type?: BulmaHeadingTypes
		}>(),
		{tag: 'p', size: 1, type: 'title'});

	const sizeClass = computed(() => getBulmaHeadingSizeClass(props.size));
</script>

