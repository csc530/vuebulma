<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<VBulmaDelete :size="size" />
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="size">
				<v-bulma-select v-model="size" :options="BULMA_SIZES" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>

</template>

<script lang="ts" setup>

	import {ref} from "vue";
	import {BulmaSize, BULMA_SIZES} from "../../types";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaDelete from "../../vbComponents/elements/VBulmaDelete.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const size = ref<BulmaSize>('default');
</script>