<template>
	<component :is="tag" class="block">
		<slot />
	</component>
</template>

<script lang="ts" setup>
	withDefaults(defineProps<{
			tag?: string
		}>(),
		{
			tag: 'section'
		})
</script>