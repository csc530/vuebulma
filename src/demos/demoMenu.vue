<template>
	<bulma-box>
		<bulma-heading tag="h2">Menu</bulma-heading>
		<bulma-menu :menu="nested">
			<template #default="{data}">
				<a href="#">{{ data }}</a>
			</template>
		</bulma-menu>
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

// a two layer deep nested Menu[]
const nested: Menu[] = [
	{
		label: 'Veggies',
		items: ['Broccoli', 'Carrots', 'Onions',
			{
				label: 'Potatoes',
				items: ['Sweet', 'Yukon Gold', 'Red']
			}]
	},
	{
		label: 'TV-shows',
		items: [
			{
				label: 'Kids',
				items: ['Digimon',
					// * as the documentation  limits says only work up to two levels
					// {label: 'Pokémon', items: ['X & Y', 'Diamond and Pearl']},
					      'Sailor Moon']
			},
			{
				label: 'Sci-Fi',
				items: ['Star Trek', 'Star Wars', 'Battlestar Galactica']
			},
			{
				label: 'Comedy',
				items: ['The Big Bang Theory', 'Frasier', 'Friends']
			}
		]
	}
]
const simple: Menu[] = [
	{label: 'General', items: ['Dashboard', 'Customers']},
	{
		label: 'Administration',
		items: ['Team Settings', 'Manage Your Team', 'Invitations', 'Cloud Storage Environment Settings', 'Authentication']
	},
	{label: 'Transactions', items: ['Payments', 'Transfers', 'Balance']}
];
</script>

