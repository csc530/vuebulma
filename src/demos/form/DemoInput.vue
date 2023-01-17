<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-heading>Value: <code v-if="modelValue">{{ modelValue }}</code></bulma-heading>
		<bulma-input v-model="modelValue" :colour="colour" :is-loading="isLoading" :state="state" :is-static="isStatic"
		             :size="size" :type="type" />
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field is-horizontal label="Type">
				<bulma-select v-model="type">
					<optgroup label="Textlike">
						<option value="text">Text</option>
						<option value="number">Number</option>
						<option value="password">Password</option>
						<option value="email">Email</option>
						<option value="tel">Telephone</option>
						<option value="url">URL</option>
						<option value="search">Search</option>
					</optgroup>
			<option value="date">Date</option>
			<option value="time">Time</option>
			<option value="datetime-local">Date Time Local</option>
			<option value="month">Month</option>
			<option value="week">Week</option>
			<option value="color">Colour</option>
			<option value="range">Range</option>
		</bulma-select>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Colour">
		<bulma-select v-model="colour" :options="getBulmaColours()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Size">
		<bulma-select v-model="size" :options="getBulmaSizes()" />
	</bulma-form-field>

			<bulma-form-field is-horizontal label="Static">
				<input v-model="isStatic" type="checkbox" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="State">
				<bulma-select v-model="state" :options="getBulmaStates()" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaColour, BulmaSize, BulmaState, getBulmaColours, getBulmaSizes, getBulmaStates} from "../../types";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const colour = ref<BulmaColour>("default");
	const size = ref<BulmaSize>("default");
	const isLoading = ref(false);
	const isStatic = ref(false);
	const modelValue = ref(null);
	const type = ref("range");
	const state = ref<BulmaState>("default");
</script>