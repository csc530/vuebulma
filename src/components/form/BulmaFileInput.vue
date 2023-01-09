<template>
	<div :class="classes" class="file">
		<label class="file-label">
			<input class="file-input" type="file" v-bind="$attrs" @input="transformValue($event)" />
			<span class="file-cta">
				<span v-if="$slots.default" class="file-icon"><slot /></span>
				<span class="file-label">{{ label }}</span>
			</span>
			<span v-if="fileName" class="file-name">{{ fileName }}</span>
		</label>
	</div>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaAlignments, BulmaColour, BulmaSize, getBulmaClassesFromProps} from "../../types";

	const emit = defineEmits<{ (name: 'update:modelValue', newValue: FileList | string) }>();

	const props = defineProps<{
		/** The label to display on the button         */
		label?: string;
		/** The name of the file input */
		fileName?: string;
		/** The size of the file input */
		size?: BulmaSize
		/** The colour of the file input */
		colour?: BulmaColour;
		alignment?: BulmaAlignments
		/** If the file input should have a boxed display */
		isBoxed?: boolean;
		/** Determines if the input file name will expand to fill the available space
		 * Requires {@link fileName} or {@link isBoxed}*/
		isFullwidth?: boolean;
		/** used for v:model */
		modelValue?: FileList | string;
		/** reverse the order of the file name and the label */
		isReversed?: boolean;
	}>();

	const classes = computed(() => {
		const classes = []
		if(props.isReversed)
			classes.push('is-right');
		if(props.fileName)
			classes.push('has-name');
		classes.push(getBulmaClassesFromProps(props))
		return classes;
	});

	/**
	 * Transform the input value to {@link FileList} if it's `multiple`
	 * else a {@link string} containing the file name is emitted
	 * @param {Event} event The input event from the file input
	 */
	function transformValue(event: Event) {
		const target = event.target as HTMLInputElement;
		if(target.multiple)
			emit('update:modelValue', target.files);
		else
			emit('update:modelValue', target.value);
	}
</script>

