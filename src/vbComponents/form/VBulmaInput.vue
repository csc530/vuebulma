<template>
	<input :class="classes" :value="modelValue" class="input"
	       v-on:input="emit('update:modelValue', $event.target.value)" />
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaColour, BulmaSize, BulmaState, getBulmaClassesFromProps} from "../../types";

	const props = withDefaults(defineProps<{
		//todo add documentation of suggested types
		/** The colour of the input. */
		colour?: BulmaColour
		/** The size of the input. */
		size?: BulmaSize
		/** The state of the input. */
		state?: BulmaState
		/** display as non-editable input */
		isStatic?: boolean
		/** The value to set to the input; used for the v-model */
		modelValue?: any
	}>(), {});

	const emit = defineEmits<{
		/** The value to set to the input; used for the v-model */
		(name: 'update:modelValue', newValue: typeof props.modelValue): void
	}>();

	const classes = computed(() => getBulmaClassesFromProps(props));
</script>

