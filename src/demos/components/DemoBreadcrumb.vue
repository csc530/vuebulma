<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-breadcrumb :alignment="alignment" :list="list" :separator="separator" :size="size" />
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<BulmaFormField is-horizontal label="Items">
				<BulmaFormControlGroup has-addons>
					<BulmaFormControl is-expanded>
						<BulmaInput v-model="input" />
					</BulmaFormControl>
					<BulmaFormControl>
						<BulmaButton colour="primary" @click="list.push(input)">Add</BulmaButton>
					</BulmaFormControl>
					<BulmaFormControl>
						<BulmaButton colour="danger" @click="input?list=list.filter(x=>x!==input):list.pop()">Remove
						</BulmaButton>
			</BulmaFormControl>
		</BulmaFormControlGroup>
	</BulmaFormField>

	<BulmaFormField is-horizontal label="Separators">
		<bulma-form-control is-expanded>
			<bulma-select is-full-width v-model="separator" :options="getBulmaBreadcrumbSeparators()" />
		</bulma-form-control>
	</BulmaFormField>

	<BulmaFormField is-horizontal label="Alignment">
		<BulmaFormControlGroup has-addons>
			<bulma-form-control is-expanded>
				<bulma-input :max="getBulmaAlignments().length" :model-value="alignment" min="1" type="range"
				             @update:model-value="(newVal)=> alignment = getBulmaAlignments()[newVal-1]" />
			</bulma-form-control>
			<bulma-form-control>
				<BulmaButton is-static>{{ alignment }}</BulmaButton>
			</bulma-form-control>
		</BulmaFormControlGroup>
	</BulmaFormField>

			<BulmaFormField is-horizontal label="Size">
				<bulma-form-control is-expanded>
					<bulma-select v-model="size" :options="getBulmaSizes()" is-full-width />
				</bulma-form-control>
			</BulmaFormField>
		</fieldset>
	</bulma-box>
</template>

<script lang="ts" setup>
	import {ref, watch} from "vue";
	import {BulmaAlignment, BulmaSize, getBulmaAlignments, getBulmaSizes} from "../../types";
	import {BulmaBreadcrumbSeparator, getBulmaBreadcrumbSeparators} from "../../types/BreadcrumbTypes";
	import BulmaBreadcrumb from "../../vbComponents/components/BulmaBreadcrumb.vue";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaButton from "../../vbComponents/elements/BulmaButton.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormControl from "../../vbComponents/form/groups/BulmaFormControl.vue";
	import BulmaFormControlGroup from "../../vbComponents/form/groups/BulmaFormControlGroup.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const list = ref(window.location.pathname.split('/').filter(x => x));
	const input = ref('');
	const separator = ref<BulmaBreadcrumbSeparator>('succeeds');
	const alignment = ref<BulmaAlignment>('left');
	const size = ref<BulmaSize>('default');

	watch(list, (newVal) => {
		window.history.pushState({}, '', newVal.join('/'));
	});
</script>

