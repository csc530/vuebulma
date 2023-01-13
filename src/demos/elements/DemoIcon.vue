<template>
	<bulma-box>
		<bulma-icon :colour="{colour: colour, shade: colourShade}" :container-size="size" :flex="flex" :icon="icon"
		            :text="text" :text-first="textPos" prefix="fas" stacked="fa-stack fa-lg" />
	</bulma-box>

	<bulma-form-field is-horizontal label="Text" label-width="2">
		<bulma-input v-model="text" />
	</bulma-form-field>
	<bulma-form-field is-horizontal label="Text Before Icon" width="2">
		<input v-model="textPos" type="checkbox" />
	</bulma-form-field>

	<bulma-form-field is-horizontal label="Colour">
		<bulma-select v-model="colour" :options="getBulmaStateColours()" />
	</bulma-form-field>
	<bulma-form-field is-horizontal label="Colour Shade">
		<bulma-select v-model="colourShade" :options="getBulmaShades()" />
	</bulma-form-field>


	<bulma-form-field is-horizontal label="Container Size">
		<bulma-select v-model="size" :options="getBulmaSizes()" />
	</bulma-form-field>

	<bulma-form-field help="" is-horizontal label="Flex">
		<input v-model="flex" type="checkbox" />
	</bulma-form-field>

</template>


<script lang="ts" setup>
	import {ref} from "vue";
	import {
		BulmaShade,
		BulmaSize,
		BulmaStateColour,
		getBulmaShades,
		getBulmaSizes,
		getBulmaStateColours
	} from "../../types";
	import {BulmaColouredIcon} from "../../types/IconTypes";
	import BulmaBox from "../../vuebulma components/elements/BulmaBox.vue";
	import BulmaIcon from "../../vuebulma components/elements/BulmaIcon.vue";
	import BulmaInput from "../../vuebulma components/form/BulmaInput.vue";
	import BulmaSelect from "../../vuebulma components/form/BulmaSelect.vue";
	import BulmaFormField from "../../vuebulma components/form/groups/BulmaFormField.vue";

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

