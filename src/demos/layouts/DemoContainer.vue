<template>
	<bulma-container :breakpoint="breakpoint" :is-fluid="fluid" :modifier="modifier" :tag="section">
		<p>Interdum congue fames orci, aenean taciti dictumst, curabitur quisque phasellus metus adipiscing venenatis
		   cras. Libero nisi in feugiat, vulputate suscipit pharetra sem nam. Tempor vivamus sociosqu nisi, quis
		   porttitor mauris, porta vel nunc mattis in nibh. Sollicitudin aliquet pretium, potenti nam, hendrerit posuere
		   sociosqu dapibus tempus molestie quis. Vulputate nulla hac fames, nam facilisis feugiat, ante platea suscipit
		   porta varius sem himenaeos. Aliquet condimentum diam phasellus, mollis pharetra malesuada, suscipit luctus
		   justo id donec tellus semper hendrerit. Litora felis cursus, sit conubia nibh sociosqu molestie.</p>
	</bulma-container>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field isHorizontal label="Breakpoint">
				<bulma-select v-model="breakpoint" :options="getBulmaMediaSizes()" />
			</bulma-form-field>
			<bulma-form-field isHorizontal label="Modifier">
				<bulma-select v-model.trim="modifier">
					<option value="fullwidth">Fullwidth</option>
					<option value="narrow">Narrow</option>
				</bulma-select>
			</bulma-form-field>
			<bulma-form-field isHorizontal label="Fluid">
				<input v-model="fluid" type="checkbox" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>

<script lang="ts" setup>
	const breakpoint = ref();
	const section = ref('aside');
	import {ref} from "vue";
	import {getBulmaMediaSizes} from "../../types";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaSelect from "../../vbComponents/form/BulmaSelect.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";
	import BulmaContainer from "../../vbComponents/layouts/BulmaContainer.vue";

	const modifier = ref();
	const fluid = ref();
</script>