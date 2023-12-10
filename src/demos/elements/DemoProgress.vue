<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-progressbar :colour="colour" :max="max" :size="size" :value="val" />
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse">

			<v-bulma-form-field is-horizontal label="Colour">
				<v-bulma-select v-model="colour" :options="getBulmaColours()" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Colour">
				<v-bulma-select v-model="size" :options="getBulmaSizes()" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Value">
				<v-bulma-input v-model="val" type="number" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Max value">
				<v-bulma-input v-model="max" type="number" />
			</v-bulma-form-field>


		</fieldset>
	</v-bulma-box>

</template>

<script lang="ts" setup>

	import {ref} from "vue";
	import {BulmaColour, BulmaSize, getBulmaColours, getBulmaSizes} from "../../types";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaProgressbar from "../../vbComponents/elements/VBulmaProgressbar.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const colour = ref<BulmaColour>('default');
	const max = ref<number>(100);
	const val = ref<number>(-0);
	const size = ref<BulmaSize>('default');

</script>