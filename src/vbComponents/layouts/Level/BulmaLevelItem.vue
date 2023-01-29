<template>
	<component :is="tag" class="level-item">
		<slot />
	</component>
</template>

<script setup lang="ts">
	withDefaults(defineProps<{ tag: string }>(), {tag: 'div'});
</script>