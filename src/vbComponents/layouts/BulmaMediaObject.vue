<template>
	<component :is="tag" class="media">
		<div class="media-left">
			<slot name="left" />
		</div>
		<div class="media-content">
			<slot />
		</div>
		<div class="media-left">
			<slot name="right" />
		</div>
	</component>
</template>

<script setup lang="ts">
	withDefaults(defineProps<{ tag?: string }>(), {tag: 'div'});
</script>