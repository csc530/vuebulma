<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-modal v-model:is-active="active" @closed="(val)=>active=val">
			<v-bulma-box>
				<v-bulma-heading>{{ title }}</v-bulma-heading>
				{{ body }}
				<v-bulma-button is-static>{{ footer }}</v-bulma-button>
			</v-bulma-box>
		</v-bulma-modal>

		<v-bulma-modal-card v-model:is-active="card" :title="title">
			<p>{{ body }}</p>
			<v-bulma-dropdown :content="dropdown" item-tag="a">
				<v-bulma-button>Learn more..?</v-bulma-button>
				<template #dropdown-item="{data}">
					<a :href="data.link">{{ data.txt }}</a>
				</template>
			</v-bulma-dropdown>
			<template #footer>
				<p>{{ footer }}</p>
			</template>
		</v-bulma-modal-card>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Activate">
				<v-bulma-button colour="primary" @click="active = true">Open Modal!</v-bulma-button>
				<v-bulma-button colour="ghost" is-inverted @click="card = !card">Open Modal--card</v-bulma-button>

			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Title">
				<v-bulma-input v-model="title" />
			</v-bulma-form-field>
			<v-bulma-form-field is-horizontal label="Body">
				<v-bulma-input v-model="body" />
			</v-bulma-form-field>
			<v-bulma-form-field is-horizontal label="Footer">
				<v-bulma-input v-model="footer" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>

<script lang="ts" setup>

	import {ref} from "vue";
	import VBulmaDropdown from "../../vbComponents/components/VBulmaDropdown.vue";
	import VBulmaModal from "../../vbComponents/components/VBulmaModal.vue";
	import VBulmaModalCard from "../../vbComponents/components/VBulmaModalCard.vue";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const active = ref()
	const card = ref();
	const title = ref('A super modal');
	const body = ref('I hope you enjoy');
	const footer = ref('Report any issues you have with any of vuebulma components :)');
	const dropdown = [
		{link: 'https://paypal.me/csc530', txt: 'Support'},
		{link: 'https://www.npmjs.com/package/@csc530/vuebulma', txt: 'Download'},
		{link: 'https://csc530.github.io/vuebulma/', txt: 'Docs'}
	]
</script>