<template>
	<component :is="tag" :class="classes" class="buttons">
		<slot>
			<BulmaButton v-for="(item, i) in items" :key="item" ref="buttons" :is-active="isActiveItem[i]" :text="item"
			             @click="clickHandler(i)" />
		</slot>
	</component>
</template>

<script lang="ts" setup>
	import {computed, ref} from "vue";
	import {Alignment, BulmaButton as pp, BulmaSizes, getBulmaClassesFromProps} from "../../types/types";
	import BulmaButton from "./BulmaButton.vue";

	const props = withDefaults(defineProps<{
		tag?: string
		size?: BulmaSizes
		hasAddons?: boolean
		alignment?: Alignment
		activateOnClick?: boolean | 'singly'
		items?: string[] | pp
	}>(), {
		tag: 'div'
	});
	const isActiveItem = ref<boolean[]>([]);

	const buttons = ref<InstanceType<typeof BulmaButton>[] | null>([]);
	const classes = computed(() => [getBulmaClassesFromProps(props, true)]);
	const clickHandler = (index: number) => {
		if(buttons.value)
			buttons.value.forEach((button, i) => button.isSelected = i === index);

	};
</script>

