<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-form-control :is-expanded="fullwidth">
			<v-bulma-select :colour="colour" :is-fullwidth="fullwidth" :is-multiple="multiple" :is-rounded="round"
			              :options="options" :size="size" :state="state" model-value="Yukon" />
		</v-bulma-form-control>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Size">
				<v-bulma-select v-model="size" :options="getBulmaSizes()" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="State">
				<v-bulma-select v-model="state" :options="getBulmaInputStates()" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Fullwidth">
				<input v-model="fullwidth" type="checkbox" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Rounded">
				<input v-model="round" type="checkbox" />
			</v-bulma-form-field>


			<v-bulma-form-field is-horizontal label="Colour">
				<v-bulma-select v-model="colour" :options="getBulmaColours()" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Multiple" help="This will cause the page to jump">
				<v-bulma-form-control>
					<input ref="multipleCheckbox" v-model="multiple" type="checkbox" />
				</v-bulma-form-control>
				<v-bulma-form-control-group has-addons>
					<v-bulma-form-control>
						<v-bulma-button is-rounded is-static>{{ multiple }}</v-bulma-button>
					</v-bulma-form-control>
					<v-bulma-form-control>
						<v-bulma-input v-model.number="multiple" max="13" min="1" type="range" />
					</v-bulma-form-control>
					<v-bulma-form-control>
						<v-bulma-button colour="dark" is-rounded @click="multiple = $refs.multipleCheckbox.checked">Reset
						</v-bulma-button>
					</v-bulma-form-control>
				</v-bulma-form-control-group>
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
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
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormControlGroup from "../../vbComponents/form/groups/VBulmaFormControlGroup.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

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