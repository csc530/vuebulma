<template>
	<div :class="classes" class="field">
		<!--todo: only holds 1 input/control within the control class-div; make a prop for multiple controls to comply with has-addons class-->
		<slot />
	</div>
</template>

<script lang="ts" setup>

	import {computed} from "vue";
	import {BulmaAlignments, getBulmaClassesFromProps} from "../../../types";

	const props = withDefaults(defineProps<{
		isGrouped?: false | BulmaAlignments;
		/** make form controls [appear] attached together. Not recommended with a label*/
		hasAddons?: boolean | BulmaAlignments
		//todo: add is multiline support
	}>(), {});

	const classes = computed(() => getBulmaClassesFromProps(props));

</script>

