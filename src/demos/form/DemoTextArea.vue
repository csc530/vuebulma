<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-text-area v-model="text" :colour="colour" :has-fixed-size="fixed" :size="size" :state="state" />
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Colour">
				<v-bulma-select v-model="colour" :options="getBulmaColours()" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Size">
				<v-bulma-select v-model="size" :options="getBulmaSizes()" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="State">
				<v-bulma-select v-model="state" :options="getBulmaStates()" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Fixed Size">
				<input v-model="fixed" type="checkbox" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaColour, BulmaSize, BulmaState, getBulmaColours, getBulmaSizes, getBulmaStates} from "../../types";

	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaTextArea from "../../vbComponents/form/VBulmaTextArea.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const text = ref("Hello World from VueBulma Textarea");
	const colour = ref<BulmaColour>('default');
	const size = ref<BulmaSize>('default');
	const state = ref<BulmaState>('default');
	const fixed = ref(false);
</script>

