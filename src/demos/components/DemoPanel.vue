<template>
	<bulma-box>
		<bulma-panel :title="title" :items="panels" :colour="colour">
			<template #block="{data}">
				<input type="checkbox" />{{ data.vbTxt }}
			</template>
			<template #block3>
				<bulma-progressbar :colour="colour">Bye for now</bulma-progressbar>
			</template>
		</bulma-panel>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap"
		          name="props">
			<bulma-form-field is-horizontal label="Title">
				<bulma-input v-model="title" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Colour">
				<bulma-select v-model="colour" :options="getBulmaColours()" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>

<style scoped>

</style>

<script setup lang="ts">

	import {ref} from "vue";
	import {BulmaColour, getBulmaColours} from "../../types";
	import {BulmaPanelItem} from "../../types/PanelTypes";
	import BulmaPanel from "../../vbComponents/components/BulmaPanel.vue";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaProgressbar from "../../vbComponents/elements/BulmaProgressbar.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const title = ref('Panel');
	const panels = ref<BulmaPanelItem[]>([
		{vbType: 'tabs', vbTabs: [{vbTxt: 'Home'}, {vbTxt: 'About You'}, {vbTxt: 'About me'}]},
		{vbType: 'block', vbTxt: 'A simple Panel item'},
		{vbType: 'block', vbTxt: 'Hopefully make it more complez'},
		{vbType: 'block', vbTxt: 'Hopefully make it more complez'}
	]);

	const colour = ref<BulmaColour>('default');
</script>