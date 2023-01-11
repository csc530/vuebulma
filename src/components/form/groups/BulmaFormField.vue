<template>
	<!--todo: lots of divs in horizontal field-->
	<!--Horizontal field-->
	<div v-if="isHorizontal" :class="classes" class="field is-horizontal">
		<label v-if="label" :class="labelSizeClass" :for="labelFor" class="field-label label">{{ label }}
		</label>
		<div class="field-body">
			<div class="field">
				<slot />
				<p v-if="help" class="help">{{ help }}</p>
			</div>
		</div>
	</div>
	<!--Simple field-->
	<div v-else class="field">
		<label v-if="label" :for="labelFor" :class="labelSizeClass" class="label">{{ label }}
			<slot />
		</label>
		<slot v-else />
		<p v-if="help" class="help">{{ help }}</p>
	</div>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaSize, getBulmaClassesFromProps, getSizeClasses} from "../../../types";

	const props = withDefaults(defineProps<{
		/**label for the form field*/
		label?: string;
		/**help text for the form field */
		help?: string;
		/** Display the field horizontally
		 * @default false         */
		isHorizontal?: boolean;
		/** Size of the label */
		labelSize?: BulmaSize
		/** ID of the input element to associate with the label.
		 * Only necessary with horizontal fields as the input is not a direct child of the label */
		labelFor?: string
	}>(), {});

	const classes = computed(() => getBulmaClassesFromProps(props));
	const labelSizeClass = computed(() => getSizeClasses(props.labelSize));


	/*
	NOTES:
	is-horizontal: each field takes up a line so to have a multiline form with one label one the side the first
horizontal field would have the label and each subsequnet line would be another field
	 */
</script>

