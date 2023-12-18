<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, rgba(0,209,178,0.2) 0%, rgba(65,184,131,0.23) 100%);">
		<VBulmaPagination :is-rounded="round" :list="list" :alignment="align" :size="size"
		                 :next="next.txt !== '' ? next:null" :prev="prev.txt !== '' ? prev:null" />
	</v-bulma-box>
	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap"
		          name="props">

			<v-bulma-form-field is-horizontal label="Next">
				<v-bulma-form-control-group has-addons>
					<v-bulma-form-control>
						<v-bulma-input v-model="next.txt" />
					</v-bulma-form-control>
				</v-bulma-form-control-group>
			</v-bulma-form-field>
			<v-bulma-form-field is-horizontal label="Previous">
				<v-bulma-form-control-group has-addons>
					<v-bulma-form-control>
						<v-bulma-input v-model="prev.txt" />
					</v-bulma-form-control>
				</v-bulma-form-control-group>
			</v-bulma-form-field>
			<v-bulma-form-field is-horizontal label="Alignment/Order">
				<v-bulma-select :options="BULMA_ALIGNMENTS" v-model="align" />
			</v-bulma-form-field>
			<v-bulma-form-field is-horizontal label="Size">
				<v-bulma-select :options="BULMA_SIZES" v-model="size" />

			</v-bulma-form-field>
			<v-bulma-form-field is-horizontal label="Rounded">
				<input type="checkbox" v-model="round" />

			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>


<script lang="ts" setup>

	import {ref} from "vue";
	import {BulmaAlignment, BulmaLink, BulmaSize, BULMA_ALIGNMENTS, BULMA_SIZES} from "../../types";
	import VBulmaPagination from "../../vbComponents/components/VBulmaPagination.vue";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormControlGroup from "../../vbComponents/form/groups/VBulmaFormControlGroup.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const list: BulmaLink[] = [
		NaN,
		{txt: 'A', link: ''},
		{txt: '2', link: ''},
		{txt: '3', link: ''},
		null,
		{txt: 'B', link: ''},
		{txt: '4', link: ''},
		undefined,
		{txt: 'C', link: ''}
	]

	const size = ref<BulmaSize>('default');
	const align = ref<BulmaAlignment>('right');
	const prev = ref<BulmaLink>({vbLink: '', vbTxt: 'Last time'})
	const next = ref<BulmaLink>({vbLink: '', vbTxt: 'Apres ça'})
	const round = ref<boolean>(false)
</script>