<template>
	<bulma-box>
		<bulma-message @close-msg.prevent="test" :colour="colour" :delete-btn="deleteBtn" :size="size" :title="heading">
			{{ body }}
		</bulma-message>
	</bulma-box>

	<bulma-form-field is-horizontal label="Heading">
		<bulma-form-control>
			<bulma-input v-model="heading" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Body">
		<bulma-form-control>
			<bulma-text-area v-model="body" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Colour">
		<bulma-form-control>
			<bulma-select v-model="colour" :options="getBulmaColours()" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Delete Button">
		<bulma-form-control>
			<input v-model="deleteBtn" type="checkbox" />
		</bulma-form-control>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Size">
		<bulma-form-control>
			<bulma-select v-model="size" :options="getBulmaSizes()" />
		</bulma-form-control>
	</bulma-form-field>

</template>
<script lang="ts" setup>
	import {ref} from "vue";
	import BulmaMessage from "../components/BulmaMessage.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaSelect from "../components/form/BulmaSelect.vue";
	import BulmaTextArea from "../components/form/BulmaTextArea.vue";
	import BulmaFormControl from "../components/form/groups/BulmaFormControl.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {BulmaColour, BulmaSize, getBulmaColours, getBulmaSizes} from "../types";

	const colour = ref<BulmaColour>('primary');
	const heading = ref('Hello World');
	const body = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit');
	const deleteBtn = ref(true);
	const size = ref<BulmaSize>('medium');

	const test = () => {
		console.log('test');
	}
</script>

