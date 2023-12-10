<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-menu :menu="menu" :tag="menuTag" :labelTag="menuLabelTag" />

	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Menu tag">
				<v-bulma-input v-model="menuTag" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Menu item tag">
				<v-bulma-input v-model="menuLabelTag" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaMenu as bm} from "../../types";
	import VBulmaMenu from "../../vbComponents/components/VBulmaMenu.vue";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const menu = ref<bm>([
		{label: 'General', items: ['Dashboard', 'Customers']},
		{
			label: 'Administration',
			items: ['Team Settings', 'Manage Your Team', 'Invitations', 'Cloud Storage Environment Settings', 'Authentication']
		},
		{
			label: 'Transactions',
			items: [
				{
					label: 'Payments',
					items: ['Outgoing', 'Pending']
				},
				'Transfers',
				'Balance'
			]
		}
	]);
	const menuTag = ref('aside');
	const menuLabelTag = ref('p');
</script>

