<template>
	<component :is="tag" class="box">
		<slot />
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	const props = defineProps({
		tag: {
			default: 'section',
			type: String,
			required: false
		}
	});
</script>

