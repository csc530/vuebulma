<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-image :caption="caption" :is-fullwidth="fullwidth" :dimensions="dimension"
		             :is-rounded="round" :src="src" :aspect-ratio="ratio">
		</bulma-image>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field label="Caption" help="may cause distortion or mal alignment of image">
				<bulma-input v-model="caption" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Dimensions">
				<bulma-form-control is-expanded>
					<bulma-form-control-group has-addons>
						<bulma-form-control>
							<bulma-select v-model="dimension" :options="getDimensions().map(x=>x.toString())" />
						</bulma-form-control>
						<bulma-form-control>
							<bulma-button :colour="'warning'" @click="dimension = null">Reset</bulma-button>
						</bulma-form-control>
					</bulma-form-control-group>
				</bulma-form-control>
	</bulma-form-field>
			<bulma-form-field is-horizontal label="Aspect Ratio">


				<bulma-form-control is-expanded>
					<bulma-form-control-group has-addons>
						<bulma-form-control>
							<bulma-select v-model="ratio" :options="getBulmaAspectRatios()" />
						</bulma-form-control>
						<bulma-form-control>
							<bulma-button :colour="'warning'" @click="ratio = null">Reset</bulma-button>
						</bulma-form-control>
					</bulma-form-control-group>
				</bulma-form-control>


			</bulma-form-field>

	<bulma-form-field is-horizontal label="Rounded">
		<bulma-form-control>
			<input v-model="round" type="checkbox" />
		</bulma-form-control>
	</bulma-form-field>

			<bulma-form-field is-horizontal label="Fullwidth">
				<bulma-form-control>
					<input v-model="fullwidth" type="checkbox" />
				</bulma-form-control>
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>

<script lang="ts" setup>

	import {ref} from "vue";
	import {BulmaAspectRatio, BulmaDimension, getBulmaAspectRatios, getDimensions} from "../../types/ImageTypes";
	import BulmaBox from "../../vuebulma components/elements/BulmaBox.vue";
	import BulmaButton from "../../vuebulma components/elements/BulmaButton.vue";
	import BulmaHeading from "../../vuebulma components/elements/BulmaHeading.vue";

	import BulmaImage from "../../vuebulma components/elements/BulmaImage.vue";
	import BulmaInput from "../../vuebulma components/form/BulmaInput.vue";
	import BulmaSelect from "../../vuebulma components/form/BulmaSelect.vue";
	import BulmaFormControl from "../../vuebulma components/form/groups/BulmaFormControl.vue";
	import BulmaFormControlGroup from "../../vuebulma components/form/groups/BulmaFormControlGroup.vue";
	import BulmaFormField from "../../vuebulma components/form/groups/BulmaFormField.vue";

	const src = ('https://media.tenor.com/AG37nXI2SxYAAAAd/digimon-adventure.gif');
	const caption = ref('💯Digimon❣️');
	const dimension = ref<BulmaDimension | null>();
	const round = ref(false);
	const ratio = ref<BulmaAspectRatio | null>("1by1");
	const width = ref<number>(64);
	const fullwidth = ref(false);
</script>

