<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-heading :size="size" :tag="tag" :type="type">{{ text }}</bulma-heading>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field is-horizontal label="Text">
				<bulma-input v-model="text" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Size">
				<bulma-input v-model="size" :max="headingSizes[headingSizes.length-1]" :min="headingSizes[0]"
				             type="number" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Type">
				<bulma-select v-model="type" :options="getBulmaHeadingTypes()" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Tag">
				<bulma-input v-model="tag" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {
		BulmaHeadingSizes,
		BulmaHeadingTypes,
		getBulmaHeadingSizes,
		getBulmaHeadingTypes
	} from "../../types/HeadingTypes";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const text = ref<string>("Hello World");
	const size = ref<BulmaHeadingSizes>(1);
	const tag = ref<string>("p");
	const type = ref<BulmaHeadingTypes>("title");

	const headingSizes = getBulmaHeadingSizes();

</script>

