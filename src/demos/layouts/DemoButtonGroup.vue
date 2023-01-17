<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-button-group :alignment="align" :has-addons="addons" :items="buttons" :size="size" :tag="tag">
			<BulmaButton colour="danger">poppy</BulmaButton>
			<BulmaButton is-static>seeds</BulmaButton>
			<BulmaButton colour="success" is-inverted>are</BulmaButton>
			<BulmaButton colour="info" is-outlined>the</BulmaButton>
			<BulmaButton colour="warning" is-rounded>best</BulmaButton>
			<BulmaButton colour="primary" is-loading>ever</BulmaButton>
		</bulma-button-group>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
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
		</fieldset>
	</bulma-box>
</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaAlignment, BulmaSize, getBulmaAlignments, getBulmaSizes} from "../../types";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaButton from "../../vbComponents/elements/BulmaButton.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";
	import BulmaButtonGroup from "../../vbComponents/layouts/BulmaButtonGroup.vue";

	const align = ref<BulmaAlignment>('center');
	const size = ref<BulmaSize>('medium');
	const tag = ref<string>('div');
	const addons = ref<boolean>(false);
	const buttons = ref<string[]>(['poppy', 'poppy']);

</script>

