<template>
	<component :is="tag" :class="[getSize, type, {'is-spaced': isSpaced}]">
		<slot />
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	import {computed} from 'vue';
	import {TextSizes} from '../models';
	
	type headingTypes = 'title' | 'subtitle';
	const props = withDefaults(defineProps<{
				///If there will be regular spacing between `title`s and `subtitle`s
				isSpaced?: boolean,
				///The container element or component for the BulmaHeading, defaults to `p`
				tag?: string,
				///Text size 1-6; 1 being the largest, defaults to 1
				size?: TextSizes,
				///A title or subtitle, defaults to title
				type?: headingTypes
			}>(),
			{tag: 'p', size: 1, type: 'title'});
	
	const getSize = computed(() => 'is-' + Number(props.size).toFixed().toString());
</script>

