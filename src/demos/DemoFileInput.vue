<template>
	<bulma-box>
		<bulma-file-input v-model="filename" :alignment="align" :colour="colour" :file-name="file" :is-boxed="boxed"
		                  :is-fullwidth="full" :label="label" :size="size">
			<bulma-icon v-if="icon" icon="fas fa-upload" />
		</bulma-file-input>
	</bulma-box>

	<bulma-form-field is-horizontal label="Size">
		<bulma-select v-model="size" :options="getBulmaSizes()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Colour">
		<bulma-select v-model="colour" :options="getBulmaColours()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Alignment">
		<bulma-select v-model="align" :options="getBulmaAlignments()" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Label">
		<bulma-form-control-group has-addons>
			<bulma-form-control>
				<bulma-input v-model="label" />
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="danger" @click="label = null">Clear</bulma-button>
			</bulma-form-control>
		</bulma-form-control-group>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="File Name">
		<bulma-form-control-group has-addons>
			<bulma-form-control>
				<bulma-input v-model="filename" />
			</bulma-form-control>
			<bulma-form-control>
				<bulma-button colour="danger" @click="filename = null">Clear</bulma-button>
			</bulma-form-control>
		</bulma-form-control-group>
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Full Width">
		<input v-model="full" type="checkbox" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Boxed">
		<input v-model="boxed" type="checkbox" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Icon">
		<input v-model="icon" type="checkbox" />
	</bulma-form-field>
</template>

<script lang="ts" setup>
	import {computed, ref} from "vue";
	import BulmaButton from "../components/BulmaButton.vue";
	import BulmaIcon from "../components/BulmaIcon.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaFileInput from "../components/form/BulmaFileInput.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaSelect from "../components/form/BulmaSelect.vue";
	import BulmaFormControl from "../components/form/groups/BulmaFormControl.vue";
	import BulmaFormControlGroup from "../components/form/groups/BulmaFormControlGroup.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {
		BulmaAlignments,
		BulmaColour,
		BulmaSize,
		getBulmaAlignments,
		getBulmaColours,
		getBulmaSizes
	} from "../types";

	const size = ref<BulmaSize>('default');
	const colour = ref<BulmaColour>('default');
	const align = ref<BulmaAlignments>('center');
	const label = ref<string | null>('Choose a file...');
	const filename = ref<string | null>('File Name.ext');
	const full = ref<boolean>(false);
	const boxed = ref<boolean>(false);
	const icon = ref<boolean>(false);
	//split filename by path delimiter UNIX: /, Windows: \
	const file = computed(() => filename.value ? filename.value.split(/[\\/]/).pop() : null);
</script>