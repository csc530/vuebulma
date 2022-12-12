<template>
<component :is="tag" class="field">
	<label class="label" v-if="label">{{ label }}</label>
	<div class="control">
		<slot></slot>
	</div>
	<p class="help" v-if="help">{{ help }}</p>
</component>
</template>

<style scoped>

</style>

<script setup lang="ts">

	defineProps<{
		label?: string;
		help?: string;
		tag?: string;
	}>();
</script>

