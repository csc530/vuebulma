<template>
	<bulma-box>
		<bulma-text-area v-model="text" :colour="colour" :has-fixed-size="fixed" :size="size" :state="state" />
	</bulma-box>

	<bulma-form-field is-horizontal label="Colour">
		<bulma-select v-model="colour" :options="getBulmaColours()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Size">
		<bulma-select v-model="size" :options="getBulmaSizes()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="State">
		<bulma-select v-model="state" :options="getBulmaStates()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Fixed Size">
		<input v-model="fixed" type="checkbox" />
	</bulma-form-field>

</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaColour, BulmaSize, BulmaState, getBulmaColours, getBulmaSizes, getBulmaStates} from "../../types";

	import BulmaBox from "../../vuebulma components/elements/BulmaBox.vue";
	import BulmaSelect from "../../vuebulma components/form/BulmaSelect.vue";
	import BulmaTextArea from "../../vuebulma components/form/BulmaTextArea.vue";
	import BulmaFormField from "../../vuebulma components/form/groups/BulmaFormField.vue";

	const text = ref("Hello World");
	const colour = ref<BulmaColour>();
	const size = ref<BulmaSize>();
	const state = ref<BulmaState>();
	const fixed = ref(false);
</script>

