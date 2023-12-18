<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-button-group :alignment="align" :has-addons="addons" :items="buttons" :size="size" :tag="tag">
			<VBulmaButton colour="danger">poppy</VBulmaButton>
			<VBulmaButton is-static>seeds</VBulmaButton>
			<VBulmaButton colour="success" is-inverted>are</VBulmaButton>
			<VBulmaButton colour="info" is-outlined>the</VBulmaButton>
			<VBulmaButton colour="warning" is-rounded>best</VBulmaButton>
			<VBulmaButton colour="primary" is-loading>ever</VBulmaButton>
		</v-bulma-button-group>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Alignment">
				<v-bulma-select v-model="align" :options="BULMA_ALIGNMENTS" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Size">
				<v-bulma-select v-model="size" :options="BULMA_SIZES" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Tag">
				<v-bulma-input v-model="tag" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Has Addons">
				<input v-model="addons" type="checkbox" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaAlignment, BulmaSize, BULMA_ALIGNMENTS, BULMA_SIZES} from "../../types";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";
	import VBulmaButtonGroup from "../../vbComponents/layouts/VBulmaButtonGroup.vue";

	const align = ref<BulmaAlignment>('center');
	const size = ref<BulmaSize>('medium');
	const tag = ref<string>('div');
	const addons = ref<boolean>(false);
	const buttons = ref<string[]>(['poppy', 'poppy']);

</script>

