<template>
	<bulma-box>
		<bulma-heading :size="size" :tag="tag" :type="type">{{ text }}</bulma-heading>
	</bulma-box>

	<bulma-form-field is-horizontal label="Text">
		<bulma-input v-model="text" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Size">
		<bulma-input v-model="size" :max="headingSizes[headingSizes.length-1]" :min="headingSizes[0]" type="number" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Type">
		<bulma-select v-model="type" :options="getBulmaHeadingTypes()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Tag">
		<bulma-input v-model="tag" />
	</bulma-form-field>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import BulmaHeading from "../components/BulmaHeading.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaSelect from "../components/form/BulmaSelect.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {
		BulmaHeadingSizes,
		BulmaHeadingTypes,
		getBulmaHeadingSizes,
		getBulmaHeadingTypes
	} from "../types/HeadingTypes";

	const text = ref<string>("Hello World");
	const size = ref<BulmaHeadingSizes>(1);
	const tag = ref<string>("p");
	const type = ref<BulmaHeadingTypes>("title");

	const headingSizes = getBulmaHeadingSizes();

</script>

