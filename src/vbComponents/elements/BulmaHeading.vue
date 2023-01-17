<template>
	<component :is="tag" :class="[classes,type]">
		<slot />
	</component>
</template>

<style scoped></style>

<script lang="ts" setup>
	import {computed} from 'vue';
	import {getBulmaClassesFromProps} from '../../types';
	import {BulmaHeadingSizes, BulmaHeadingTypes} from "../../types/HeadingTypes";

	const props = withDefaults(defineProps<{
		/** If there will be regular spacing between `title`s and `subtitle`s as title and subtitle by default are placed closer to one another
		 * @default false */
		isSpaced?: boolean,
		/** Text size 1-6; 1 being the largest and 6 being the smallest
		 * @default  1 */
		size?: BulmaHeadingSizes,
		/** The container element or component for the BulmaHeading
		 * @default p */
		tag?: string,
		/**A title or subtitle
		 * @defaults to title*/
		type?: BulmaHeadingTypes
	}>(), {
		isSpaced: false,
		size: 1,
		tag: 'p',
		type: 'title'
	});


	const classes = computed(() => getBulmaClassesFromProps(props));
</script>

