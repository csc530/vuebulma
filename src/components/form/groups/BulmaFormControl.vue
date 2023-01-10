<template>
	<component :is="tag" :class="classes" class="control">

		<slot />
		<bulma-icon v-if="rightIcon || $slots['right-icon']" :container-size="rightIcon.containerSize"
		            :icon="getIcon(rightIcon)"
		            :stacked="rightIcon.stacked"
		            class="is-right">
			<slot name="right-icon" />
		</bulma-icon>
		<bulma-icon v-if="leftIcon || $slots['left-icon']" :container-size="leftIcon.containerSize"
		            :icon="getIcon(leftIcon)"
		            :stacked="leftIcon.stacked"
		            class="is-left">
			<slot name="left-icon" />
		</bulma-icon>
	</component>
</template>
<!--todo: simplify or well document/explain how to use and properly nest all these form controls 🙃 so much for making the library an easier version of Bulma to work with-->
<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaColouredIcon, BulmaStackedIcon, getBulmaClassesFromProps} from "../../../types";
	import BulmaIcon from "../../BulmaIcon.vue";

	const props = withDefaults(defineProps<{
		tag?: string
		/** If the control should expand in parent; only applicable in BulmaFormGroups     */
		isExpanded?: boolean
		/** requires textarea, input*/
		isLoading?: boolean
		leftIcon?: string | boolean | BulmaColouredIcon | BulmaStackedIcon
		rightIcon?: string | boolean | BulmaColouredIcon | BulmaStackedIcon
	}>(), {tag: 'p'});

	const classes = computed(() => {
		const classes = getBulmaClassesFromProps(props);
		if(props.leftIcon)
			classes.push('has-icons-left');
		if(props.rightIcon)
			classes.push('has-icons-right');
		return classes;
	});

	function getIcon(icon: string | boolean | BulmaColouredIcon | BulmaStackedIcon) {
		if(typeof icon === 'string')
			return icon;
		else if(typeof icon === 'boolean')
			return null;
		else
			return icon.icon;
	}
</script>