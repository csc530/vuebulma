<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-message @close-msg.prevent="test" :colour="colour" :delete-btn="deleteBtn" :size="size"
		               :heading="heading">
			{{ body }}
		</bulma-message>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field is-horizontal label="Heading">
				<bulma-form-control>
					<bulma-input v-model="heading" />
				</bulma-form-control>
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Body">
				<bulma-form-control>
					<bulma-text-area v-model="body" />
				</bulma-form-control>
			</bulma-form-field>

	<bulma-form-field is-horizontal label="Colour">
		<bulma-form-control>
			<bulma-select v-model="colour" :options="getBulmaColours()" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Delete Button">
		<bulma-form-control>
			<input v-model="deleteBtn" type="checkbox" />
		</bulma-form-control>
	</bulma-form-field>

			<bulma-form-field is-horizontal label="Size">
				<bulma-form-control>
					<bulma-select v-model="size" :options="getBulmaSizes()" />
				</bulma-form-control>
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>
<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaColour, BulmaSize, getBulmaColours, getBulmaSizes} from "../../types";
	import BulmaMessage from "../../vbComponents/components/BulmaMessage.vue";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaTextArea from "../../vbComponents/form/BulmaTextArea.vue";
	import BulmaFormControl from "../../vbComponents/form/groups/BulmaFormControl.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const colour = ref<BulmaColour>('primary');
	const heading = ref('John 3:16');
	const body = ref('For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.');
	const deleteBtn = ref(false);
	const size = ref<BulmaSize>('large');

	const test = () => {
		console.log('test');
	}
</script>

