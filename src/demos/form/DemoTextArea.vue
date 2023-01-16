<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-text-area v-model="text" :colour="colour" :has-fixed-size="fixed" :size="size" :state="state" />
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field is-horizontal label="Colour">
				<bulma-select v-model="colour" :options="getBulmaColours()" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Size">
				<bulma-select v-model="size" :options="getBulmaSizes()" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="State">
				<bulma-select v-model="state" :options="getBulmaStates()" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Fixed Size">
				<input v-model="fixed" type="checkbox" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaColour, BulmaSize, BulmaState, getBulmaColours, getBulmaSizes, getBulmaStates} from "../../types";

	import BulmaBox from "../../vuebulma components/elements/BulmaBox.vue";
	import BulmaHeading from "../../vuebulma components/elements/BulmaHeading.vue";
	import BulmaSelect from "../../vuebulma components/form/BulmaSelect.vue";
	import BulmaTextArea from "../../vuebulma components/form/BulmaTextArea.vue";
	import BulmaFormField from "../../vuebulma components/form/groups/BulmaFormField.vue";

	const text = ref("Hello World from VueBulma Textarea");
	const colour = ref<BulmaColour>('default');
	const size = ref<BulmaSize>('default');
	const state = ref<BulmaState>('default');
	const fixed = ref(false);
</script>

