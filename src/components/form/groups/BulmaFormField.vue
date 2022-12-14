<template>
	<div :class="classes" class="field">
		<!--todo: only holds 1 input/control within the control class-div; make a prop for multiple contorls to comply with has-addons class-->
		<slot />
	</div>
</template>

<script lang="ts" setup>

	import {computed} from "vue";
	import {BulmaAlignment, getBulmaClassesFromProps} from "../../../types/types";

	const props = withDefaults(defineProps<{
		isGrouped?: false | BulmaAlignment;
		/** make form controls [appear] attached together. Not recommended with a label*/
		hasAddons?: boolean | BulmaAlignment
	}>(), {});

	const classes = computed(() => getBulmaClassesFromProps(props));

</script>

