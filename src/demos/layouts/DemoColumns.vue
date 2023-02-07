<template>

	<bulma-box style="background-image: linear-gradient(120deg, #00d1b2 0%, #41b883 100%);">
		<bulma-column-group :size="2">
			<bulma-column v-for="i in 12">{{ i }} - Evenly-spaced</bulma-column>
		</bulma-column-group>
	</bulma-box>
	<bulma-box style="background-image: linear-gradient(120deg, #00d1b2 0%, #41b883 100%);">
		<bulma-heading>Sized columns</bulma-heading>
		<bulma-column-group is-multiline>
			<bulma-column size="half">
				<bulma-box>Half</bulma-box>
			</bulma-column>
			<bulma-column size="quarter">
				<bulma-box>quarter</bulma-box>
			</bulma-column>
			<bulma-column size="1/5">
				<bulma-box>fifth</bulma-box>
			</bulma-column>
			<bulma-column size="full">
				<bulma-box>full</bulma-box>
			</bulma-column>
			<bulma-column size="10">
				<bulma-box>Ten Twelfths</bulma-box>
			</bulma-column>
			<bulma-column size="2/3">
				<bulma-box>Two Thrids</bulma-box>
			</bulma-column>


		</bulma-column-group>
	</bulma-box>
	<bulma-box>
		<bulma-heading>Multiline columns</bulma-heading>

		<bulma-column-group is-multiline>
			<bulma-column class="" v-for="i in people">
				<bulma-box><q>{{ i.catchphrase }}</q></bulma-box>
			</bulma-column>
		</bulma-column-group>
	</bulma-box>

	<template v-if="people.length > 0">
		<bulma-box>
			<bulma-heading>Nested columns</bulma-heading>
			<bulma-column-group is-multiline>
				<bulma-column v-for="i in Math.round(people.length / 11)">
					<bulma-box>
						<pre>{{ people[i].first_name }}</pre>
						<bulma-column-group isMultiline>
							<bulma-column class="content" v-for="j in 3">
								<code>{{ people[people.length - 1 - j].catchphrase }}</code>
							</bulma-column>
						</bulma-column-group>
					</bulma-box>
				</bulma-column>
			</bulma-column-group>
		</bulma-box>

		<bulma-box>
			<bulma-heading>Horizontally centered columns</bulma-heading>

			<bulma-column-group is-centered is-multiline>
				<bulma-column size="3">
					<bulma-box><q>{{ people[21].email }}</q></bulma-box>
				</bulma-column>
				<bulma-column size="5">
					<bulma-box><q>{{ people[11].email }}</q></bulma-box>
				</bulma-column>
			</bulma-column-group>
		</bulma-box>
		<bulma-box>
			<bulma-heading>Vertically centered columns</bulma-heading>

			<bulma-column-group is-vcentered is-multiline>
				<bulma-column size="3">
					<bulma-box><p>{{ people[21].first_name + people[2].last_name }}
						<br/>
						<a>{{ people[23].email }}</a>
						<br/>Quote:
						<q>{{ people[7].catchphrase }}</q>
					</p>
					</bulma-box>
				</bulma-column>
				<bulma-column size="5">
					<bulma-box><q>{{ people[11].email }}</q></bulma-box>
				</bulma-column>
			</bulma-column-group>
		</bulma-box>

		<bulma-box>
			<bulma-heading>Column Gaps</bulma-heading>

			<bulma-column-group :gaps="4" is-centered is-multiline>
				<bulma-column v-for="i in 5">
					<bulma-box>{{ people[i].email }}</bulma-box>
				</bulma-column>
			</bulma-column-group>
			<bulma-column-group :gaps="8" is-centered is-multiline>
				<bulma-column v-for="i in 5">
					<bulma-box>{{ people[i].email }}</bulma-box>
				</bulma-column>
			</bulma-column-group>
			<bulma-column-group :gaps="false" is-centered is-multiline>
				<bulma-column v-for="i in 5">
					<bulma-box>{{ people[i].email }}</bulma-box>
				</bulma-column>
			</bulma-column-group>
		</bulma-box>
	</template>
</template>


<script setup lang="ts">
	import {ref} from "vue";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaHeading from "../../vbComponents/elements/BulmaHeading.vue";
	import BulmaColumnGroup from "../../vbComponents/layouts/Columns/BulmaColumnGroup.vue";
	import BulmaColumn from "../../vbComponents/layouts/Columns/BulmaColumn.vue";

	const people = ref([]);
	fetch("https://my.api.mockaroo.com/persons.json?key=d1b450c0").then(value => {
		(value.json().then(json => {
			console.log(json);
			for(let i = 0; i < 24; i++)
				people.value.push(json[i]);
		}));
	});

</script>

