<template>
<demo-level/>
</template>

<script>
import {defineComponent} from 'vue';
import DemoMedia from "./demos/layouts/DemoMedia.vue";
import DemoLevel from "./demos/layouts/DemoLevel.vue";

export default defineComponent({
	components: {DemoLevel, DemoMedia}
})
</script>