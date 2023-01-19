<template>
	<component :is="tag" class="card">
		<header class="card-header" v-if="title || $slots.icon">
			<p class="card-header-title" :class="titleClass">{{ title }}</p>
			<button class="card-header-icon">
				<slot name="icon" />
			</button>
		</header>

		<div class="card-image is-center" v-if="$slots.image">
			<slot name="image" />
		</div>


		<p class="card-content" v-if="$slots.default">
			<slot />
		</p>

		<footer class="card-footer" v-if="footerItems">
			<component :is="footerTag" v-for="item in footerItems" class="card-footer-item">
				<slot name="footer" v-bind:data="item">{{ item }}</slot>
			</component>
		</footer>
	</component>
</template>

<script lang="ts" setup>

	import {computed} from "vue";
	import {toBulmaAlignmentClasses} from "../../types";

	const props = withDefaults(defineProps<{
		/** parent tag of the card
		 * @default div     */
		tag?: string
		/** text for card header */
		title?: string
		/** canter the header title */
		centerTitle?: boolean
		/** items to display in the card footer */
		footerItems?: any[]
		/** tag to wrap footer items in
		 * @default p */
		footerTag?: string
	}>(), {
		tag: 'div',
		footerTag: 'p'
	});
	const titleClass = computed(() => toBulmaAlignmentClasses(props.centerTitle ? 'center' : 'left'))
</script>