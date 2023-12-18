<template>
	<demo-box>
		<v-bulma-card :footer-items="items" :title="title" footer-tag="p" :image-after-content="imageAfterContent">
			<template v-if="icon" #icon>
				<v-bulma-icon>
					<template #icon>
						<img alt="wrestlers icon" src="https://www.svgrepo.com/show/408252/women-wrestling.svg" />
					</template>
				</v-bulma-icon>
			</template>

			<template v-if="img" #image>
				<v-bulma-image style="width: 22%;" class="m-auto" :src="src"  />
			</template>

			<template v-if="content">Toast!! My name is <strong>Toast🍞</strong></template>
		</v-bulma-card>
	</demo-box>


	<v-bulma-box>
		<v-bulma-heading>Props</v-bulma-heading>
		<v-bulma-form-field is-horizontal label="Title">
			<v-bulma-input v-model="title" />
		</v-bulma-form-field>
		<v-bulma-form-field is-horizontal label="Show image after content">
			<input v-model="imageAfterContent" type="checkbox" />
		</v-bulma-form-field>
		<v-bulma-form-field is-horizontal label="Card header">
			<input v-model="header" type="checkbox" />
		</v-bulma-form-field>
		<v-bulma-form-field is-horizontal label="Card image">
			<input v-model="img" type="checkbox" />
		</v-bulma-form-field>
		<v-bulma-form-field is-horizontal label="Card content">
			<input v-model="content" type="checkbox" />
		</v-bulma-form-field>
		<v-bulma-form-field is-horizontal label="Card footer">
			<input v-model="footer" type="checkbox" />
		</v-bulma-form-field>
		<v-bulma-form-field is-horizontal label="Card icon">
			<input v-model="icon" type="checkbox" />
		</v-bulma-form-field>
	</v-bulma-box>
</template>

<script lang="ts" setup>

	import {computed, ref} from "vue";
	import DemoBox from "../../demos/DemoBox.vue";
	import VBulmaCard from "../../vbComponents/components/VBulmaCard.vue";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaIcon from "../../vbComponents/elements/VBulmaIcon.vue";
	import VBulmaImage from "../../vbComponents/elements/VBulmaImage.vue";
	import VBulmaInput from "../../vbComponents/form/VBulmaInput.vue";
	import VBulmaFormField from "../../vbComponents/form/groups/VBulmaFormField.vue";

	const src = "https://64.media.tumblr.com/1ffb5d8634ba4516250f8838f2d0eff2/tumblr_okvdnkwJrD1suni9po4_400.gifv";
	const txt = ref("Toast🍞: the G.O.A.T.");
	const title = computed({
		get(){
			return header.value ? txt.value : null;
		},
		set(val){
			txt.value = val;
		}
	});
	const items = computed(() => footer.value ? ["#11/12", "Honorary Wizard🧙🏿‍♀️", "Twin Mom"] : null);
	const imageAfterContent = ref(true);
	const header = ref(true);
	const content = ref(true);
	const footer = ref(true);
	const img = ref(true);
	const icon = ref(true);
</script>