<template>

	<bulma-box tag="section">
		<bulma-heading tag="h2">Dropdown</bulma-heading>
		<bulma-dropdown :content="dropdownList" alignment="right" item-tag="a">
<!-- todo: replace with bulma button-->
			<button>Click Me!</button>
			<!--			todo: make it less clunky to button dropwdown class to parent element-->
		</bulma-dropdown>
		<BulmaDropdown :content="['we\'re','left', 'aligned', 'and','🆙']" is-dropup is-hoverable tag="p">
			<p class="button"><code>p</code> trigger</p>
		</BulmaDropdown>
		<bulma-dropdown :is-dropup="true"
		                :content="['you got a hover to see me', null, 'hey look a divider', undefined, '🤷🏿‍♂️']"
		                :on-click="false" is-hoverable>
			<p class="button">Hoverable but not clickable</p>
		</bulma-dropdown>
		.
	</bulma-box>
</template>

<style scoped>

</style>

<script lang="ts" setup>
	import BulmaHeading from "../components/BulmaHeading.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaDropdown from "../components/containers/BulmaDropdown.vue";

	const dropdownList = ['I', 'have', 'a', 'button', 'trigger', '😎'];
</script>

