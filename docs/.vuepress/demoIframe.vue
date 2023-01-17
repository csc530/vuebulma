<template>
	<iframe ref="iframe" :name="name" allowfullscreen height="500px" loading="lazy" style="@import " width="100%" />
	<!--Switched to span as a template the html is not rendered within (as a child of) the document fragment but a sibling :/-->
	<span ref="component">
		<slot />
	</span>
</template>

<style lang="css" scoped>
    span {
        display: none;
    }
</style>

<script lang="ts" setup>
	import {onMounted, ref} from "vue";

	defineProps<{ name: string }>();
	const component = ref<HTMLSpanElement | null>();
	const iframe = ref<HTMLIFrameElement | null>();


	onMounted(() => {
		if(!(component.value && iframe.value))
			return;
		const iframeDocument = iframe.value.contentDocument;
		if(!iframeDocument)
			return;
		var link;
		if(!document)
			link = iframeDocument.createElement("link");
		else
			link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css";
		link.as = "style";
		link.type = "text/css";

		const iframeBody = iframeDocument.body;
		iframeBody.appendChild(component.value);
		iframeDocument.head.appendChild(link);
		iframeBody.classList.add("container", "is-fluid", "is-responsive");
	});
</script>