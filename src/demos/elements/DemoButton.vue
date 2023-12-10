<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-button :is-responsive="respons" :colour="colour" :is-full-width="fullwidth" :is-inverted="inverted"
		              :is-light="light" :is-loading="loading" :is-outlined="outlined" :is-rounded="rounded"
		              :is-static="isStatic" :label="text" :size="size" :state="state" />
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Colour">
				<v-bulma-form-control>
					<v-bulma-select v-model="colour" :options="getBulmaButtonColours()" />
				</v-bulma-form-control>
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Size">
				<v-bulma-form-control>
					<v-bulma-select v-model="size" :options="getBulmaSizes()" />
				</v-bulma-form-control>
			</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Text">
		<v-bulma-form-control>
			<v-bulma-input v-model="text" />
		</v-bulma-form-control>
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="State">
		<v-bulma-select v-model="state" :options="getBulmaStates()" />
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Inverted">
		<v-bulma-form-control>
			<input v-model="inverted" type="checkbox" />
		</v-bulma-form-control>
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Light">
		<v-bulma-form-control>
			<input v-model="light" type="checkbox" />
		</v-bulma-form-control>
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Loading">
		<v-bulma-form-control>
			<input v-model="loading" type="checkbox" />
		</v-bulma-form-control>
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Outlined">
		<v-bulma-form-control>
			<input v-model="outlined" type="checkbox" />
		</v-bulma-form-control>
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Rounded">
		<v-bulma-form-control>
			<input v-model="rounded" type="checkbox" />
		</v-bulma-form-control>
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Static">
		<v-bulma-form-control>
			<input v-model="isStatic" type="checkbox" />
		</v-bulma-form-control>
	</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Fullwidth">
				<v-bulma-form-control>
					<input v-model="fullwidth" type="checkbox" />
				</v-bulma-form-control>
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Responsive">
				<v-bulma-form-control>
					<input v-model="respons" type="checkbox" />
				</v-bulma-form-control>
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>


<script lang="ts" setup>

	import {ref} from "vue";
	import {BulmaColour, BulmaSize, BulmaState, getBulmaSizes, getBulmaStates} from "../../types";
	import {getBulmaButtonColours} from "../../types/ButtonTypes";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const colour = ref<BulmaColour>("warning");
	const size = ref<BulmaSize>("medium");
	const text = ref<string>("Button");
	const inverted = ref<boolean>(false);
	const light = ref<boolean>(false);
	const loading = ref<boolean>(false);
	const outlined = ref<boolean>(false);
	const rounded = ref<boolean>(false);
	const isStatic = ref<boolean>(false);
	const fullwidth = ref<boolean>(false);
	const state = ref<BulmaState>("default");
	const respons = ref<boolean>(false);
</script>

