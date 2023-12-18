<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-box>
			<v-bulma-form-field :help="help" :is-horizontal="horz" :label="label" :label-size="size">
				<v-bulma-form-control>
					<v-bulma-input />
				</v-bulma-form-control>
			</v-bulma-form-field>
		</v-bulma-box>
		<v-bulma-box>
			<v-bulma-form-field :help="help" :is-horizontal="horz" :label="label"
			                  :label-size="size">
				<VBulmaFormControl>
				<VBulmaInput size="large " type="date" />
			</VBulmaFormControl>
		</v-bulma-form-field>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-form-field :help="help" :is-horizontal="horz" :label="label"
		                  :label-size="size">
			<VBulmaFormControlGroup is-multiline>
				<VBulmaFormControl>
					<v-bulma-button disabled>Hyper Date</v-bulma-button>
				</VBulmaFormControl>
				<VBulmaFormControl>
					<VBulmaInput type="date" />
				</VBulmaFormControl>
				<VBulmaFormControl>
					<VBulmaSelect model-value="Assassin">
						<option>Assassin</option>
						<option>Warrior</option>
						<option>Wizard</option>
						<option>Healer</option>
						<option>Thief</option>
						<option>Hero</option>
						<option>Plasma</option>
					</VBulmaSelect>
				</VBulmaFormControl>
				<v-bulma-form-control>
					<v-bulma-button colour="danger">Disintegrate</v-bulma-button>
				</v-bulma-form-control>
				<VBulmaFormControl>
					<v-bulma-button colour="link">Proliferate</v-bulma-button>
				</VBulmaFormControl>
				<v-bulma-form-control>
					<v-bulma-button colour="info">Infiltrate</v-bulma-button>
				</v-bulma-form-control>
				<VBulmaFormControl>
					<v-bulma-button colour="warning">Succumb</v-bulma-button>
				</VBulmaFormControl>
				<VBulmaFormControl>
					<v-bulma-button colour="ghost">Succeed</v-bulma-button>
				</VBulmaFormControl>
				<VBulmaFormControl>
					<v-bulma-button colour="success">Create</v-bulma-button>
				</VBulmaFormControl>
			</VBulmaFormControlGroup>
		</v-bulma-form-field>
	</v-bulma-box>
	<v-bulma-box>
		<v-bulma-form-field :help="help" :is-horizontal="horz"
		                  :label-size="size">
			<v-bulma-form-control-group has-addons>
				<v-bulma-form-control>
					<v-bulma-select>
						<option>Epic</option>
						<option>Legendary</option>
						<option>Rare</option>
						<option selected>Uncommon</option>
						<option>Common</option>
					</v-bulma-select>
				</v-bulma-form-control>
				<v-bulma-form-control>
					<v-bulma-input type="number" />
				</v-bulma-form-control>
				<v-bulma-form-control>
					<v-bulma-button>Search</v-bulma-button>
				</v-bulma-form-control>
			</v-bulma-form-control-group>
		</v-bulma-form-field>
	</v-bulma-box>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Help text">
				<v-bulma-input v-model="help" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Label">
				<v-bulma-input v-model="label" />
			</v-bulma-form-field>


			<v-bulma-form-field is-horizontal label="Label Size">
				<v-bulma-select v-model="size" :options="BULMA_SIZES" />
			</v-bulma-form-field>
			<v-bulma-form-field is-horizontal label="Horizontal">
				<input v-model="horz" type="checkbox" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaSize, BULMA_SIZES} from "../../types";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormControlGroup from "../../vbComponents/form/groups/VBulmaFormControlGroup.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const help = ref("Help text");
	const label = ref("Label");
	const size = ref<BulmaSize>("medium");
	const horz = ref(false);

</script>