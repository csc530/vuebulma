<template>
	<BulmaBox>
		<bulma-breadcrumb :alignment="alignment" :list="list" :separator="separator" :size="size" />
	</BulmaBox>

	<BulmaFormField is-horizontal label="Items">
		<BulmaFormControlGroup has-addons>
			<BulmaFormControl>
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
			<bulma-select v-model="separator" :options="getBulmaBreadcrumbSeparators()" />
		</bulma-form-control>
	</BulmaFormField>

	<BulmaFormField is-horizontal label="Alignment">
		<BulmaFormControlGroup has-addons>
			<bulma-form-control is-expanded>
				<bulma-input :max="getBulmaAlignments().length" min="1" type="range" :model-value="alignment"
				             @update:model-value="(newVal)=> alignment = getBulmaAlignments()[newVal-1]" />
			</bulma-form-control>
			<bulma-form-control>
				<BulmaButton is-static>{{ alignment }}</BulmaButton>
			</bulma-form-control>
		</BulmaFormControlGroup>
	</BulmaFormField>

	<BulmaFormField is-horizontal label="Size">
		<bulma-form-control is-expanded>
			<bulma-select is-full-width v-model="size" :options="getBulmaSizes()" />
		</bulma-form-control>
	</BulmaFormField>
</template>

<script lang="ts" setup>
	import {ref, watch} from "vue";
	import BulmaBreadcrumb from "../components/BulmaBreadcrumb.vue";
	import BulmaButton from "../components/button/BulmaButton.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaSelect from "../components/form/BulmaSelect.vue";
	import BulmaFormControl from "../components/form/groups/BulmaFormControl.vue";
	import BulmaFormControlGroup from "../components/form/groups/BulmaFormControlGroup.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {
		BulmaAlignments,
		BulmaBreadcrumbSeparators,
		BulmaSizes,
		getBulmaAlignments,
		getBulmaBreadcrumbSeparators,
		getBulmaSizes
	} from "../types";


	const list = ref(window.location.pathname.split('/').filter(x => x));
	const input = ref('');
	const separator = ref<BulmaBreadcrumbSeparators>('succeeds');
	const alignment = ref<BulmaAlignments>('left');
	const size = ref<BulmaSizes>('default');

	console.log(getBulmaSizes());

	watch(list, (newVal) => {
		window.history.pushState({}, '', newVal.join('/'));
	});
</script>

