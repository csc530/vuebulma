<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-form-control :is-expanded="fullwidth">
			<bulma-select :colour="colour" :is-fullwidth="fullwidth" :is-multiple="multiple" :is-rounded="round"
			              :options="options" :size="size" :state="state" model-value="Yukon" />
		</bulma-form-control>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
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

			<bulma-form-field is-horizontal label="Multiple" help="This will cause the page to jump">
				<bulma-form-control>
					<input ref="multipleCheckbox" v-model="multiple" type="checkbox" />
				</bulma-form-control>
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
		</fieldset>
	</bulma-box>
</template>

<script lang="ts" setup>
	import {ref} from "vue";

	import {
		BulmaColour,
		BulmaInputState,
		BulmaSize,
		getBulmaColours,
		getBulmaInputStates,
		getBulmaSizes
	} from "../../types";
	import {BulmaOptionGroup} from "../../types/SelectTypes";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaButton from "../../vbComponents/elements/BulmaButton.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormControl from "../../vbComponents/form/groups/BulmaFormControl.vue";
	import BulmaFormControlGroup from "../../vbComponents/form/groups/BulmaFormControlGroup.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const size = ref<BulmaSize>("default");
	const state = ref<BulmaInputState>("default");
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