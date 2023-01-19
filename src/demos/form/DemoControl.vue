<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-form-control :is-loading="load" :left-icon="rIcon" :tag="tag" :right-icon="lIcon">
			<bulma-input placeholder="Email@domain.far" type="email" />

		</bulma-form-control>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">

			<bulma-form-field is-horizontal label="Tag">
				<bulma-input v-model="tag" type="text" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Loading">
				<input v-model="load" type="checkbox" />
			</bulma-form-field>

		</fieldset>
	</bulma-box>

</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import {BulmaColouredIcon, BulmaMultiIcon} from "../../types/IconTypes";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaFormControl from "../../vbComponents/form/groups/BulmaFormControl.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

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