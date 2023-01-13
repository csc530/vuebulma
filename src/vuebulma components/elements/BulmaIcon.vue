<template>
	<!-- Icon text -->
	<component :is="flex ? 'div' : 'span'" v-if="rootClass === 'icon-text'" :class="[rootClass,colourClass]">
		<span v-if=" hasText&&textFirst"><slot name="text">{{ text }}</slot></span>

		<BulmaIcon :colour="colour" :container-size="containerSize" :icon="icon" :prefix="prefix" :stacked="stacked">
			<slot name="icon" />
		</BulmaIcon>

		<span v-if=" hasText&&!textFirst"><slot name="text">{{ text }}</slot></span>
	</component>

	<!--Icon -->
	<template v-else>
		<!--Single-->
		<span v-if="$slots.icon || !Array.isArray(iconLibraryClass)" :class="[sizeClass,colourClass]" class="icon"
		      v-bind="$attrs">
			<slot name="icon">
				<i :class="[iconLibraryClass,prefix]" />
			</slot>
		</span>
		<!--Multiple stacked-->
		<span v-else-if="stacked" :class="[stacked,sizeClass]" class="icon" v-bind="$attrs">
			<slot name="icon">
				<i v-for="(icon,i) in iconLibraryClass" :class="[icon,iconColourClass(i),prefix]" />
			</slot>
		</span>
		<!--Multiple sequential-->
		<span v-for="(icon,i) in iconLibraryClass" v-else :class="[sizeClass,iconColourClass(i)]" class="icon"
		      v-bind="$attrs">
			<slot name="icon">
				<i :class="[icon,prefix]" />
			</slot>
		</span>
	</template>
</template>

<script lang="ts" setup>
	import {computed, useSlots} from 'vue';
	import {BulmaColour, BulmaColourHelper, BulmaSize, getColourClass, getSizeClasses} from '../../types';
	import {BulmaColouredIcon} from "../../types/IconTypes";


	const props = defineProps<{
		/**The icon class name with style prefix
		 * @example 'fa-solid', 'fa-shield-cat', [fa-solid, fa-shield-cat]*/
		icon?: string | (string | BulmaColouredIcon)[] | BulmaColouredIcon,
		/** If the icon element will be a display flex; filling space of parent container
		 * @default false*/
		flex?: boolean,
		/** The text to display next to the icon */
		text?: string,
		/**Text and icon's colour*/
		colour?: BulmaColourHelper | BulmaColour,
		/** The size of the icon and text container
		 * @default default */
		containerSize?: BulmaSize,
		/**adds this prefix as a separate class entry to icon element*/
		prefix?: string,
		/**
		 * If the text appears before the icon
		 *
		 * requires {@link text} or text slot*/
		textFirst?: boolean,
		/** if the icons will be stacked on top of each other rather than side by side
		 *
		 * if the icon stack needs a class added to it (e.g. fa-stack) then stacked string value will be appended to the icon's span
		 */
		stacked?: boolean | string
	}>();

	const iconLibraryClass = computed(() => {
		if(Array.isArray(props.icon))
			return props.icon.map(icon => {
				if(typeof icon === 'string')
					return icon;
				else
					return icon.icon ? icon.icon : '';
			}).filter(icon => icon !== '');
		else if(typeof props.icon === 'string') return props.icon;
		else if(typeof props.icon === "object") return props.icon.icon;
		else return;
	});

	const textSlot = useSlots().text;
	const rootClass = computed(() => textSlot || props.text ? 'icon-text' : 'icon');

	const colourClass = computed(() => {
		if(props.colour)
			return getColourClass(props.colour, 'text');
		else if(typeof props.icon === 'object' && !Array.isArray(props.icon))
			return getColourClass(props.icon.colour, 'text')
		else
			return null;
	});

	const iconColourClass = (index: number) => {

		if(props.icon && Array.isArray(props.icon) && typeof props.icon[index] !== 'string')
			return getColourClass((props.icon[index] as BulmaColouredIcon).colour, 'text')
		return null;
	};

	const sizeClass = computed(() => getSizeClasses(props.containerSize));

	const hasText = computed(() => props.text || textSlot);
</script>

