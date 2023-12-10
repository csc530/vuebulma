<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-message @close-msg.prevent="test" :colour="colour" :delete-btn="deleteBtn" :size="size"
		               :heading="heading">
			{{ body }}
		</v-bulma-message>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Heading">
				<v-bulma-form-control>
					<v-bulma-input v-model="heading" />
				</v-bulma-form-control>
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Body">
				<v-bulma-form-control>
					<v-bulma-text-area v-model="body" />
				</v-bulma-form-control>
			</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Colour">
		<v-bulma-form-control>
			<v-bulma-select v-model="colour" :options="getBulmaColours()" />
		</v-bulma-form-control>
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Delete Button">
		<v-bulma-form-control>
			<input v-model="deleteBtn" type="checkbox" />
		</v-bulma-form-control>
	</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Size">
				<v-bulma-form-control>
					<v-bulma-select v-model="size" :options="getBulmaSizes()" />
				</v-bulma-form-control>
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>
<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaColour, BulmaSize, getBulmaColours, getBulmaSizes} from "../../types";
	import VBulmaMessage from "../../vbComponents/components/VBulmaMessage.vue";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaTextArea from "../../vbComponents/form/VBulmaTextArea.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const colour = ref<BulmaColour>('primary');
	const heading = ref('John 3:16');
	const body = ref('For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.');
	const deleteBtn = ref(false);
	const size = ref<BulmaSize>('large');

	const test = () => {
		console.log('test');
	}
</script>

