<template>
	<component :is="containerTag" :class="classes" class="message">
		<component :is="headerTag" v-if="title || $slots.header" class="message-header">
			<slot v-if="$slots.header" name="header"/>
			<p v-else-if="title">{{ title }}</p>
			<!--			todo: replace with bulma button/delete-->
			<button v-if="deleteBtn" class="delete" @click="deleteOnClick($event, $el)"></button>
		</component>

		<component :is="bodyTag" class="message-body">
			<slot v-if="$slots.default"/>
		</component>
	</component>
</template>

<script lang="ts" setup>
	import {computed, defineEmits} from "vue";
	import {BulmaColours, BulmaSizes, getSizeClasses} from "../types/types";

	const emit = defineEmits<{
		(name: 'closeMsg', event: Event, msgContainer: HTMLElement): void
	}>();

	const props = withDefaults(defineProps<{
				containerTag?: string;
				headerTag?: string;
				title?: string;
				deleteBtn?: boolean;
				bodyTag?: string;
				colour?: BulmaColours;
				size?: BulmaSizes;
				closeOnXClick?: boolean | 'hide' | 'remove';
			}>(),
			{
				containerTag: 'article',
				headerTag: 'header',
				bodyTag: 'p'
			});

	const colourClass = computed(() => {
		if(props.colour) {
			return 'is-' + props.colour;
		}
	});
	const sizeClass = computed(() => getSizeClasses(props.size));
	const classes = computed(() => {
		return [colourClass.value, sizeClass.value];
	});

	const deleteOnClick = (event: Event, target: HTMLElement) => {
		if(props.closeOnXClick === 'remove')
			target.remove();
		else if(props.closeOnXClick === 'hide' || props.closeOnXClick === true)
			target.classList.toggle('is-hidden');
		emit('closeMsg', event, target);
	}
</script>

