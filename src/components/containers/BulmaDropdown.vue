<template>

	<component :is="tag" ref="dropdown" :class="[classes,getLeftRightClasses(alignment)]" class="dropdown">
		<span :is="tag" class="dropdown-trigger" @click="toggleActivation($event, $refs.dropdown, onClick)">
			<slot/>
		</span>

		<component :is="tag" class="dropdown-menu">
			<component :is="tag" class="dropdown-content">

				<component :is="itemTag" v-for="(item,i) in content" ref="item" class="dropdown-item">
					<!--? todo: custom itemOnCLickActivator
					@click="toggleActivation($event,$refs.dropdown.item,true)"-->
					<!--!	todo: add better values for a divider-->
					<hr v-if="item === null || item === undefined " class="dropdown-divider"/>
					<slot v-else-if="$slots['dropdown-item']" name="dropdown-item" v-bind:data="item"/>
					<component :is="tag" v-else class="dropdown-item">{{ item }}</component>
				</component>

			</component>
		</component>
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>

import {computed, PropType, ref} from 'vue';
import {toggleActivation, getLeftRightClasses, LeftRight, getBulma_IS_Classes} from '../../types/types';
//?! wierd stuff happens  in the with defaults macro when wrapping the props in quotes like the 'onClick' not showing up
// and 'is-hoverable' coming up as an attribute
const props = defineProps({
	alignment: {
		type: String as PropType<LeftRight>
	},
	content: {
		/// The content of the dropdown; null/undefined/NaN will be a divider
		type: Array as PropType<any[]>,
		default: [],
		required: true
	},
	/// The tag to use for the dropdown,
	tag: {
		type: String as PropType<string>,
		default: 'div'
	},
	/// The tag to use for the dropdown items
	itemTag: {
		type: String as PropType<string>,
		default: 'p'
	},
	onClick: {
		type: Boolean,
		default: true
	},
	'is-hoverable': {
		type: Boolean as PropType<boolean>,
		default: false
	},
	dropUp: {
		type: Boolean as PropType<boolean>,
		default: false
	}
});


const classes = getBulma_IS_Classes(props);
classes.push(props.dropUp ? 'is-up' : '')

const dropdown = ref<HTMLElement | null>(null);
const item = ref<HTMLElement | null>(null);

</script>

