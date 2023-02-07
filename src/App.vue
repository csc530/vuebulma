<template>
<demo-columns/>
</template>

<script>
	import {defineComponent} from "vue";
	import DemoColumns from "./demos/layouts/DemoColumns.vue";
	import DemoMedia from "./demos/layouts/DemoMedia.vue";
	import DemoLevel from "./demos/layouts/DemoLevel.vue";

	export default defineComponent({
		components: {DemoColumns, DemoLevel, DemoMedia}
	});
</script>