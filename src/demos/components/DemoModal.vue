<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-modal v-model:is-active="active" @closed="(val)=>active=val">
			<bulma-box>
				<bulma-heading>{{ title }}</bulma-heading>
				{{ body }}
				<bulma-button is-static>{{ footer }}</bulma-button>
			</bulma-box>
		</bulma-modal>

		<bulma-modal-card v-model:is-active="card" :title="title">
			<p>{{ body }}</p>
			<bulma-dropdown :content="dropdown" item-tag="a">
				<bulma-button>Learn more..?</bulma-button>
				<template #dropdown-item="{data}">
					<a :href="data.link">{{ data.txt }}</a>
				</template>
			</bulma-dropdown>
			<template #footer>
				<p>{{ footer }}</p>
			</template>
		</bulma-modal-card>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field is-horizontal label="Activate">
				<bulma-button colour="primary" @click="active = true">Open Modal!</bulma-button>
				<bulma-button colour="ghost" is-inverted @click="card = !card">Open Modal--card</bulma-button>

			</bulma-form-field>

			<bulma-form-field is-horizontal label="Title">
				<bulma-input v-model="title" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Body">
				<bulma-input v-model="body" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Footer">
				<bulma-input v-model="footer" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>

<script lang="ts" setup>

	import {ref} from "vue";
	import BulmaDropdown from "../../vbComponents/components/BulmaDropdown.vue";
	import BulmaModal from "../../vbComponents/components/BulmaModal.vue";
	import BulmaModalCard from "../../vbComponents/components/BulmaModalCard.vue";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaButton from "../../vbComponents/elements/BulmaButton.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

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