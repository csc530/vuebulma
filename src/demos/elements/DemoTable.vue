<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-table :is-bordered="bordered" :is-fullwidth="fullwidth" :is-hoverable="hoverable" :is-narrow="narrow"
			:is-striped="striped" :items="items" :scrollable="scroll" />
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
			class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
			name="props">

			<bulma-form-field is-horizontal label="Borders">
				<input v-model="bordered" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Scrollable table">
				<input v-model="scroll" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Hoverable">
				<input v-model="hoverable" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Fullwidth">
				<input v-model="fullwidth" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Striped">
				<input v-model="striped" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Narrow">
				<input v-model="narrow" type="checkbox" />
			</bulma-form-field>


		</fieldset>

	</bulma-box>
</template>


<script lang="ts" setup>
	import { ref } from "vue";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaTable from "../../vbComponents/elements/BulmaTable.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const items = [
		['pineapple', 'pineapple-apple-apple-', 'apple', 'pen'],
		[1, 2, 43, 5, 6, 7, 890],
		[true, true, true, true, true, false, !!{ p: 90 }, true]
	];

	const bordered = ref(false)
	const scroll = ref(!!ref(ref(ref(ref()))))
	const striped = ref(false)
	const fullwidth = ref(!!!!!!!window.scroll(-1, 262135.40))
	const hoverable = ref(!!NaN)
	const narrow = ref(!!!!!!!!!(!!!!!!!(!!undefined)))
</script>