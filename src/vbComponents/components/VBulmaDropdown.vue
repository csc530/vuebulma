<template>
	<component :is="tag" ref="dropdown" :class="[classes]" class="dropdown">

		<span :is="tag" @click="toggleActivation($event, $refs.dropdown,true)">
			<slot />
		</span>

		<component :is="tag" class="dropdown-menu">
			<component :is="tag" class="dropdown-content">

				<component :is="itemTag" v-for="(item,i) in content" ref="item" class="dropdown-item"
				           @click="emit('itemClick', item,$event, $refs.item[i])">
					<!--!	todo: add better values for a divider-->
					<hr v-if="item === null" class="dropdown-divider" />
					<slot v-else name="dropdown-item" v-bind:data="item">
						<component :is="tag" class="dropdown-item">{{ item }}</component>
					</slot>
				</component>

			</component>
		</component>
	</component>
</template>

<script lang="ts" setup>

	import {computed, ref} from 'vue';
	import {BulmaLeftRight, getBulmaClassesFromProps, toggleActivation} from '../../types';

	const emit = defineEmits<{
		(name: 'itemClick', item: any, event: Event, element: HTMLElement): void
	}>();

	const props = withDefaults(defineProps<{
		/** alignment of the dropdown menu */
		alignment?: BulmaLeftRight,
		/** items to display in the dropdown menu */
		content: any[],
		/** tag to use for the dropdown menu */
		tag?: string,
		/** tag to use for the dropdown items */
		itemTag?: string,
		/** open the dropdown menu on hover */
		isHoverable?: boolean,
		/** open the dropdown upwards */
		isDropup?: boolean
	}>(), {
		tag: 'div',
		itemTag: 'p'
	});
	const classes = computed(() => getBulmaClassesFromProps(props));

	const dropdown = ref<HTMLElement | null>(null);
	const item = ref<HTMLElement[] | null>(null);

</script>

