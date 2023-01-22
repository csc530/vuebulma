<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-progressbar :colour="colour" :max="max" :size="size" :value="val" />
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse">

			<bulma-form-field is-horizontal label="Colour">
				<bulma-select v-model="colour" :options="getBulmaColours()" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Colour">
				<bulma-select v-model="size" :options="getBulmaSizes()" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Value">
				<bulma-input v-model="val" type="number" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Max value">
				<bulma-input v-model="max" type="number" />
			</bulma-form-field>


		</fieldset>
	</bulma-box>

</template>

<script lang="ts" setup>

	import {ref} from "vue";
	import {BulmaColour, BulmaSize, getBulmaColours, getBulmaSizes} from "../../types";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaProgressbar from "../../vbComponents/elements/BulmaProgressbar.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const colour = ref<BulmaColour>('default');
	const max = ref<number>(100);
	const val = ref<number>(-0);
	const size = ref<BulmaSize>('default');

</script>