<template>
	<bulma-box>
		<bulma-button :colour="colour" :is-full-width="fullwidth" :is-inverted="inverted" :is-light="light"
		              :is-loading="loading"
		              :is-outlined="outlined" :is-rounded="rounded" :is-static="isStatic" :label="text"
		              :size="size" :state="state" is-responsive />
	</bulma-box>

	<bulma-form-field is-horizontal label="Colour">
		<bulma-form-control>
			<bulma-select v-model="colour" :options="getBulmaButtonColours()" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Size">
		<bulma-form-control>
			<bulma-select v-model="size" :options="getBulmaSizes()" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Text">
		<bulma-form-control>
			<bulma-input v-model="text" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="State">
		<bulma-select v-model="state" :options="getBulmaStates()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Inverted">
		<bulma-form-control>
			<input v-model="inverted" type="checkbox" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Light">
		<bulma-form-control>
			<input v-model="light" type="checkbox" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Loading">
		<bulma-form-control>
			<input v-model="loading" type="checkbox" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Outlined">
		<bulma-form-control>
			<input v-model="outlined" type="checkbox" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Rounded">
		<bulma-form-control>
			<input v-model="rounded" type="checkbox" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Static">
		<bulma-form-control>
			<input v-model="isStatic" type="checkbox" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Fullwidth">
		<bulma-form-control>
			<input v-model="fullwidth" type="checkbox" />
		</bulma-form-control>
	</bulma-form-field>

</template>


<script lang="ts" setup>

	import {ref} from "vue";
	import BulmaButton from "../components/BulmaButton.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaSelect from "../components/form/BulmaSelect.vue";
	import BulmaFormControl from "../components/form/groups/BulmaFormControl.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {BulmaColour, BulmaSize, BulmaState, getBulmaSizes, getBulmaStates} from "../types";
	import {getBulmaButtonColours} from "../types/ButtonTypes";

	const colour = ref<BulmaColour>("primary");
	const size = ref<BulmaSize>("medium");
	const text = ref<string>("Button");
	const inverted = ref<boolean>(false);
	const light = ref<boolean>(false);
	const loading = ref<boolean>(false);
	const outlined = ref<boolean>(false);
	const rounded = ref<boolean>(false);
	const isStatic = ref<boolean>(false);
	const fullwidth = ref<boolean>(false);
	const state = ref<BulmaState>("default");
</script>

