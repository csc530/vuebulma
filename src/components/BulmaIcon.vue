<template>
	<component :is="flex ? 'div' : 'span'" v-for="item in iconSet" v-bind:class="[rootClass,colourClass,size]">
		
		<span v-if="$slots.default && afterText">
			<slot />
		</span>
		
		<span v-if="!stacked" :class="getIconColour(item)" class="icon">
			<i :class="[prefix,getIconClass(item),iconModifiers]"></i>
		</span>
		<span v-else-if="iconStack.length !== 0" :class="stackWrapper">
			<span v-for="icon in iconStack" :class="getIconColour(icon)" class="icon">
			<i :class="[prefix,getIconClass(icon),iconModifiers]"></i>
			</span>
		</span>
		
		<span v-if="$slots.default && !afterText">
			<slot />
		</span>
	</component>
</template>

<style lang="sass">
//@import "./node_modules/bulma/sass/elements/icon"
</style>

<script lang="ts" setup>
	import {computed, ref, useSlots} from 'vue';
	import {BulmaSizes, ColourHelper, ColourIcon, getColourClass, getSizeClasses} from '../types/types';

	const props = defineProps<{
		///The icon class name with style prefix, fa-solid fa-shield-cat || [fa-solid, fa-shield-cat]
		icon: string | string[] | ColourIcon[],
		flex?: boolean,
		//Text colour
		colour?: ColourHelper,
		//background colour
		bgColour?: ColourHelper,
		containerSize?: BulmaSizes,
		///adds this prefix as a separate class entry to icon element
		prefix?: string,
		///if the icon will be placed after the text (slot) element
		afterText?: boolean,
		///if the icons will be stacked on top of each other rather than side by side
		///if the icon stack needs a class added to it (e.g. fa-stack) then stacked string value will be appended to the icon's span
		stacked?: boolean | string,
		///additional modifiers for the icon, class names will be added to the icon's i element
		iconModifiers?: string[] | string,
	}>();
	
	const rootClass = computed(() => {
		if(useSlots().default)
			return 'icon-text';
		else
			return 'icon';
	});
	
	const iconSet = computed(() => {
		if(props.stacked && props.icon instanceof Array)
			return ['dummy entry just to make the loop work (once)'];
		if(Array.isArray(props.icon))
			return props.icon;
		else
			return [props.icon];
	});
	const colouredStack = ref<boolean>(false);
	const iconStack = computed(() => {
		if(props.stacked && props.icon instanceof Array && props.icon.length !== 0)
			if(typeof props.icon[0] === 'string')
				return props.icon as string[];
			else {
				colouredStack.value = true;
				return (props.icon as ColourIcon[]).map<string>(x => x.icon);
			}
		else
			return [];
		
	});
	const stackWrapper = computed(() => {
		if(typeof props.stacked === 'string')
			return props.stacked;
		else
			return '';
	});
	const getIconClass = (icon: string | ColourIcon) => {
		if(typeof icon === 'string')
			return icon;
		else
			return icon.icon;
	};
	const getIconColour = (icon: string | ColourIcon) => {
		if(typeof icon === 'string')
			return undefined;
		else
			return getColourClass(icon.colour, 'text');
	};
	
	const colourClass = computed(() => {
		let classes = [];
		if(props.colour)
			classes.push(getColourClass(props.colour, 'text'));
		if(props.bgColour)
			classes.unshift(getColourClass(props.bgColour, 'background'));
		return classes;
	});
	
	
	const size = computed(() => {
		if(props.containerSize)
			return getSizeClasses(props.containerSize);
		else
			return '';
	});
</script>

