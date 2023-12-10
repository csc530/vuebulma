<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<v-bulma-image :caption="caption" :is-fullwidth="fullwidth" :dimensions="dimension"
		             :is-rounded="round" :src="src" :aspect-ratio="ratio">
		</v-bulma-image>
	</v-bulma-box>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field label="Caption" help="may cause distortion or mal alignment of image">
				<v-bulma-input v-model="caption" />
			</v-bulma-form-field>

			<v-bulma-form-field is-horizontal label="Dimensions">
				<v-bulma-form-control is-expanded>
					<v-bulma-form-control-group has-addons>
						<v-bulma-form-control>
							<v-bulma-select v-model="dimension" :options="getDimensions().map(x=>x.toString())" />
						</v-bulma-form-control>
						<v-bulma-form-control>
							<v-bulma-button :colour="'warning'" @click="dimension = null">Reset</v-bulma-button>
						</v-bulma-form-control>
					</v-bulma-form-control-group>
				</v-bulma-form-control>
	</v-bulma-form-field>
			<v-bulma-form-field is-horizontal label="Aspect Ratio">


				<v-bulma-form-control is-expanded>
					<v-bulma-form-control-group has-addons>
						<v-bulma-form-control>
							<v-bulma-select v-model="ratio" :options="getBulmaAspectRatios()" />
						</v-bulma-form-control>
						<v-bulma-form-control>
							<v-bulma-button :colour="'warning'" @click="ratio = null">Reset</v-bulma-button>
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
		</fieldset>
	</v-bulma-box>
</template>

<script lang="ts" setup>

	import {ref} from "vue";
	import {BulmaAspectRatio, BulmaDimension, getBulmaAspectRatios, getDimensions} from "../../types/ImageTypes";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaButton from "../../vbComponents/elements/VBulmaButton.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";

	import VBulmaImage from "../../vbComponents/elements/VBulmaImage.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormControl from "../../vbComponents/form/groups/VBulmaFormControl.vue";
	import VBulmaFormControlGroup from "../../vbComponents/form/groups/VBulmaFormControlGroup.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const src = ('https://media.tenor.com/AG37nXI2SxYAAAAd/digimon-adventure.gif');
	const caption = ref('💯Digimon❣️');
	const dimension = ref<BulmaDimension | null>();
	const round = ref(false);
	const ratio = ref<BulmaAspectRatio | null>("1by1");
	const width = ref<number>(64);
	const fullwidth = ref(false);
</script>

