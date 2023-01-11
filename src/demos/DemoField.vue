<template>
	<bulma-box>
		<bulma-form-field :help="help" :is-horizontal="horz" :label="label" :label-size="size">
			<bulma-form-control>
				<bulma-input />
			</bulma-form-control>
		</bulma-form-field>
	</bulma-box>
	<bulma-box>
		<bulma-form-field :help="help" :is-horizontal="horz" :label="label"
		                  :label-size="size">
			<BulmaFormControl>
				<BulmaInput size="large " type="date" />
			</BulmaFormControl>
		</bulma-form-field>
	</bulma-box>

	<bulma-box>
		<bulma-form-field :help="help" :is-horizontal="horz" :label="label"
		                  :label-size="size">
			<BulmaFormControlGroup is-multiline>
				<BulmaFormControl>
					<bulma-button disabled>Hyper Date</bulma-button>
				</BulmaFormControl>
				<BulmaFormControl>
					<BulmaInput type="date" />
				</BulmaFormControl>
				<BulmaFormControl>
					<BulmaSelect model-value="Assassin">
						<option>Assassin</option>
						<option>Warrior</option>
						<option>Wizard</option>
						<option>Healer</option>
						<option>Thief</option>
						<option>Hero</option>
						<option>Plasma</option>
					</BulmaSelect>
				</BulmaFormControl>
				<bulma-form-control>
					<bulma-button colour="danger">Disintegrate</bulma-button>
				</bulma-form-control>
				<BulmaFormControl>
					<bulma-button colour="link">Proliferate</bulma-button>
				</BulmaFormControl>
				<bulma-form-control>
					<bulma-button colour="info">Infiltrate</bulma-button>
				</bulma-form-control>
				<BulmaFormControl>
					<bulma-button colour="warning">Succumb</bulma-button>
				</BulmaFormControl>
				<BulmaFormControl>
					<bulma-button colour="ghost">Succeed</bulma-button>
				</BulmaFormControl>
				<BulmaFormControl>
					<bulma-button colour="success">Create</bulma-button>
				</BulmaFormControl>
			</BulmaFormControlGroup>
		</bulma-form-field>
	</bulma-box>
	<bulma-box>
		<bulma-form-field :help="help" :is-horizontal="horz"
		                  :label-size="size">
			<bulma-form-control-group has-addons>
				<bulma-form-control>
					<bulma-select>
						<option>Epic</option>
						<option>Legendary</option>
						<option>Rare</option>
						<option selected>Uncommon</option>
						<option>Common</option>
					</bulma-select>
				</bulma-form-control>
				<bulma-form-control>
					<bulma-input type="number" />
				</bulma-form-control>
				<bulma-form-control>
					<bulma-button>Search</bulma-button>
				</bulma-form-control>
			</bulma-form-control-group>
		</bulma-form-field>
	</bulma-box>


	<bulma-form-field is-horizontal label="Help text">
		<bulma-input v-model="help" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Label">
		<bulma-input v-model="label" />
	</bulma-form-field>


	<bulma-form-field is-horizontal label="Size">
		<bulma-select v-model="size" :options="getBulmaSizes()" />
	</bulma-form-field>
	<bulma-form-field is-horizontal label="Horizontal">
		<input v-model="horz" type="checkbox" />
	</bulma-form-field>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import BulmaButton from "../components/BulmaButton.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaSelect from "../components/form/BulmaSelect.vue";
	import BulmaFormControl from "../components/form/groups/BulmaFormControl.vue";
	import BulmaFormControlGroup from "../components/form/groups/BulmaFormControlGroup.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {BulmaSize, getBulmaSizes} from "../types";

	const help = ref("Help text");
	const label = ref("Label");
	const size = ref<BulmaSize>("medium");
	const horz = ref(false);

</script>