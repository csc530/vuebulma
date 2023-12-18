<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-file-input v-model="filename" :alignment="align" :colour="colour" :file-name="file" :is-boxed="boxed"
		                  :is-fullwidth="full" :label="label" :size="size">
			<v-bulma-icon v-if="icon" icon="fas fa-upload" />
		</v-bulma-file-input>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field is-horizontal label="Size">
				<v-bulma-select v-model="size" :options="BULMA_SIZES" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Colour">
				<v-bulma-select v-model="colour" :options="getBulmaColours()" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Alignment">
				<v-bulma-select v-model="align" :options="BULMA_ALIGNMENTS" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Label">
				<v-bulma-form-control-group has-addons>
					<v-bulma-form-control>
						<v-bulma-input v-model="label" />
					</v-bulma-form-control>
					<v-bulma-form-control>
						<v-bulma-button colour="danger" @click="label = null">Clear</v-bulma-button>
					</v-bulma-form-control>
				</v-bulma-form-control-group>
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="File Name">
				<v-bulma-form-control-group has-addons>
					<v-bulma-form-control>
						<v-bulma-input v-model="filename" />
					</v-bulma-form-control>
					<v-bulma-form-control>
						<v-bulma-button colour="danger" @click="filename = null">Clear</v-bulma-button>
					</v-bulma-form-control>
				</v-bulma-form-control-group>
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Full Width">
				<input v-model="full" type="checkbox" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Boxed">
				<input v-model="boxed" type="checkbox" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Icon">
				<input v-model="icon" type="checkbox" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>

<script lang="ts" setup>
	import {computed, ref} from "vue";
	import {
		BulmaAlignment,
		BulmaColour,
		BulmaSize,
		BULMA_ALIGNMENTS,
		getBulmaColours,
		BULMA_SIZES
	} from "../../types";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaIcon from "../../vbComponents/elements/VBulmaIcon.vue";
	import VBulmaFileInput from "../../vbComponents/form/VBulmaFileInput.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormControlGroup from "../../vbComponents/form/groups/VBulmaFormControlGroup.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const size = ref<BulmaSize>('default');
	const colour = ref<BulmaColour>('default');
	const align = ref<BulmaAlignment>('center');
	const label = ref<string | null>('Choose a file...');
	const filename = ref<string | null>('File Name.ext');
	const full = ref<boolean>(false);
	const boxed = ref<boolean>(false);
	const icon = ref<boolean>(false);
	//split filename by path delimiter UNIX: /, Windows: \
	const file = computed(() => filename.value ? filename.value.split(/[\\/]/).pop() : null);
</script>