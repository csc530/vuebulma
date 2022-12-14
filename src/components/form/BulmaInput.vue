<template>
	<input :class="classes" :value="modelValue" class="input"
	       v-bind="$attrs" v-on:input="emit('update:modelValue', $event.target.value)" />
	<!-- todo: investigate not working type attri when type=checkbox -->
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaColours, BulmaSizes, getBulmaClassesFromProps} from "../../types/types";

	const props = withDefaults(defineProps<{
		//todo add documentation of suggested types
		colour?: BulmaColours
		size?: BulmaSizes
		isRounded?: boolean
		isLoading?: boolean
		isStatic?: boolean
		/** The value to set to the input; used for the v-model */
		modelValue?: any
		// isExpanded?: boolean todo: decide if the expand property should be set in the input or field/;group component
	}>(), {});

	const emit = defineEmits<{
		(name: 'update:modelValue', newValue: any): any
	}>();

	const classes = computed(() => getBulmaClassesFromProps(props));
</script>

