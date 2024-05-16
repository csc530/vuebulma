<template>
	<v-bulma-container :breakpoint="breakpoint" :is-fluid="fluid" :modifier="modifier" :tag="section">
		<p>Interdum congue fames orci, aenean taciti dictumst, curabitur quisque phasellus metus adipiscing venenatis
		   cras. Libero nisi in feugiat, vulputate suscipit pharetra sem nam. Tempor vivamus sociosqu nisi, quis
		   porttitor mauris, porta vel nunc mattis in nibh. Sollicitudin aliquet pretium, potenti nam, hendrerit posuere
		   sociosqu dapibus tempus molestie quis. Vulputate nulla hac fames, nam facilisis feugiat, ante platea suscipit
		   porta varius sem himenaeos. Aliquet condimentum diam phasellus, mollis pharetra malesuada, suscipit luctus
		   justo id donec tellus semper hendrerit. Litora felis cursus, sit conubia nibh sociosqu molestie.</p>
	</v-bulma-container>

	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<v-bulma-form-field isHorizontal label="Breakpoint">
				<v-bulma-select v-model="breakpoint" :options="BULMA_MEDIA" />
			</v-bulma-form-field>
			<v-bulma-form-field isHorizontal label="Modifier">
				<v-bulma-select v-model.trim="modifier">
					<option value="fullwidth">Fullwidth</option>
					<option value="narrow">Narrow</option>
				</v-bulma-select>
			</v-bulma-form-field>
			<v-bulma-form-field isHorizontal label="Fluid">
				<input v-model="fluid" type="checkbox" />
			</v-bulma-form-field>
		</fieldset>
	</v-bulma-box>
</template>

<script lang="ts" setup>
	import {ref} from "vue";
	import {BULMA_MEDIA} from "../../types";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaSelect from "../../vbComponents/form/VBulmaSelect.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";
	import VBulmaContainer from "../../vbComponents/layouts/VBulmaContainer.vue";

	const breakpoint = ref();
	const section = ref('aside');
	const modifier = ref();
	const fluid = ref();
</script>