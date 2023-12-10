<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00d1b2 0%, #41b883 100%);">
		<v-bulma-column-group :size="2">
			<v-bulma-column v-for="i in 12">{{ i }} - Evenly-spaced</v-bulma-column>
		</v-bulma-column-group>
	</v-bulma-box>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00d1b2 0%, #41b883 100%);">
		<v-bulma-heading>Sized columns</v-bulma-heading>
		<v-bulma-column-group is-multiline>
			<v-bulma-column size="half">
				<v-bulma-box>Half</v-bulma-box>
			</v-bulma-column>
			<v-bulma-column size="quarter">
				<v-bulma-box>quarter</v-bulma-box>
			</v-bulma-column>
			<v-bulma-column size="1/5">
				<v-bulma-box>fifth</v-bulma-box>
			</v-bulma-column>
			<v-bulma-column size="full">
				<v-bulma-box>full</v-bulma-box>
			</v-bulma-column>
			<v-bulma-column size="10">
				<v-bulma-box>Ten Twelfths</v-bulma-box>
			</v-bulma-column>
			<v-bulma-column size="2/3">
				<v-bulma-box>Two Thrids</v-bulma-box>
			</v-bulma-column>


		</v-bulma-column-group>
	</v-bulma-box>
	<v-bulma-box>
		<v-bulma-heading>Multiline columns</v-bulma-heading>

		<v-bulma-column-group is-multiline>
			<v-bulma-column class="" v-for="i in people">
				<v-bulma-box><q>{{ i.catchphrase }}</q></v-bulma-box>
			</v-bulma-column>
		</v-bulma-column-group>
	</v-bulma-box>

	<template v-if="people.length > 0">
		<v-bulma-box>
			<v-bulma-heading>Nested columns</v-bulma-heading>
			<v-bulma-column-group is-multiline>
				<v-bulma-column v-for="i in Math.round(people.length / 11)">
					<v-bulma-box>
						<pre>{{ people[i].first_name }}</pre>
						<v-bulma-column-group isMultiline>
							<v-bulma-column class="content" v-for="j in 3">
								<code>{{ people[people.length - 1 - j].catchphrase }}</code>
							</v-bulma-column>
						</v-bulma-column-group>
					</v-bulma-box>
				</v-bulma-column>
			</v-bulma-column-group>
		</v-bulma-box>

		<v-bulma-box>
			<v-bulma-heading>Horizontally centered columns</v-bulma-heading>

			<v-bulma-column-group is-centered is-multiline>
				<v-bulma-column size="3">
					<v-bulma-box><q>{{ people[21].email }}</q></v-bulma-box>
				</v-bulma-column>
				<v-bulma-column size="5">
					<v-bulma-box><q>{{ people[11].email }}</q></v-bulma-box>
				</v-bulma-column>
			</v-bulma-column-group>
		</v-bulma-box>
		<v-bulma-box>
			<v-bulma-heading>Vertically centered columns</v-bulma-heading>

			<v-bulma-column-group is-vcentered is-multiline>
				<v-bulma-column size="3">
					<v-bulma-box><p>{{ people[21].first_name + people[2].last_name }}
						<br/>
						<a>{{ people[23].email }}</a>
						<br/>Quote:
						<q>{{ people[7].catchphrase }}</q>
					</p>
					</v-bulma-box>
				</v-bulma-column>
				<v-bulma-column size="5">
					<v-bulma-box><q>{{ people[11].email }}</q></v-bulma-box>
				</v-bulma-column>
			</v-bulma-column-group>
		</v-bulma-box>

		<v-bulma-box>
			<v-bulma-heading>Column Gaps</v-bulma-heading>

			<v-bulma-column-group :gaps="4" is-centered is-multiline>
				<v-bulma-column v-for="i in 5">
					<v-bulma-box>{{ people[i].email }}</v-bulma-box>
				</v-bulma-column>
			</v-bulma-column-group>
			<v-bulma-column-group :gaps="8" is-centered is-multiline>
				<v-bulma-column v-for="i in 5">
					<v-bulma-box>{{ people[i].email }}</v-bulma-box>
				</v-bulma-column>
			</v-bulma-column-group>
			<v-bulma-column-group :gaps="false" is-centered is-multiline>
				<v-bulma-column v-for="i in 5">
					<v-bulma-box>{{ people[i].email }}</v-bulma-box>
				</v-bulma-column>
			</v-bulma-column-group>
		</v-bulma-box>
	</template>
</template>


<script setup lang="ts">
	import {ref} from "vue";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaHeading from "../../vbComponents/elements/VBulmaHeading.vue";
	import VBulmaColumnGroup from "../../vbComponents/layouts/Columns/VBulmaColumnGroup.vue";
	import VBulmaColumn from "../../vbComponents/layouts/Columns/VBulmaColumn.vue";

	const people = ref([]);
	fetch("https://my.api.mockaroo.com/persons.json?key=d1b450c0").then(value => {
		(value.json().then(json => {
			console.log(json);
			for(let i = 0; i < 24; i++)
				people.value.push(json[i]);
		}));
	});

</script>

