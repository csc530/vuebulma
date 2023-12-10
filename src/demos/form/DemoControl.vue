<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-form-control :is-loading="load" :left-icon="rIcon" :tag="tag" :right-icon="lIcon">
			<v-bulma-input placeholder="Email@domain.far" type="email" />

		</v-bulma-form-control>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">

			<v-bulma-form-field is-horizontal label="Tag">
				<v-bulma-input v-model="tag" type="text" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Loading">
				<input v-model="load" type="checkbox" />
			</v-bulma-form-field>

		</fieldset>
	</v-bulma-box>

</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaColouredIcon, BulmaMultiIcon} from "../../types/IconTypes";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const tag = ref<string>('div');
	const load = ref<boolean>(false);
	const rIcon = ref<BulmaMultiIcon>({
		icon: ['fas fa-question fa-stack-1x', 'fa-regular fa-circle fa-stack-2x'],
		stacked: 'fa-stack'
	});
	const lIcon = ref<BulmaColouredIcon>({
		icon: 'fas fa-envelope',
		colour: 'primary'
	});
</script>