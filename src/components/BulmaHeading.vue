<template>
	<component :is="tag" :class="[getSize, type, {'is-spaced': isSpaced}]">
		<slot />
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	import {computed} from 'vue';
	import {getHeaderSize, TextSizes} from '../types/types';

	const props = withDefaults(defineProps<{
				///If there will be regular spacing between `title`s and `subtitle`s
				isSpaced?: boolean,
				///The container element or component for the BulmaHeading, defaults to `p`
				tag?: string,
				///Text size 1-6; 1 being the largest, defaults to 1
				size?: TextSizes,
				///A title or subtitle, defaults to title
				type?: 'title' | 'subtitle'
			}>(),
			{tag: 'p', size: 1, type: 'title'});
	
	const getSize = computed(() => getHeaderSize(props.size));
</script>

