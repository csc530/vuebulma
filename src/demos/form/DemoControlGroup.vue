<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">

		<v-bulma-box>
			<v-bulma-form-control-group :has-addons="addons" :alignment="alignment" :isMultiline="multiline">
				<v-bulma-form-control>
					<v-bulma-button colour="danger" is-static>Name</v-bulma-button>
				</v-bulma-form-control>
				<v-bulma-form-control>
					<v-bulma-input placeholder="Text input" />
				</v-bulma-form-control>
				<v-bulma-form-control>
					<v-bulma-button>Submit</v-bulma-button>
				</v-bulma-form-control>

		</v-bulma-form-control-group>
	</v-bulma-box>
	<v-bulma-box>
		<v-bulma-form-control-group :has-addons="addons" :alignment="alignment" :isMultiline="multiline">

			<v-bulma-form-control>
				<v-bulma-button colour="danger">Fire burns</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button colour="warning">Water puts it out</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button colour="success">Fire extinguisher</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-select>
					<option>earth</option>
					<option>air</option>
					<option>fire</option>
					<option>water</option>
				</v-bulma-select>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button colour="info">Fireman</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button colour="primary">Police</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button colour="link">Brap-BRap-BBRRAAHH</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-file-input label="Special" file-name="File.X" colour="dark" is-boxed is-fullwidth />
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button colour="dark">Lights out</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button colour="light">Lights on</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button colour="white">White out</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button colour="black">Black out</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-input type="date" />
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button is-static colour="ghost" is-rounded>Begginnings hsve no end</v-bulma-button>
			</v-bulma-form-control>
			<v-bulma-form-control>
				<v-bulma-button colour="text" is-rounded>Ends never start</v-bulma-button>
			</v-bulma-form-control>
		</v-bulma-form-control-group>
	</v-bulma-box>
	</v-bulma-box>
	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Addons">
				<input v-model="addons" type="checkbox" />
			</v-bulma-form-field>

			<VBulmaFormField is-horizontal label="Alignment">
				<VBulmaFormControlGroup has-addons>
					<v-bulma-form-control is-expanded>
						<v-bulma-input :max="getBulmaAlignments().length" :model-value="alignment" min="1" type="range"
						             @update:model-value="(newVal)=> alignment = getBulmaAlignments()[newVal-1]" />
					</v-bulma-form-control>
					<v-bulma-form-control>
						<VBulmaButton is-static>{{ alignment }}</VBulmaButton>
					</v-bulma-form-control>
				</VBulmaFormControlGroup>
			</VBulmaFormField>

			<v-bulma-form-field is-horizontal label="Multiline">
				<input v-model="multiline" type="checkbox" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>

<script setup lang="ts">
	import {ref} from "vue";
	import {BulmaAlignment, getBulmaAlignments} from "../../types";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaFileInput from "../../vbComponents/form/VBulmaFileInput.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormControlGroup from "../../vbComponents/form/groups/VBulmaFormControlGroup.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const addons = ref<boolean>(false);
	const alignment = ref<BulmaAlignment>("center");
	const multiline = ref<boolean>(false);
</script>