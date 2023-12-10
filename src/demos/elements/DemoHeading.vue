<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-heading :size="size" :tag="tag" :type="type">{{ text }}</v-bulma-heading>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Text">
				<v-bulma-input v-model="text" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Size">
				<v-bulma-input v-model="size" :max="headingSizes[headingSizes.length-1]" :min="headingSizes[0]"
				             type="number" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Type">
				<v-bulma-select v-model="type" :options="getBulmaHeadingTypes()" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Tag">
				<v-bulma-input v-model="tag" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {
		BulmaHeadingSizes,
		BulmaHeadingTypes,
		getBulmaHeadingSizes,
		getBulmaHeadingTypes
	} from "../../types/HeadingTypes";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const text = ref<string>("Hello World");
	const size = ref<BulmaHeadingSizes>(1);
	const tag = ref<string>("p");
	const type = ref<BulmaHeadingTypes>("title");

	const headingSizes = getBulmaHeadingSizes();

</script>

