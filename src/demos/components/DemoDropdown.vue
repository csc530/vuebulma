<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-dropdown :alignment="alignment" :content="items" :is-dropup="dropup" :is-hoverable="hoverable"
		                  item-tag="a">
			<v-bulma-button>
				<v-bulma-icon :colour="'info'" :text="trigger" icon="fas fa-angle-down" text-first />
			</v-bulma-button>
		</v-bulma-dropdown>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<v-bulma-form-field is-horizontal label="Trigger">
			<v-bulma-input v-model="trigger" />
		</v-bulma-form-field>

		<v-bulma-form-field is-horizontal label="Alignment">
			<v-bulma-select v-model="alignment" :options="getBulmaLeftRight()" />
		</v-bulma-form-field>

		<v-bulma-form-field is-horizontal label="Hoverable">
			<input v-model="hoverable" type="checkbox" />
		</v-bulma-form-field>

		<v-bulma-form-field is-horizontal label="Dropup">
			<input v-model="dropup" type="checkbox" />
		</v-bulma-form-field>
	</v-bulma-box>
</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaLeftRight, getBulmaLeftRight} from "../../types";
	import VBulmaDropdown from "../../vbComponents/components/VBulmaDropdown.vue";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaIcon from "../../vbComponents/elements/VBulmaIcon.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const items = ["Banana Bread", "Apple Pie", undefined, "Apple fritter", "(Jamaican) Patty"];

	const trigger = ref("Click me");
	const alignment = ref<BulmaLeftRight>("left");
	const hoverable = ref(false);
	const dropup = ref(false);
</script>