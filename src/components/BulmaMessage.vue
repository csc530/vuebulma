<template>
	<component :is="containerTag" :class="classes" class="message">
		<component :is="headerTag" v-if="title || $slots.header || deleteBtn" class="message-header">
			<slot v-if="$slots.header" name="header" />
			<p v-else-if="title">{{ title }}</p>
			<!--			todo: replace with bulma button/delete-->
			<button v-if="deleteBtn" class="delete" @click="deleteOnClick($event, $el)"></button>
		</component>

		<component :is="bodyTag" class="message-body">
			<slot v-if="$slots.default" />
		</component>
	</component>
</template>

<script lang="ts" setup>
	import { computed, defineEmits } from "vue";
	import { BulmaColours, BulmaSizes, getBulmaClassesFromProps, getSizeClasses } from "../types";

	const emit = defineEmits<{
		(name: 'closeMsg', event: Event, msgContainer: HTMLElement): void
	}>();

	const props = withDefaults(defineProps<{
		/**HTML or registered component tag for the message */
		containerTag?: string;
		/** HTML or registered component tag for the message's header */
		headerTag?: string;
		/** Display text in message title */
		title?: string;
		/** Show close button in the message header */
		deleteBtn?: boolean;
		/** HTML or registered component tag to contain message body */
		bodyTag?: string;
		/** Colour of message */
		colour?: BulmaColours;
		/** display size of the message */
		size?: BulmaSizes;
		/** Behaviour of the message after close button is clicked */
		closeBehaviour?: boolean | 'hide' | 'remove' | ((event: Event, messageElement: HTMLElement) => void);
	}>(),
		{
			containerTag: 'article',
			headerTag: 'header',
			bodyTag: 'p'
		});

	const classes = computed(() => getBulmaClassesFromProps(props));

	//TODO: investigate default emit function to be used and prevent with .preventDEfault in components
	const deleteOnClick = (event: Event, target: HTMLElement) => {
		if (typeof props.closeBehaviour === 'function')
			props.closeBehaviour(event, target);
		else if (props.closeBehaviour === 'remove')
			target.remove();
		else if (props.closeBehaviour === 'hide' || props.closeBehaviour === true)
			target.classList.toggle('is-hidden');
		// emit('closeMsg', event, target); temp //!until top todo is finished
	}
</script>

