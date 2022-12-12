<template>
<component :is="tag" class="control">

</component>
</template>

<script setup lang="ts">
defineProps<{
	tag?: string;
}>();
</script>

