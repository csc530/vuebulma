<template>
	<component :is="tag" :class="[classes,getLeftRightClasses(alignment)]" class="dropdown">
		<component :is="tag" class="dropdown-trigger" @click="toggleActivation($event, $el)">
			<slot/>
		</component>

		<component :is="tag" class="dropdown-menu">
			<component :is="tag" class="dropdown-content">

				<slot v-for="(item,i) in content" v-if="$slots['dropdown-item']" :key="i" class="dropdown-item"
				      name="dropdown-item" v-bind:data="item"/>
				<component :is="tag" v-for="(item,j) in content" v-else :key="j" class="dropdown-item">{{ item }}</component>

			</component>
		</component>
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>

import {toggleActivation, getLeftRightClasses, LeftRight, getBulma_IS_Classes} from '../../types/types';
//?! wierd stuff happens  in the with defaults macro when wrapping the props in quotes like the 'onClick' not showing up
// and 'is-hoverable' coming up as an attribute
const defaults = {
	tag: 'div',
	onClick: true,
	'is-hoverable': false,
};
const props = withDefaults(defineProps<{
	alignment?: LeftRight
	content: any[]
	tag?: string
	onClick?: boolean
	'is-hoverable'?: boolean
}>(), defaults);


const classes = getBulma_IS_Classes(props);
</script>

