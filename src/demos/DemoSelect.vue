<template>
	<bulma-box>
		<bulma-form-control :is-expanded="fullwidth">
			<bulma-select :colour="colour" :is-fullwidth="fullwidth" :is-multiple="multiple" :is-rounded="round"
			              :options="options" :size="size" :state="state" model-value="Yukon" />
		</bulma-form-control>
	</bulma-box>

	<bulma-form-field is-horizontal label="Size">
		<bulma-select v-model="size" :options="getBulmaSizes()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="State">
		<bulma-select v-model="state" :options="getBulmaInputStates()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Fullwidth">
		<input v-model="fullwidth" type="checkbox" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Rounded">
		<input v-model="round" type="checkbox" />
	</bulma-form-field>


	<bulma-form-field is-horizontal label="Colour">
		<bulma-select v-model="colour" :options="getBulmaColours()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Multiple">
		<input ref="multipleCheckbox" v-model="multiple" type="checkbox" />
		<bulma-form-control-group has-addons>
			<bulma-form-control>
				<bulma-button is-rounded is-static>{{ multiple }}</bulma-button>
			</bulma-form-control>
			<bulma-form-control>
				<bulma-input v-model.number="multiple" max="13" min="1" type="range" />
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="dark" is-rounded @click="multiple = $refs.multipleCheckbox.checked">Reset
				</bulma-button>
			</bulma-form-control>
		</bulma-form-control-group>
	</bulma-form-field>

</template>

<script lang="ts" setup>
	function log(val) {
		console.log(val);
	}

	import {ref} from "vue";
	import BulmaButton from "../components/BulmaButton.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaSelect from "../components/form/BulmaSelect.vue";
	import BulmaFormControl from "../components/form/groups/BulmaFormControl.vue";
	import BulmaFormControlGroup from "../components/form/groups/BulmaFormControlGroup.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";

	import {
		BulmaColour,
		BulmaInputState,
		BulmaSize,
		getBulmaColours,
		getBulmaInputStates,
		getBulmaSizes
	} from "../types";
	import {BulmaOptionGroup} from "../types/SelectTypes";

	const size = ref<BulmaSize>("medium");
	const state = ref<BulmaInputState>("loading");
	const fullwidth = ref(false);
	const round = ref(false);
	const colour = ref<BulmaColour>('default');
	const multiple = ref<boolean | number>(false);

	const options: BulmaOptionGroup[] = [
		{
			label: 'Territories',
			options: [
				{label: 'Yukon', value: 'Yukon'},
				{label: 'Northwest Territories', value: 'Northwest Territories'},
				{label: 'Nunavut', value: 'Nunavut'}
			]
		},
		{
			label: 'Provinces',
			disabled: true,
			options: ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick', 'Manitoba', 'British Columbia', 'Prince Edward Island', 'Saskatchewan', 'Alberta', 'Newfoundland and Labrador']
		}
	];


</script>