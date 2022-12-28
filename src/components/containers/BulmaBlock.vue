<template>
	<component :is="tag" class="block">
		<slot />
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	defineProps({
		tag: {
			default: 'section',
			type: String,
			required: false
		}
	});
</script>