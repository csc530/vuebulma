<template>
	<v-bulma-box>
		<v-bulma-breadcrumb :alignment="alignment"
		                    :list="list"
		                    :separator="separator"
		                    :size="size"
		                    :tag="tag" />
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<VBulmaFormField is-horizontal label="Items">
			<VBulmaFormControlGroup has-addons>
				<VBulmaFormControl is-expanded>
					<VBulmaInput v-model="input" />
				</VBulmaFormControl>

				<VBulmaFormControl>
					<VBulmaButton colour="primary" @click="list.push(input)">Add</VBulmaButton>
				</VBulmaFormControl>

				<VBulmaFormControl>
					<VBulmaButton colour="danger" @click="list.pop()">Remove
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
					<v-bulma-input :max="BULMA_ALIGNMENTS.length" :model-value="alignment" min="1" type="range"
					               v-bind:value="BULMA_ALIGNMENTS.indexOf(alignment)+1"
					               @input="event=> alignment = BULMA_ALIGNMENTS[event.target.value-1]" />
				</v-bulma-form-control>
				<v-bulma-form-control>
					<VBulmaButton is-static :label="alignment" />
				</v-bulma-form-control>
			</VBulmaFormControlGroup>
		</VBulmaFormField>

		<VBulmaFormField is-horizontal label="Size">
			<v-bulma-form-control is-expanded>
				<v-bulma-select v-model="size" :options="BULMA_SIZES" is-full-width />
			</v-bulma-form-control>
		</VBulmaFormField>

		<VBulmaFormField is-horizontal label="Tag">
			<v-bulma-form-control is-expanded>
				<v-bulma-input v-model="tag" is-full-width />
			</v-bulma-form-control>
		</VBulmaFormField>
	</v-bulma-box>
</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaAlignment, BulmaSize, BULMA_ALIGNMENTS, BULMA_SIZES} from "../../types";
	import {BulmaBreadcrumbSeparator, getBulmaBreadcrumbSeparators} from "../../types/BreadcrumbTypes";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormControlGroup from "../../vbComponents/form/groups/VBulmaFormControlGroup.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";
	import VBulmaBreadcrumb from "../../vbComponents/components/VBulmaBreadcrumb.vue";

	const list = ref(["root", "parent", "child", "...", "G.O.A.T.s", "🐐", "╰(*°▽°*)╯"]);
	const input = ref("");
	const separator = ref<BulmaBreadcrumbSeparator>("succeeds");
	const alignment = ref<BulmaAlignment>("center");
	const size = ref<BulmaSize>("default");
	const tag = ref("nav");
	const isLastCrumbIsActive = ref(false);
</script>

