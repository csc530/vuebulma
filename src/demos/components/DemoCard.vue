<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-card :center-title="center" :footer-items="items" :title="title" footer-tag="p">
			<template v-if="icon" #icon>
				<bulma-icon>
					<template #icon>
						<img alt="wrestlers icon" src="https://www.svgrepo.com/show/408252/women-wrestling.svg" />
					</template>
				</bulma-icon>
			</template>

			<template v-if="img" #image>
				<bulma-image :src="src" aspect-ratio="16by9" />
			</template>

			<template v-if="content" #default>Toast!! My name is <strong>Toast🍞</strong></template>
		</bulma-card>
	</bulma-box>
	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset
				class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap-reverse"
				name="props">
			<bulma-form-field is-horizontal label="Title">
				<bulma-input v-model="title" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Center Title">
				<input v-model="center" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Card header">
				<input v-model="header" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Card image">
				<input v-model="img" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Card content">
				<input v-model="content" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Card footer">
				<input v-model="footer" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Card icon">
				<input v-model="icon" type="checkbox" />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>

<style scoped>

</style>

<script lang="ts" setup>

	import {computed, ref} from "vue";
	import BulmaCard from "../../vbComponents/components/BulmaCard.vue";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaIcon from "../../vbComponents/elements/BulmaIcon.vue";
	import BulmaImage from "../../vbComponents/elements/BulmaImage.vue";
	import BulmaInput from "../../vbComponents/form/BulmaInput.vue";
	import BulmaFormField from "../../vbComponents/form/groups/BulmaFormField.vue";

	const src = 'https://th.bing.com/th/id/R.8849982bbba516c6bda2a57e8bcd1e38?rik=tV1%2f73%2bsMssA3A&riu=http%3a%2f%2fvignette2.wikia.nocookie.net%2fbeeandpuppycat%2fimages%2f6%2f6b%2fToast.PNG%2frevision%2flatest%3fcb%3d20161227003153&ehk=L%2bSbcn1cCGVNrMu2N1LbMtue3UUt9qo4nV9O04oJGzw%3d&risl=&pid=ImgRaw&r=0'
	const txt = ref()
	const title = computed({
		get() {
			return header.value ? txt.value : null;
		},
		set(val) {
			txt.value = val
		}
	});
	const items = computed(() => footer.value ? ['#11/12', 'Honorary Wizard🧙🏿‍♀️', "Twin Mom"] : null);
	const center = ref();
	const header = ref();
	const content = ref(true);
	const footer = ref();
	const img = ref();
	const icon = ref();
</script>