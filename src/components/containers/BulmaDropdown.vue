<template>
	<component :is="tag" :class="[actions,getLeftRightClasses(alignment)]" class="dropdown">
		<component :is="tag" class="dropdown-trigger" @click="onClick?toggleActivation($event, $el):pop(onClick)">
			<slot />
		</component>
		<component :is="tag" class="dropdown-menu is-hoverable">
			<component :is="tag" class="dropdown-content">
				<slot v-for="(item,i) in content" v-if="$slots['dropdown-item']" :key="i" class="dropdown-item"
				      name="dropdown-item" v-bind:data="item" />
				<component :is="tag" v-for="(item,i) in content" class="dropdown-item" :key="i" v-else>{{ item }}</component>
			</component>
		</component>
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	const pop = (e: any) => {
		console.log(e);
	};
	import {PropType} from 'vue';
	import {toggleActivation, getLeftRightClasses, LeftRight, getBulma_IS_Classes} from '../../types';
	//?! wierd stuff happens  in the with defaults macro when wrapping the props in quotes like the onClick not showing up and 'is-hoverable' coming up as an attribute
	const props = defineProps({
		alignment: {
			type: String as PropType<LeftRight>,
		},
		content: {
			type: Array as PropType<any[]>,
			default: [],
			required: true
		},
		tag: {
			type: String as PropType<string>,
			default: 'div',
		},
		'onClick': {
			type: Boolean as PropType<boolean>,
			default: true,
		},
		'is-hoverable': {
			type: Boolean as PropType<boolean>,
			default: false,
		},
	});
	
	const actions = getBulma_IS_Classes(props);
	console.log(actions);
</script>

