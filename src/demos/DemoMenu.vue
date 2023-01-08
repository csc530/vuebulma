<template>
	<bulma-box>
		<bulma-menu :menu="menu" :tag="menuTag" :labelTag="menuLabelTag" />

	</bulma-box>

	<bulma-form-field is-horizontal label="Menu tag">
		<bulma-input v-model="menuTag" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Menu item tag">
		<bulma-input v-model="menuLabelTag" />
	</bulma-form-field>

</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaMenu from "../components/containers/BulmaMenu.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {Menu} from "../types";

	const menu = ref<Menu>([
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

