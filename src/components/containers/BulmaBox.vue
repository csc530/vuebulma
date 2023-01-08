<template>
	<component :is="tag" class="box">
		<slot />
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	withDefaults(defineProps<{
			tag?: string
		}>(),
		{
			tag: 'section'
		})
</script>

