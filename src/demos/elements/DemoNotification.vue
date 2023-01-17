<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-notification :colour="col" :is-light="light" :tag="t">
			<template v-if="del" #delete>
				<bulma-delete />
			</template>
			Hey just letting you know <em>this a notification</em> courtesy of <a href="http://bulma.io">Bulma</a>
			brought to
			you by me Chris 😃
		</bulma-notification>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse">
			<BulmaFormField is-horizontal label="Colour">
				<bulma-select v-model="col" :options="getBulmaColours()" />
			</BulmaFormField>


			<BulmaFormField is-horizontal label="Light colour">
				<input v-model="light" type="checkbox" />
			</BulmaFormField>
			<BulmaFormField is-horizontal label="Delete">
				<input v-model="del" type="checkbox" />
			</BulmaFormField>


			<BulmaFormField is-horizontal label="Tag">
				<bulma-input v-model="t" />
			</BulmaFormField>
		</fieldset>
	</bulma-box>
</template>
<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaColour, getBulmaColours} from "../../types";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaDelete from "../../vbComponents/elements/BulmaDelete.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaNotification from "../../vbComponents/elements/BulmaNotification.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const t = ref('div');
	const col = ref<BulmaColour>('default');
	const light = ref(false);
	const del = ref(false);
</script>