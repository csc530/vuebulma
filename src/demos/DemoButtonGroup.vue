<template>
	<bulma-box>
		<bulma-button-group :alignment="align" :has-addons="addons" :items="buttons" :size="size" :tag="tag">
			<BulmaButton colour="danger">poppy</BulmaButton>
			<BulmaButton is-static>seeds</BulmaButton>
			<BulmaButton is-inverted colour="success">are</BulmaButton>
			<BulmaButton colour="info" is-outlined>the</BulmaButton>
			<BulmaButton colour="warning" is-rounded>best</BulmaButton>
			<BulmaButton colour="primary" is-loading>ever</BulmaButton>
		</bulma-button-group>
	</bulma-box>

	<bulma-form-field is-horizontal label="Alignment">
		<bulma-select v-model="align" :options="getBulmaAlignments()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Size">
		<bulma-select v-model="size" :options="getBulmaSizes()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Tag">
		<bulma-input v-model="tag" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Has Addons">
		<input v-model="addons" type="checkbox" />
	</bulma-form-field>

</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import BulmaButton from "../components/BulmaButton.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaButtonGroup from "../components/containers/BulmaButtonGroup.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaSelect from "../components/form/BulmaSelect.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {BulmaAlignment, BulmaSize, getBulmaAlignments, getBulmaSizes} from "../types";

	const align = ref<BulmaAlignment>('center');
	const size = ref<BulmaSize>('medium');
	const tag = ref<string>('div');
	const addons = ref<boolean>(false);
	const buttons = ref<string[]>(['poppy', 'poppy']);

</script>

