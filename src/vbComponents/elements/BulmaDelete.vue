<template>
	<button :class="size" class="delete"></button>
</template>

<script lang="ts" setup>
	import {computed} from "vue";
	import {BulmaSize, toSizeClasses} from "../../types";

	const props = defineProps<{
		size?: BulmaSize
	}>();
	const size = computed(() => toSizeClasses(props.size));
</script>