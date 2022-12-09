<template>
	<component :is="containerTag" :class="[colourClass,sizeClass]" class="message">
		<component :is="headerTag" v-if="title || $slots.header" class="message-header">
			<slot v-if="$slots.header" name="header"/>
			<p v-else>{{ title }}</p>
			<!--			todo: replace with bulma button/delete-->
			<button v-if="deleteBtn" aria-label="delete" class="delete"
			        @click="emit('closeMsg',$event, $el)"></button>
		</component>

		<component :is="bodyTag" class="message-body">
			<slot v-if="$slots.default"/>
		</component>
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	import {computed, defineEmits} from "vue";
	import {Colours, getSizeClasses, Size} from "../types/types";

	// todo: create default handlerand to remove message from DOM and see if preventdefault modifier will stop that
	const emit = defineEmits<{
		(name: 'closeMsg', event: Event, msgContainer: HTMLElement): void
	}>();

	const props = withDefaults(defineProps<{
				containerTag?: string;
				headerTag?: string;
				title?: string;
			deleteBtn?: boolean;
			bodyTag?: string;
			colour?: Colours;
			size?: Size
		}>(),
		{
			containerTag: 'article',
			headerTag: 'header',
			bodyTag: 'p'
		});

const colourClass = computed(() => {
	if (props.colour) {
		return 'is-' + props.colour;
	}
});
const sizeClass = getSizeClasses(props.size);
</script>

