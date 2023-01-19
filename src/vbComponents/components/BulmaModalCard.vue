<template>
	<div :class="{'is-active':isActive}" class="modal">
		<div class="modal-background" @click="emit('update:isActive',false)"></div>
		<div class="modal-card">
			<header class="modal-card-head">
				<p class="modal-card-title">
					<slot name="title">{{ title }}</slot>
				</p>
				<button aria-label="close" class="delete" @click="emit('update:isActive',false)"></button>
			</header>
			<section class="modal-card-body">
				<slot />
			</section>
			<footer class="modal-card-foot">
				<slot name="footer" />
			</footer>
		</div>
	</div>
</template>

<script lang="ts" setup>

	const props = defineProps<{
		isActive?: boolean,
		title?: string,
	}>();

	const emit = defineEmits<{
		(name: 'update:isActive', value: boolean): void
	}>();
	// Add a keyboard event to close all modals
	document.addEventListener('keydown', (event) => {
		if(event.key === 'Escape')  // Escape key
			emit('update:isActive', false)
	});
</script>