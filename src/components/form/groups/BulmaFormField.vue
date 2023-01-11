<template>
	<div v-if="!isHorizontal" :class="classes" class="field">
		<label v-if="label" :class="getSizeClasses(size)" class="label">{{ label }}</label>
		<slot />
		<p v-if="help" class="help">{{ help }}</p>
	</div>

	<div v-else :class="classes" class="field is-horizontal">
		<div v-if="label" class="field-label is-normal">
			<label class="label">{{ label }}</label>
		</div>
		<div class="field-body">
			<slot />
			<p v-if="help" class="help">{{ help }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaAlignment, BulmaSize, getBulmaClassesFromProps, getSizeClasses} from "../../../types";

	const props = withDefaults(defineProps<{
		/**label for this whole group of controls; ONLY render isHorizontal */
		label?: string;
		help?: string;
		tag?: string;
		/** make form controls [and all children] be inline (on the same line) */
		// todo: test if this is dup of formcontrolgroup's
		isGrouped?: false | BulmaAlignment;
		/** applicable only with isGrouped */
		isMultiline?: boolean;
		//todo: finish class logic https://bulma.io/documentation/form/general/#horizontal-form
		isHorizontal?: boolean;
		//todo: test readon and if it's still necessary
		verticalSize?: BulmaSize
		size?: BulmaSize
	}>(), {tag: 'div'});

	const classes = computed(() => getBulmaClassesFromProps(props));
	//todo: figure out how to pass down the size class to the input component when it's horizontal
	const verticalSizeClass = computed(() => !props.verticalSize ? 'is-normal' : getSizeClasses(props.verticalSize));


	/*
	NOTES:
	is-horizontal: each field takes up a line so to have a multiline form with one label one the side the first horizontal field would have the label and each subsequnet line would be another field
	 */
</script>

