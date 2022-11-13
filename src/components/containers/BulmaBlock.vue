<template>
	<component class="block" :is="tag">
		<slot />
	</component>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	withDefaults(defineProps<{ tag?: string }>(), {tag: 'div'});
</script>

