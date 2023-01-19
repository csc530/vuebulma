<template>
	<bulma-box style="background-image: linear-gradient(120deg, rgba(0,209,178,0.2) 0%, rgba(65,184,131,0.23) 100%);">
		<BulmaPagination :is-rounded="round" :list="list" :alignment="align" :size="size"
		                 :next="next.txt !== '' ? next:null" :prev="prev.txt !== '' ? prev:null" />
	</bulma-box>
	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap"
		          name="props">

			<bulma-form-field is-horizontal label="Next">
				<bulma-form-control-group has-addons>
					<bulma-form-control>
						<bulma-input v-model="next.txt" />
					</bulma-form-control>
				</bulma-form-control-group>
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Previous">
				<bulma-form-control-group has-addons>
					<bulma-form-control>
						<bulma-input v-model="prev.txt" />
					</bulma-form-control>
				</bulma-form-control-group>
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Alignment/Order">
				<bulma-select :options="getBulmaAlignments()" v-model="align" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Size">
				<bulma-select :options="getBulmaSizes()" v-model="size" />

			</bulma-form-field>
			<bulma-form-field is-horizontal label="Rounded">
				<input type="checkbox" v-model="round" />

			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>


<script lang="ts" setup>

	import {ref} from "vue";
	import {BulmaAlignment, BulmaSize, getBulmaAlignments, getBulmaSizes} from "../../types";
	import {vbtPagination} from "../../types/PaginationTypes";
	import BulmaPagination from "../../vbComponents/components/BulmaPagination.vue";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormControl from "../../vbComponents/form/groups/BulmaFormControl.vue";
	import BulmaFormControlGroup from "../../vbComponents/form/groups/BulmaFormControlGroup.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const list: vbtPagination[] = [
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
	const prev = ref<vbtPagination>({link: '', txt: 'Last time'})
	const next = ref<vbtPagination>({link: '', txt: 'Apres ça'})
	const round = ref<boolean>(false)
</script>