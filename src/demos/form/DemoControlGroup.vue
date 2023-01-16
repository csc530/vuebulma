<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">

		<bulma-box>
			<bulma-form-control-group :has-addons="addons" :alignment="alignment" :isMultiline="multiline">
				<bulma-form-control>
					<bulma-button colour="danger" is-static>Name</bulma-button>
				</bulma-form-control>
				<bulma-form-control>
					<bulma-input placeholder="Text input" />
				</bulma-form-control>
				<bulma-form-control>
					<bulma-button>Submit</bulma-button>
				</bulma-form-control>

		</bulma-form-control-group>
	</bulma-box>
	<bulma-box>
		<bulma-form-control-group :has-addons="addons" :alignment="alignment" :isMultiline="multiline">

			<bulma-form-control>
				<bulma-button colour="danger">Fire burns</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="warning">Water puts it out</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="success">Fire extinguisher</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-select>
					<option>earth</option>
					<option>air</option>
					<option>fire</option>
					<option>water</option>
				</bulma-select>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="info">Fireman</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="primary">Police</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="link">Brap-BRap-BBRRAAHH</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-file-input label="Special" file-name="File.X" colour="dark" is-boxed is-fullwidth />
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="dark">Lights out</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="light">Lights on</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="white">White out</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="black">Black out</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-input type="date" />
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button is-static colour="ghost" is-rounded>Begginnings hsve no end</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="text" is-rounded>Ends never start</bulma-button>
			</bulma-form-control>
		</bulma-form-control-group>
	</bulma-box>
	</bulma-box>
	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field is-horizontal label="Addons">
				<input v-model="addons" type="checkbox" />
			</bulma-form-field>

			<BulmaFormField is-horizontal label="Alignment">
				<BulmaFormControlGroup has-addons>
					<bulma-form-control is-expanded>
						<bulma-input :max="getBulmaAlignments().length" :model-value="alignment" min="1" type="range"
						             @update:model-value="(newVal)=> alignment = getBulmaAlignments()[newVal-1]" />
					</bulma-form-control>
					<bulma-form-control>
						<BulmaButton is-static>{{ alignment }}</BulmaButton>
					</bulma-form-control>
				</BulmaFormControlGroup>
			</BulmaFormField>

			<bulma-form-field is-horizontal label="Multiline">
				<input v-model="multiline" type="checkbox" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>

<script setup lang="ts">

	import {ref} from "vue";
	import {BulmaAlignment, getBulmaAlignments} from "../../types";
	import BulmaBox from "../../vuebulma components/elements/BulmaBox.vue";
	import BulmaButton from "../../vuebulma components/elements/BulmaButton.vue";
	import BulmaHeading from "../../vuebulma components/elements/BulmaHeading.vue";
	import BulmaFileInput from "../../vuebulma components/form/BulmaFileInput.vue";
	import BulmaInput from "../../vuebulma components/form/BulmaInput.vue";
	import BulmaSelect from "../../vuebulma components/form/BulmaSelect.vue";
	import BulmaFormControl from "../../vuebulma components/form/groups/BulmaFormControl.vue";
	import BulmaFormControlGroup from "../../vuebulma components/form/groups/BulmaFormControlGroup.vue";
	import BulmaFormField from "../../vuebulma components/form/groups/BulmaFormField.vue";

	const addons = ref<boolean>(false);
	const alignment = ref<BulmaAlignment>("center");
	const multiline = ref<boolean>(false);
</script>