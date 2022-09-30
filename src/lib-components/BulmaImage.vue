<template>
	<figure :class="[dimen, {'is-fullwidth': !notFullwidth}]" class="image">
		<picture :class="{'is-rounded': rounded}" class="is-fullwidth">
			<slot :class="{'is-rounded': rounded}" />
		</picture>
	</figure>
	<span>Fallthrough attributes: {{ $attrs }}</span>
</template>

<style lang="sass">
@import "../../../../node_modules/bulma/sass/elements/image"
</style>

<script lang="ts" setup>
	import {computed} from 'vue';
	import {prop} from 'vue-class-component';
	
	const props = defineProps<{
		dimensions?: 16 | 24 | 32 | 48 | 64 | 96 | 128
		rounded?: boolean
		///needs width to defaults to fullwidth
		ratio?: 'square' | '1by1' | '5by4' | '4by3' | '3by2' | '5by3' | '16by9' | '2by1' | '3by1' | '4by5' | '3by4' | '2by3' | '3by5' | '9by16' | '1by2' | '1by3'
		notFullwidth?: boolean
	}>();
	
	const dimen = computed(() => {
		if(props.dimensions)
		{
			const dimensions = Number(props.dimensions).toFixed(0);
			return `is-${dimensions}x${dimensions}`;
		}
		else if(props.ratio)
			return `is-${props.ratio}`;
		else
			return '';
	});
</script>

