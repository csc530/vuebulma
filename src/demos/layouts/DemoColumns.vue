<template>
	<demo-box>
		<VBulmaHeading tag="h2">Columns</VBulmaHeading>
		<v-bulma-column-group style="min-height: 25vb; border: 3px dashed black" :tag="tag" :is-vcentered="isVCentered" :is-centered="centered" :gap="columnGap" :is-multiline="isMultiline">
			<v-bulma-column v-for="size in columnSizes" :size="size">
				<v-bulma-box>
					<p class="has-text-centered">size: {{ size }}</p>
				</v-bulma-box>
			</v-bulma-column>
		</v-bulma-column-group>

		<v-bulma-box tag="section">
			<v-bulma-heading tag="h3">Props</v-bulma-heading>

			<v-bulma-form-field label="Tag" is-horizontal>
				<VBulmaFormControl tag="span">
					<v-bulma-input v-model="tag" />
				</VBulmaFormControl>
			</v-bulma-form-field>

			<v-bulma-form-field label="Column gap" is-horizontal>
				<VBulmaFormControl tag="span">
					<v-bulma-select v-model="columnGap" :options="columnGapOptions" />
				</VBulmaFormControl>
			</v-bulma-form-field>

			<VBulmaFormField is-horizontal label="Multiline">
				<VBulmaFormControl tag="span">
					<input type="checkbox" v-model="isMultiline" :checked="isMultiline" />
				</VBulmaFormControl>
			</VBulmaFormField>

			<VBulmaFormField is-horizontal label="Centered">
				<VBulmaFormControl tag="span">
					<input type="checkbox" v-model="centered" :checked="centered" />
				</VBulmaFormControl>
			</VBulmaFormField>

			<VBulmaFormField is-horizontal label="Vertically centered">
				<VBulmaFormControl tag="span">
					<input type="checkbox" v-model="isVCentered" :checked="isVCentered" />
				</VBulmaFormControl>
			</VBulmaFormField>
		</v-bulma-box>
	</demo-box>
</template>


<script setup lang="ts">
	import {computed, ref} from "vue";
	import {BulmaOption} from "../../types/SelectTypes";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaColumnGroup from "../../vbComponents/layouts/Columns/VBulmaColumnGroup.vue";
	import VBulmaColumn from "../../vbComponents/layouts/Columns/VBulmaColumn.vue";

	import {BULMA_COLUMN_GAP_SIZES, BULMA_COLUMN_SIZES} from "../../types/ColumnTypes";
	import DemoBox from "../DemoBox.vue";

	let columnGapOptions: BulmaOption[] = [{value: null, label: "default"}];
	columnGapOptions = columnGapOptions.concat(BULMA_COLUMN_GAP_SIZES.flatMap(gap => ({
			label: gap.toString(),
			value: gap
		})
	));
	const columnGap = ref(columnGapOptions[0].value);
	const isMultiline = ref(false);
	const centered = ref(false);
	const isVCentered = ref(false);
	const tag = ref("div");
	let columnSizes = computed((()=>{
		//shuffle the array BULMA_COLUMN_SIZES
		const shuffled = BULMA_COLUMN_SIZES.sort(() => 0.5 - Math.random());
		return shuffled.slice(0, 6);
	}));
</script>

