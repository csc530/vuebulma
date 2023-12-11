<template>
	<v-bulma-box tag="section">
		<slot/>
	</v-bulma-box>
</template>

<style scoped>
section {
    background-image: linear-gradient(120deg, #00d1b2 0%, #41b883 100%);
}
</style>

<script lang="ts">
	import {defineComponent} from "vue";
	import VBulmaBox from "../vbComponents/elements/VBulmaBox.vue";

	export default defineComponent({
		name: "DemoBox",
		components: {VBulmaBox}
	});
</script>