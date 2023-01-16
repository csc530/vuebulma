<template>
	<span :class="classes" class="select">
		<select ref="select" v-model="value" :multiple="!!isMultiple" :size="multipleSize" v-bind="$attrs">
			<slot>
				<template v-for="item in options">
					<option v-if="typeof item === 'string'" :value="item">{{ item }}</option>
					<optgroup v-else-if="isBulmaOptionGroup(item)" :disabled="item.disabled" :label="item.label">
						<option v-for="option in item.options"
						        :value="option.value ? option.value : option">{{ option.label ? option.label : option }}
						</option>
					</optgroup>
					<option v-else :disabled="item.disabled" :value="item.value">{{ item.label }}
					</option>
				</template>
			</slot>
		</select>
	</span>
</template>

<script lang="ts" setup>
	import {computed, ref, WritableComputedRef} from "vue";
	import {BulmaColour, BulmaInputState, BulmaSize, getBulmaClassesFromProps} from "../../types";
	import {BulmaOption, BulmaOptionGroup, isBulmaOptionGroup} from "../../types/SelectTypes";

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
		/** The options to display in the select */
		options?: (BulmaOption | BulmaOptionGroup | string)[]
		/** The initial value of the select. Used for v-model */
		modelValue?: any
		/** Must pair with BulmaFormControl with isExpanded prop top work; makes select expand to fill its parent */
		isFullwidth?: boolean
	}>();

	const emit = defineEmits<{
		(name: 'update:modelValue', newValue: any | any[]): unknown
	}>();
	const multipleSize = computed(() => typeof props.isMultiple === 'number' ? props.isMultiple : null);
	const classes = computed(() => getBulmaClassesFromProps(props));

	const select = ref<HTMLSelectElement | null>(null);
	const value: WritableComputedRef<any> = computed({
		get() {
			return props.modelValue;
		},
		set(newValue) {
			emit('update:modelValue', newValue);
		}
	});

</script>

