<template>
	<v-bulma-box>
		<v-bulma-icon :colour="{colour: colour, shade: colourShade}" :container-size="size" :flex="flex" :icon="icon"
		            :text="text" :text-first="textPos" prefix="fas" stacked="fa-stack fa-lg" />
	</v-bulma-box>

	<v-bulma-form-field is-horizontal label="Text" label-width="2">
		<v-bulma-input v-model="text" />
	</v-bulma-form-field>
	<v-bulma-form-field is-horizontal label="Text Before Icon" width="2">
		<input v-model="textPos" type="checkbox" />
	</v-bulma-form-field>

	<v-bulma-form-field is-horizontal label="Colour">
		<v-bulma-select v-model="colour" :options="getBulmaStateColours()" />
	</v-bulma-form-field>
	<v-bulma-form-field is-horizontal label="Colour Shade">
		<v-bulma-select v-model="colourShade" :options="getBulmaShades()" />
	</v-bulma-form-field>


	<v-bulma-form-field is-horizontal label="Container Size">
		<v-bulma-select v-model="size" :options="BULMA_SIZES" />
	</v-bulma-form-field>

	<v-bulma-form-field help="" is-horizontal label="Flex">
		<input v-model="flex" type="checkbox" />
	</v-bulma-form-field>

</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {
		BulmaShade,
		BulmaSize,
		BulmaStateColour,
		getBulmaShades,
		BULMA_SIZES,
		getBulmaStateColours
	} from "../../types";
	import {BulmaColouredIcon} from "../../types/IconTypes";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaIcon from "../../vbComponents/elements/VBulmaIcon.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const text = ref<string>('A house icon');
	const textPos = ref<boolean>(false);
	const colour = ref<BulmaStateColour>('success');
	const colourShade = ref<BulmaShade>('default');
	const size = ref<BulmaSize>('large');
	const flex = ref<boolean>(false);


	const icon = ref<(string | BulmaColouredIcon)[]>(['fa-star fa-sm', 'fa-shield-cat fa-xl', {
		icon: 'fa-house fa-xs',
		colour: 'primary'
	}]);
</script>

