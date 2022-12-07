<template>
	<bulma-box>
		<bulma-heading tag="h2">Message</bulma-heading>
		<bulma-message title="Hello World" type="primary">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis
			placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
			<a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit
		</bulma-message>

		<bulma-heading tag="h3">Colors</bulma-heading>
		<bulma-message colour="primary" delete-btn title="Primary Colour">Hey look I'm primary <strong>and</strong> I have a
			delete button... neat
		</bulma-message>
		<bulma-message size="large" colour="link" title="Link Colour">Hey look I'm link and large</bulma-message>
		<bulma-message size="medium" colour="info" title="Info Colour">Hey look I'm info and <em>Medium</em></bulma-message>
		<bulma-message size="default" colour="success" title="Success Colour">
			<template #header>
				<bulma-heading size="4" tag="h3" type="subtitle"><strong>Success Colour</strong>
					oh look at that a fancy header
				</bulma-heading>
			</template>
			Hey look I'm success and normal size
		</bulma-message>
		<bulma-message size="small" colour="warning" title="Warning Colour">Hey look I'm warning and smol</bulma-message>
		<bulma-message colour="danger" title="Danger Colour">Hey look I'm danger</bulma-message>
		<bulma-heading tag="h3">Header-less</bulma-heading>
		<bulma-message colour="dark">Hey look I'm dark</bulma-message>
		<bulma-message colour="light">Hey look I'm light</bulma-message>
		<bulma-message colour="white">Hey look I'm white</bulma-message>
		<bulma-message colour="black">Hey look I'm black</bulma-message>
	</bulma-box>
</template>

<style scoped>

</style>

<script lang="ts" setup>
import BulmaBox from "../components/containers/BulmaBox.vue";
import BulmaHeading from "../components/BulmaHeading.vue";
import BulmaMessage from "../components/BulmaMessage.vue";</script>

