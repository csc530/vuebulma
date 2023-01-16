<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-dropdown :alignment="alignment" :content="items" :is-dropup="dropup" :is-hoverable="hoverable"
		                item-tag="a">
			<bulma-button>
				<bulma-icon :colour="'info'" :text="trigger" icon="fas fa-angle-down" text-first />
			</bulma-button>
		</bulma-dropdown>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field is-horizontal label="Trigger">
				<bulma-input v-model="trigger" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Alignment">
				<bulma-select v-model="alignment" :options="getBulmaLeftRight()" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Hoverable">
				<input v-model="hoverable" type="checkbox" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Dropup">
				<input v-model="dropup" type="checkbox" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaLeftRight, getBulmaLeftRight} from "../../types";
	import BulmaDropdown from "../../vuebulma components/components/BulmaDropdown.vue";
	import BulmaBox from "../../vuebulma components/elements/BulmaBox.vue";
	import BulmaButton from "../../vuebulma components/elements/BulmaButton.vue";
	import BulmaHeading from "../../vuebulma components/elements/BulmaHeading.vue";
	import BulmaIcon from "../../vuebulma components/elements/BulmaIcon.vue";
	import BulmaInput from "../../vuebulma components/form/BulmaInput.vue";
	import BulmaSelect from "../../vuebulma components/form/BulmaSelect.vue";
	import BulmaFormField from "../../vuebulma components/form/groups/BulmaFormField.vue";

	const items = ['Banna Bread', 'Apple Pie', null, 'Apple fritter', '(Jamaican) Patty']

	const trigger = ref('Click me')
	const alignment = ref<BulmaLeftRight>('left');
	const hoverable = ref(false);
	const dropup = ref(false);
</script>