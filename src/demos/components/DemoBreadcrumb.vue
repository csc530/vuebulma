<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-breadcrumb :alignment="alignment" :list="list" :separator="separator" :size="size" />
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<VBulmaFormField is-horizontal label="Items">
				<VBulmaFormControlGroup has-addons>
					<VBulmaFormControl is-expanded>
						<VBulmaInput v-model="input" />
					</VBulmaFormControl>
					<VBulmaFormControl>
						<VBulmaButton colour="primary" @click="list.push(input)">Add</VBulmaButton>
					</VBulmaFormControl>
					<VBulmaFormControl>
						<VBulmaButton colour="danger" @click="input?list=list.filter(x=>x!==input):list.pop()">Remove
						</VBulmaButton>
			</VBulmaFormControl>
		</VBulmaFormControlGroup>
	</VBulmaFormField>

	<VBulmaFormField is-horizontal label="Separators">
		<v-bulma-form-control is-expanded>
			<v-bulma-select is-full-width v-model="separator" :options="getBulmaBreadcrumbSeparators()" />
		</v-bulma-form-control>
	</VBulmaFormField>

	<VBulmaFormField is-horizontal label="Alignment">
		<VBulmaFormControlGroup has-addons>
			<v-bulma-form-control is-expanded>
				<v-bulma-input :max="getBulmaAlignments().length" :model-value="alignment" min="1" type="range"
				             @update:model-value="(newVal)=> alignment = getBulmaAlignments()[newVal-1]" />
			</v-bulma-form-control>
			<v-bulma-form-control>
				<VBulmaButton is-static>{{ alignment }}</VBulmaButton>
			</v-bulma-form-control>
		</VBulmaFormControlGroup>
	</VBulmaFormField>

			<VBulmaFormField is-horizontal label="Size">
				<v-bulma-form-control is-expanded>
					<v-bulma-select v-model="size" :options="getBulmaSizes()" is-full-width />
				</v-bulma-form-control>
			</VBulmaFormField>
		</fieldset>
	</v-bulma-box>
</template>

<script lang="ts" setup>
	import {ref, watch} from "vue";
	import {BulmaAlignment, BulmaSize, getBulmaAlignments, getBulmaSizes} from "../../types";
	import {BulmaBreadcrumbSeparator, getBulmaBreadcrumbSeparators} from "../../types/BreadcrumbTypes";
	import VBulmaBreadcrumb from "../../vbComponents/components/VBulmaBreadcrumb.vue";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormControlGroup from "../../vbComponents/form/groups/VBulmaFormControlGroup.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const list = ref(window.location.pathname.split('/').filter(x => x));
	const input = ref('');
	const separator = ref<BulmaBreadcrumbSeparator>('succeeds');
	const alignment = ref<BulmaAlignment>('left');
	const size = ref<BulmaSize>('default');

	watch(list, (newVal) => {
		window.history.pushState({}, '', newVal.join('/'));
	});
</script>

