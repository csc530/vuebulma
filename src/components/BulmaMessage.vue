<template>
	<component :is="containerTag" :class="classes" class="message">

		<component :is="headingTag" v-if="title || $slots.heading || deleteBtn" class="message-header">
			<slot name="heading">
				{{ heading }}
			</slot>
			<!--todo: replace with bulma button/delete-->
			<button v-if="deleteBtn" ref="delBtn" class="delete"
			        @click="deleteOnClick($event, $el,$refs.delBtn)"></button>
		</component>

		<component :is="bodyTag" class="message-body">
			<slot v-if="$slots.default" />
		</component>
	</component>
</template>

<script lang="ts" setup>
	import {computed, defineEmits, ref} from "vue";
	import {BulmaColour, BulmaSize, getBulmaClassesFromProps} from "../types";

	const emit = defineEmits<{
		/**
		 * Triggered when delete button is clicked
		 * @param {"closeMsg"} name Name of the event
		 * @param {Event} event Event object
		 * @param {HTMLElement} msgContainer The parent element of the message
		 * @param {HTMLElement} deleteBtn The delete button element
		 */
		(name: 'closeMsg', event: Event, msgContainer: HTMLElement, deleteBtn: HTMLButtonElement): void,
	}>();

	const props = withDefaults(defineProps<{
			/**HTML or registered component tag for the message
			 * @default article */
			containerTag?: string;
			/** HTML or registered component tag for the message's header
			 * @default header */
			headingTag?: string;
			/** Display text in message title */
			heading?: string;
			/** Show close button in the message header */
			deleteBtn?: boolean;
			/** HTML or registered component tag to contain message body
			 * @default p*/
			bodyTag?: string;
			/** Colour of message */
			colour?: BulmaColour;
			/** display size of the message
			 * @default default */
			size?: BulmaSize;
			/** Behaviour of the message after close button is clicked
			 * @default remove */
			//TODO: remove function type and replace with emit function
			closeBehaviour?: boolean | 'hide' | 'remove';
		}>(),
		{
			containerTag: 'article',
			headingTag: 'header',
			bodyTag: 'p',
			size: 'default',
			closeBehaviour: 'remove'
		});

	const classes = computed(() => getBulmaClassesFromProps(props));

	const delBtn = ref<HTMLButtonElement | null>(null);

	//TODO: investigate default emit function to be used and prevent with .preventDEfault in components
	const deleteOnClick = (event: Event, target: HTMLElement, delBtn: HTMLButtonElement) => {
		if(props.closeBehaviour === 'remove')
			target.remove();
		else if(props.closeBehaviour)
			target.classList.toggle('is-hidden');
		emit('closeMsg', event, target, delBtn);
	}
</script>

