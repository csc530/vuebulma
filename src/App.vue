<template>

</template>

<script>
	import {defineComponent} from "vue";
	import DemoLevel from "./demos/layouts/DemoLevel.vue";
	import DemoMedia from "./demos/layouts/DemoMedia.vue";
	import DemoTile from "./demos/layouts/DemoTile.vue";

	export default defineComponent({
		components: {DemoTile, DemoLevel, DemoMedia}
	});
</script>