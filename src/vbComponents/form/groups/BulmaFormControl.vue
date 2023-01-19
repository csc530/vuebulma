<template>
	<component :is="tag" :class="classes" class="control">
		<slot />
		<bulma-icon v-if="rightIcon || $slots['right-icon']" v-bind="rightIcon" class="is-right">
			<slot name="right-icon" />
		</bulma-icon>
		<bulma-icon v-if="leftIcon || $slots['left-icon']" v-bind="leftIcon" class="is-left">
			<slot name="left-icon" />
		</bulma-icon>
	</component>
</template>
<!--todo: simplify or well document/explain how to use and properly nest all these form controls 🙃 so much for making the library an easier version of Bulma to work with-->
<script lang="ts" setup>
	import {computed} from "vue";
	import {getBulmaClassesFromProps} from "../../../types";
	import BulmaIcon from "../../elements/BulmaIcon.vue";

	type IconProps = InstanceType<typeof BulmaIcon>["$props"];

	const props = withDefaults(defineProps<{
		tag?: string
		/** If the control should expand in parent; only applicable in BulmaFormGroups     */
		isExpanded?: boolean
		/** Display loading animation within input
		 * requires textarea or input child
		 * @default false*/
		isLoading?: boolean
		//todo: vue emits [warn] that the expected props are only String | Boolean | Null
		//Why is my custom props being ignored/turned to null
		/** Left icon to display within input*/
		leftIcon?: IconProps
		/** Right icon to display within input*/
		rightIcon?: IconProps
	}>(), {tag: 'p'});

	const classes = computed(() => {
		const classes = getBulmaClassesFromProps(props);
		if(props.leftIcon)
			classes.push('has-icons-left');
		if(props.rightIcon)
			classes.push('has-icons-right');
		return classes;
	});
</script>