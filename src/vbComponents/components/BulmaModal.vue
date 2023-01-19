<template>
	<div :class="{'is-active':isActive}" class="modal">
		<div class="modal-background" @click="emit('update:isActive',false)"></div>
		<div class="modal-content">
			<slot />
		</div>
		<button aria-label="close" class="modal-close is-large" @click="emit('update:isActive',false)"></button>
	</div>
</template>


<script lang="ts" setup>

	const emit = defineEmits<{
		(name: 'update:isActive', value: boolean): void
	}>();
	const props = defineProps<{
		isActive?: boolean
	}>();

	// Add a keyboard event to close all modals
	document.addEventListener('keydown', (event) => {
		if(event.key === 'Escape')  // Escape key
			emit('update:isActive', false)
	});

</script>