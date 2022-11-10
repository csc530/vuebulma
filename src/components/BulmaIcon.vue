<template>
	<component :is="flex ? 'div' : 'span'" class="has-text-success" v-bind:class="[rootClass,colourClass]">
  <span v-for="item in iconSet" :class="size" class="icon">
    <i :class="item"></i>
  </span>
		
		<span v-if="$slots.default()"><slot /></span>
	</component>
</template>

<style lang="sass">
//@import "./node_modules/bulma/sass/elements/icon"
</style>

<script lang="ts" setup>
	import {computed, useSlots} from 'vue';
	
	const props = defineProps<{
		icon?: string | string[]
		flex?: boolean
		colour?: 'info' | 'danger' | 'warning' | 'success'
		containerSize?: 'small' | 'medium' | 'large' | 'default'
	}>();
	
	const slots = useSlots();
	
	const rootClass = computed(() => {
		if(slots.default)
			return 'icon-text';
		else
			return 'icon';
	});
	
	const iconSet = computed(() => {
		if(props.icon && Array.isArray(props.icon))
			return props.icon;
		else if(typeof props.icon === 'string')
			return [props.icon];
		else
			return [];
	});
	
	console.log(iconSet.value);
	
	const colourClass = computed(() => {
		if(props.colour)
			return `has-text-${props.colour}`;
		return '';
	});
	
	const size = computed(() => {
		if(props.containerSize && props.containerSize !== 'default')
			return `is-${props.containerSize}`;
		return '';
	});
</script>

