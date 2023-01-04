<template>
	<bulma-box>
		<bulma-image :caption="caption" :is-fullwidth="fullwidth" :dimensions="dimension" :width="width"
		             :is-rounded="round" :src="src" :aspect-ratio="ratio">
		</bulma-image>
	</bulma-box>

	<bulma-form-field label="Caption">
		<bulma-input v-model="caption" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Dimensions">
		<bulma-form-control :is-expanded="'select'">
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
		<bulma-form-control-group :is-grouped="'right'">

			<bulma-form-control :is-expanded="'select'">
				<bulma-form-control-group has-addons>
					<bulma-form-control>
						<bulma-select v-model="ratio" :options="getAspectRatios()" />
					</bulma-form-control>
					<bulma-form-control>
						<bulma-button :colour="'warning'" @click="ratio = null">Reset</bulma-button>
					</bulma-form-control>
				</bulma-form-control-group>
			</bulma-form-control>

			<bulma-form-control-group has-addons>
				<bulma-form-control>
					<bulma-button :colour="'info'" is-static @click="width = null">Width</bulma-button>
				</bulma-form-control>
				<bulma-form-control>
					<bulma-input v-model="width" type="number" />
				</bulma-form-control>
				<bulma-form-control>
					<bulma-button :colour="'warning'" @click="width = null">Reset</bulma-button>
				</bulma-form-control>
			</bulma-form-control-group>
		</bulma-form-control-group>
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
</template>

<script lang="ts" setup>

	import {ref} from "vue";

	import BulmaImage from "../components/BulmaImage.vue";
	import BulmaButton from "../components/button/BulmaButton.vue";
	import BulmaBox from "../components/containers/BulmaBox.vue";
	import BulmaInput from "../components/form/BulmaInput.vue";
	import BulmaSelect from "../components/form/BulmaSelect.vue";
	import BulmaFormControl from "../components/form/groups/BulmaFormControl.vue";
	import BulmaFormControlGroup from "../components/form/groups/BulmaFormControlGroup.vue";
	import BulmaFormField from "../components/form/groups/BulmaFormField.vue";
	import {BulmaAspectRatio, BulmaDimension, getAspectRatios, getDimensions} from "../types/ImageTypes";

	const src = ref('https://i.pinimg.com/originals/b7/90/c7/b790c74d6c78c515961a34cbfa207652.jpg');
	const caption = ref('🍞Toast❣️');
	const dimension = ref<BulmaDimension | null>(64);
	const round = ref(false);
	const ratio = ref<BulmaAspectRatio | null>("1by1");
	const width = ref<number>(64);
	const fullwidth = ref(false);
</script>

