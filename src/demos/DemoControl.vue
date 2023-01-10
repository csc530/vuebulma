<template>
	<bulma-box>
		<bulma-form-control :is-loading="load" :right-icon="rIcon" :tag="tag" left-icon="fas fa-envelope">
			<bulma-input placeholder="Email@domain.far" type="email" />

		</bulma-form-control>
	</bulma-box>

	<bulma-form-field is-horizontal label="Tag">
		<bulma-input v-model="tag" type="text" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Loading">
		<input v-model="load" type="checkbox" />
	</bulma-form-field>
</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaFormControl from "../components/form/groups/BulmaFormControl.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {BulmaStackedIcon} from "../types/IconTypes";

	const expand = ref<boolean>(false);
	const tag = ref<string>('div');
	const load = ref<boolean>(false);
	const rIcon = ref<BulmaStackedIcon>({
		icon: ['fas fa-question fa-stack-1x', 'fa-regular fa-circle fa-stack-2x'],
		stacked: 'fa-stack'
	});
</script>