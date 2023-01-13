<template>
	<div :class="classes" class="field">
		<slot />
	</div>
</template>

<script lang="ts" setup>

	import {computed} from "vue";
	import {BulmaAlignment, toBulmaAlignmentClasses} from "../../../types";

	const props = withDefaults(defineProps<{
		/**
		 * The alignment of the control group
		 */
		alignment?: BulmaAlignment;
		/** make form controls [appear] attached together. Not recommended with a label*/
		hasAddons?: boolean
		/** wrap controls. Not compatible with {@link hasAddons} */
		isMultiline?: boolean
	}>(), {});

	const classes = computed(function () {
		const classes = []
		if(!props.hasAddons) {
			classes.push('is-grouped')
			classes.push('is-grouped-' + toBulmaAlignmentClasses(props.alignment).substring(3))
			if(props.isMultiline)
				classes.push('is-grouped-multiline')
		}
		else {
			classes.push('has-addons')
			classes.push('has-addons-' + toBulmaAlignmentClasses(props.alignment).substring(3))
		}
		return classes
			;
	});

</script>

