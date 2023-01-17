<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-menu :menu="menu" :tag="menuTag" :labelTag="menuLabelTag" />

	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field is-horizontal label="Menu tag">
				<bulma-input v-model="menuTag" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Menu item tag">
				<bulma-input v-model="menuLabelTag" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaMenu as bm} from "../../types";
	import BulmaMenu from "../../vbComponents/components/BulmaMenu.vue";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

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

