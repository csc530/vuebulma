<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-image :caption="caption"
		               :is-fullwidth="fullwidth"
		               :size="size"
		               :width="width"
		               :is-rounded="round"
		               :src="src" />
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<v-bulma-form-field is-horizontal label="Dimensions">
			<v-bulma-form-control is-expanded>
				<v-bulma-form-control-group has-addons>
					<v-bulma-form-control>
						<v-bulma-select v-model="size" :options="sizeOptions" />
					</v-bulma-form-control>
					<v-bulma-form-control>
						<v-bulma-button :colour="'warning'" @click="size = null">Reset</v-bulma-button>
					</v-bulma-form-control>
				</v-bulma-form-control-group>
			</v-bulma-form-control>
		</v-bulma-form-field>

		<v-bulma-form-field is-horizontal label="Rounded">
			<v-bulma-form-control>
				<input v-model="round" type="checkbox" />
			</v-bulma-form-control>
		</v-bulma-form-field>

		<v-bulma-form-field is-horizontal label="Fullwidth">
			<v-bulma-form-control>
				<input v-model="fullwidth" type="checkbox" />
			</v-bulma-form-control>
		</v-bulma-form-field>
	</v-bulma-box>
</template>

<script lang="ts" setup>

	import {ref} from "vue";
	import {
		BulmaAspectRatio,
		BulmaDimension,
		BULMA_DIMENSIONS,
		BULMA_ASPECT_RATIOS
	} from "../../types/ImageTypes";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";

	import VBulmaImage from "../../vbComponents/elements/VBulmaImage.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormControlGroup from "../../vbComponents/form/groups/VBulmaFormControlGroup.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const src = ("https://media.tenor.com/AG37nXI2SxYAAAAd/digimon-adventure.gif");
	const caption = ref("💯Digimon❣️");
	const size = ref<BulmaDimension | BulmaAspectRatio | null>();
	const width = ref("100%");
	const round = ref(false);
	const fullwidth = ref(false);
	const sizeOptions = [
		{
			label: "Dimensions",
			options: BULMA_DIMENSIONS.map(d => d.toString())
		},
		{
			label: "Aspect Ratios",
			options: BULMA_ASPECT_RATIOS
		}
	];
</script>

