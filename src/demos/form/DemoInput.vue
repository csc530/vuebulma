<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-heading>Value: <code v-if="modelValue">{{ modelValue }}</code></v-bulma-heading>
		<v-bulma-input v-model="modelValue" :colour="colour" :is-loading="isLoading" :state="state" :is-static="isStatic"
		             :size="size" :type="type" />
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Type">
				<v-bulma-select v-model="type">
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
		</v-bulma-select>
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Colour">
		<v-bulma-select v-model="colour" :options="getBulmaColours()" />
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Size">
		<v-bulma-select v-model="size" :options="BULMA_SIZES" />
	</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Static">
				<input v-model="isStatic" type="checkbox" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="State">
				<v-bulma-select v-model="state" :options="getBulmaStates()" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaColour, BulmaSize, BulmaState, getBulmaColours, BULMA_SIZES, getBulmaStates} from "../../types";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const colour = ref<BulmaColour>("default");
	const size = ref<BulmaSize>("default");
	const isLoading = ref(false);
	const isStatic = ref(false);
	const modelValue = ref(null);
	const type = ref("range");
	const state = ref<BulmaState>("default");
</script>