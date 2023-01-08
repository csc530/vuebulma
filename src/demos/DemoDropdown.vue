<template>
	<bulma-box>
		<bulma-dropdown :alignment="alignment" :content="items" :is-dropup="dropup" :is-hoverable="hoverable"
		                item-tag="a">
			<bulma-button>
				<bulma-icon :colour="'info'" :text="trigger" icon="fas fa-angle-down" text-first />
			</bulma-button>
		</bulma-dropdown>
	</bulma-box>

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


</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import BulmaButton from "../components/BulmaButton.vue";
	import BulmaIcon from "../components/BulmaIcon.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaDropdown from "../components/containers/BulmaDropdown.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaSelect from "../components/form/BulmaSelect.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {BulmaLeftRight, getBulmaLeftRight} from "../types";

	const items = ['Banna Bread', 'Apple Pie', null, 'Apple fritter', '(Jamaican) Patty']

	const trigger = ref('Click me')
	const alignment = ref<BulmaLeftRight>('left');
	const hoverable = ref(false);
	const dropup = ref(false);

</script>

