<template>
	<span :class="classes" class="select">
<!--		todo select multiple does not update to array-->
		<select :multiple="!!isMultiple" :size="multipleSize" :value="modelValue" v-bind="$attrs"
		        @input="transformSelected($event)">
			<slot>
				<option v-for="option in options" :value="optionValue(option)">
					{{ (option.text ? option.text : option) }}
				</option>
			</slot>
		</select>
	</span>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaColour, BulmaInputState, BulmaSize, getBulmaClassesFromProps} from "../../types";

	const props = defineProps<{
		/** The colour of the select. */
		colour?: BulmaColour
		/** Size of the select. */
		size?: BulmaSize
		/** Visual state of the select. */
		state?: BulmaInputState,
		/** Whether the select is rounded */
		isRounded?: boolean,
		/** Whether the select can have multiple values, if it's a number represent the size of the select (number of values to show) */
		isMultiple?: boolean | number,
		//todo: make a type for this
		//todo: make type for adding optgroups
		/** The options to display in the select. v-model only works with options prop */
		options?: ({ text: string, value: any } | string)[]

		modelValue?: any
		/** Must pair with BulmaFormControl with isExpanded prop top work; makes select expand to fill its parent */
		isFullWidth?: boolean
	}>();

	const emit = defineEmits<{
		(name: 'update:modelValue', newValue: any | any[]): any
	}>();
	const multipleSize = computed(() => typeof props.isMultiple === 'number' ? props.isMultiple : null);
	const classes = computed(() => getBulmaClassesFromProps(props));


	function optionValue(option: { text: string, value: any } | string) {
		if(typeof option === 'string') {
			return option;
		}
	}

	//todo: return value always as array, or not idk
	/**
	 * Get the array of selected values from the select element
	 * @param {Event} e - The input event
	 */
	function transformSelected(e: Event) {
		const target = e.target as HTMLSelectElement;
		if(props.isMultiple) {
			const selected = Array.from(target.selectedOptions).map(option => option.value);
			emit('update:modelValue', selected);
		}
		else
			emit('update:modelValue', target.value);
	}
</script>

