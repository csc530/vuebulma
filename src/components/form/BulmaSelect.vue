<template>
	<div :is="tag" :class="classes" class="select">
		<select v-bind="$attrs" :value="modelValue" @input="emit('update:modelValue',$event.target.value)">
			<slot>
				<option v-for="option in options" :selected="isSelected(option)" :value="option.value ? option.value :option">
					{{ (option.text ? option.text : option) }}
				</option>
			</slot>
		</select>
	</div>
</template>

<script lang="ts" setup>
	import {computed, useAttrs} from "vue";
	import {BulmaColours, BulmaSizes, getBulmaClassesFromProps} from "../../types";

	const props = defineProps<{
		tag?: string;
		isMultiline?: boolean;
		color?: BulmaColours
		size?: BulmaSizes
		isLoading?: boolean
		isRounded?: boolean
		isStatic?: boolean
		options?: { text: string, value: any }[] | string[]
		modelValue?: any
		/** Must pair with BulmaFormControl with isExpanded prop top work; makes select expand to fill its parent */
		isFullWidth?: boolean
	}>();

	const emit = defineEmits<{
		(name: 'update:modelValue', newValue: any): any
	}>();

	const classes = computed(() => getBulmaClassesFromProps(props));
	const attrs = useAttrs();
	//todo add ismultiple if attrs has multiple

	const isSelected = (option: { text: string, value: any } | string) => {
		let value;
		if(typeof option === 'string')
			value = option;
		else
			value = option.value;
		if(attrs.multiple)
			return (props.modelValue as any[]).includes(value);
		else
			return props.modelValue === value;
	}
</script>

