<template>
	<component :is="tag" class="card">

		<header class="card-header" v-if="typeof title === 'string' || $slots.icon || $slots.title">
			<p class="card-header-title">
				<slot name="title">{{ title }}</slot>
			</p>
			<button class="card-header-icon">
				<slot name="icon" />
			</button>
		</header>

		<div class="card-image is-center" v-if="$slots.image && !imageAfterContent">
			<slot name="image" />
		</div>

		<p class="card-content" v-if="$slots.default">
			<slot />
		</p>

		<div class="card-image is-center" v-if="$slots.image && imageAfterContent">
			<slot name="image" />
		</div>

		<footer class="card-footer" v-if="footerItems">
			<component :is="footerTag" v-for="item in footerItems" class="card-footer-item">
				<slot name="footer" v-bind:data="item"><p>{{ item }}</p></slot>
			</component>
		</footer>
	</component>
</template>

<script lang="ts" setup>
	const props = withDefaults(defineProps<{
		tag?: string
		title?: string
		footerItems?: any[]
		footerTag?: string,
		imageAfterContent?: boolean
	}>(), {
		tag: "div",
		footerTag: "p"
	});
</script>