<template>
	<bulma-box>
		<bulma-heading tag="h2">Menu</bulma-heading>
		<bulma-menu :menu="simple"/>
	</bulma-box>
</template>

<style scoped>

</style>

<script lang="ts" setup>
import BulmaBox from "../components/containers/BulmaBox.vue";
import BulmaHeading from "../components/BulmaHeading.vue";
import BulmaMenu from "../components/containers/BulmaMenu.vue";
import {Menu} from "../types/types";

const simple: Menu[] = [
	{label: 'General', items: ['Dashboard', 'Customers']},
	{
		label: 'Administration',
		items: ['Team Settings', 'Manage Your Team', 'Invitations', 'Cloud Storage Environment Settings', 'Authentication']
	},
	{label: 'Transactions', items: ['Payments', 'Transfers', 'Balance']}
];
</script>

