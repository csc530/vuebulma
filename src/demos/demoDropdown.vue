<template>

	<bulma-box tag="section">
		<bulma-heading tag="h2">Dropdown</bulma-heading>
		<bulma-dropdown :content="dropdownList" alignment="right" item-tag="a">
			<button>Click Me!</button>
			<!--			todo: make it less clunky to button dropwdown class to parent element-->
			<template v-slot:dropdown-item="value">
				{{ value.data }}
			</template>
		</bulma-dropdown>
		<BulmaDropdown :content="['we\'re','left', 'aligned', 'and','🆙']" isdropUp is-hoverable tag="p">
			<p class="button"><code>p</code> trigger</p>
		</BulmaDropdown>
		<bulma-dropdown :content="['you got a hover to see me', null, 'hey look a divider', undefined, '🤷🏿‍♂️']"
		                :on-click="false" is-hoverable>
			<p class="button">Hoverable but not clickable</p>
		</bulma-dropdown>
		.
	</bulma-box>
</template>

<style scoped>

</style>

<script lang="ts" setup>
import BulmaBox from "../components/containers/BulmaBox.vue";
import BulmaDropdown from "../components/containers/BulmaDropdown.vue";
import BulmaHeading from "../components/BulmaHeading.vue";

const dropdownList = ['I', 'have', 'a', 'button', 'trigger', '😎'];
</script>

