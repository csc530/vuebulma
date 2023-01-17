<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00D1B2 0%, #41B883 100%);">
		<bulma-navbar :boxed-dropdowns="boxed" :colour="colour" :end-items="characters" :has-shadow="shadow"
		              :is-fixed="fixed" :is-spaced="space" :is-transparent="transparent" :middle-items="tags"
		              :start-items="start" :tabbed-items="tab">
			<template #middle-items="{ data }">
				<em>{{ data.label ? data.label : data }}</em>
			</template>
		</bulma-navbar>
	</bulma-box>

	<bulma-box>
		<bulma-heading>Props</bulma-heading>
		<fieldset class="is-flex-mobile is-justify-content-center is-justify-content-space-between is-flex-wrap-wrap"
		          name="props">

			<bulma-form-field is-horizontal label="Space">
				<input v-model="space" type="checkbox" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Transparent">
				<input v-model="transparent" type="checkbox" />
			</bulma-form-field>


			<bulma-form-field is-horizontal label="Shadows">
				<input v-model="shadow" type="checkbox" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Boxed Dropdowns">
				<input v-model="boxed" type="checkbox" />
			</bulma-form-field>
			<bulma-form-field is-horizontal label="Colour">
				<bulma-select v-model="colour" :options="getBulmaColours()" />
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Fixed">
				<bulma-select v-model="fixed">
					<option :value="undefined">False</option>
					<option :value="'top'">Top</option>
					<option value="bottom">Bottom</option>
				</bulma-select>
			</bulma-form-field>

			<bulma-form-field is-horizontal label="Tab">
				<bulma-select v-model="tab" :options="['brand','start','end']" is-multiple />
			</bulma-form-field>
		</fieldset>
	</bulma-box>
</template>

<script lang="ts" setup>
	import {onBeforeMount, ref, shallowRef} from "vue";
	import {BulmaColour, BulmaNavbarItem, getBulmaColours} from "../../types";
	import BulmaNavbar from "../../vuebulma components/components/navbar/BulmaNavbar.vue";
	import BulmaBox from "../../vuebulma components/elements/BulmaBox.vue";
	import BulmaHeading from "../../vuebulma components/elements/BulmaHeading.vue";
	import BulmaImage from "../../vuebulma components/elements/BulmaImage.vue";
	import BulmaSelect from "../../vuebulma components/form/BulmaSelect.vue";
	import BulmaFormField from "../../vuebulma components/form/groups/BulmaFormField.vue";


	const colour = ref<BulmaColour>('default');
	const fixed = ref<false | 'top' | 'bottom'>(false);
	const space = ref<boolean>(false);
	const transparent = ref<boolean>(false);
	const tab = ref<any[]>([]);
	const shadow = ref(false);
	const boxed = ref(false);

	onBeforeMount(() => {
		const img = document.createElement('img');
		img.src = 'https://upload.wikimedia.org/wikipedia/commons/7/7b/DCUniverse.svg';
		img.style.height = '50px'
		start.value.push({
			type: 'html',
			display: img,
			isExpanded: false
		})

		const bats = <BulmaNavbarItem> ({
			type: 'component',
			display: BulmaImage,
			props: {
				src: 'https://www.svgrepo.com/show/485626/batman.svg'
			}
		});

		const supes = <BulmaNavbarItem> ({
			type: 'component',
			display: BulmaImage,
			props: {
				src: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Superman_shield.svg'
			}
		});
		const wonderWoman = <BulmaNavbarItem> ({
			type: 'component',
			display: BulmaImage,
			props: {
				src: 'https://www.svgrepo.com/show/303166/wonder-woman-logo.svg'
			},
			isExpanded: true
		});


		const logos = [bats, supes, wonderWoman];
		characters.value = ([
			{
				type: 'dropdown',
				display: 'Heroes',

				dropdown: {
					items: logos
				},
				isExpanded: true
			},
			{
				type: 'dropdown',
				display: 'Villains',
				isActive: true,
				dropdown: {
					isBoxed: true,
					isRight: true,
					items: ['Joker', null, 'Lex Luthor', null, 'Cheetah']
				}
			},
			{
				type: 'dropdown',
				display: 'Legends',
				dropdown: {
					isDropUp: true,
					isHoverable: true,
					items: <BulmaNavbarItem[]> [{
						type: 'component',
						display: BulmaHeading,
						props: {size: 6},
						slot: {default: 'You cutie..😘'}
					}]
				}
			}
		]);
	});
	const start = ref<BulmaNavbarItem[]>([]);
	const tags = ref(['Heroes', 'Villains', 'Legends']);

	const characters = shallowRef<BulmaNavbarItem[]>([]);
</script>

