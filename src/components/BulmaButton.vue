<template>
	<component :is="tag" :class="classes" class="button">
		<slot>{{ label }}</slot>
	</component>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaSize, BulmaState, getBulmaClassesFromProps} from "../types";
	import {BulmaButtonColour} from "../types/ButtonTypes";

	const props = withDefaults(defineProps<{
		/** The HTML element to style as a button
		 * @default button */
		tag?: 'button' | 'a';
		/** Text to display within the button.
		 *
		 * Overrided by slot content*/
		label?: string;
		/** The colour of the button */
		colour?: BulmaButtonColour
		/** Modifies the colour to be lighter
		 * @default false */
		isLight?: boolean;
		/** The size of the button */
		size?: BulmaSize
		/** modify the button size to adjust to screen size
		 * @default false */
		isResponsive?: boolean;
		/** expand button to fill the width of its container
		 * @default false*/
		isFullWidth?: boolean;
		/** Outline button content and border with a transparent background
		 * @default false*/
		isOutlined?: boolean;
		/** Invert button text with its background and vice-versa
		 * @default false*/
		isInverted?: boolean;
		/** Round button corners
		 * @default false*/
		isRounded?: boolean;
		/** Add a loading spinner to the button
		 * @default false*/
		isLoading?: boolean;
		/** Prevents the button from being clicked
		 * @default false*/
		isStatic?: boolean;
		/** The display state of the button */
		state?: BulmaState;
		/** Increases the button's z index, rasining it above other elements
		 * @see [BulmaButtonGroup]{@link https://csc530.github.io/vuebulma/components/bulmabuttongroup.html}
		 * @default false
		 */
		isSelected?: boolean;
	}>(), {
		tag: 'button'
	});

	const classes = computed(() => getBulmaClassesFromProps(props));

</script>

