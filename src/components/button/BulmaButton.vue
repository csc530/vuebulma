<template>
	<component :is="tag" :class="classes" class="button">
		<slot>{{ label }}</slot>
	</component>
</template>

<script lang="ts" setup>
	import {computed, ref} from "vue";
	import {BulmaSize, ButtonColours, getBulmaClassesFromProps} from "../../types";

	const props = withDefaults(defineProps<{
		tag?: 'button' | 'a';
		label?: string;
		colour?: ButtonColours
		isLight?: boolean;
		size?: BulmaSize
		//todo: remove is-normal becuase it just reverts button to default size, https://bulma.io/documentation/elements/button/#sizes
		isNormal?: boolean;
		isResponsive?: boolean;
		isFullWidth?: boolean;
		isOutlined?: boolean;
		isInverted?: boolean;
		isRounded?: boolean;
		isLoading?: boolean;
		isStatic?: boolean;
		hasAddons?: boolean;
		isActive?: boolean;
	}>(), {
		tag: 'button'
	});

	const isSelected = ref(false);
	//? used for button groups to append 'is-selected' class to the button (ensures its on top)
	const classes = computed(() => getBulmaClassesFromProps({...props, isSelected: isSelected.value}));

	defineExpose({isSelected});
</script>

