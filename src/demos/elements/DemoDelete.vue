<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<BulmaDelete :size="size" />
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field is-horizontal label="size">
				<bulma-select v-model="size" :options="getBulmaSizes()" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>

</template>

<script lang="ts" setup>

	import {ref} from "vue";
	import {BulmaSize, getBulmaSizes} from "../../types";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaDelete from "../../vbComponents/elements/BulmaDelete.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const size = ref<BulmaSize>('default');
</script>