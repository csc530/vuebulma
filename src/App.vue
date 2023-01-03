<template>
	<DemoBreadcrumb />
</template>

<style scoped>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
    }

    .logo:hover {
        filter: drop-shadow(0 0 2em #646CFFAA);
    }

    .logo.vue:hover {
        filter: drop-shadow(0 0 2em #42B883AA);
    }
</style>

<script lang="ts" setup>
	import DemoBreadcrumb from "./demos/DemoBreadcrumb.vue";

	console.log(DemoBreadcrumb);
</script>