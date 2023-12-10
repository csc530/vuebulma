<template>
	<v-bulma-box>
		<v-bulma-panel :title="title" :items="panels" :colour="colour">

			<template #block3>
				<v-bulma-progressbar :colour="colour">Bye for now</v-bulma-progressbar>
			</template>
			<template #icon>
				<i class="fa-solid fa-gun"></i>
			</template>
		</v-bulma-panel>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap"
		          name="props">
			<v-bulma-form-field is-horizontal label="Title">
				<v-bulma-input v-model="title" />
			</v-bulma-form-field>
			<v-bulma-form-field is-horizontal label="Colour">
				<v-bulma-select v-model="colour" :options="getBulmaColours()" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>

<script setup lang="ts">

	import {ref} from "vue";
	import {BulmaColour, getBulmaColours} from "../../types";
	import {BulmaPanelItem} from "../../types/PanelTypes";
	import VBulmaPanel from "../../vbComponents/components/VBulmaPanel.vue";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaProgressbar from "../../vbComponents/elements/VBulmaProgressbar.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const title = ref('Panel');
	const panels = ref<BulmaPanelItem[]>([
		{vbType: 'tabs', vbTabs: [{vbTxt: 'Home'}, {vbTxt: 'About You'}, {vbTxt: 'About me'}]},
		{vbType: 'block', vbTxt: 'A simple Panel item'},
		{vbType: 'block', vbTxt: 'Hopefully make it more complez'},
		{vbType: 'block', vbTxt: 'Hopefully make it more complez'}
	]);

	const colour = ref<BulmaColour>('default');
</script>