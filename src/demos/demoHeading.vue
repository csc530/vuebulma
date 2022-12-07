<template>
	<bulma-box>
		<bulma-block>
			<bulma-heading tag="h2">Headings</bulma-heading>
			<BulmaHeading type="subtitle">And subheadings😉</BulmaHeading>
		</bulma-block>
		<BulmaBlock>
			<BulmaBlock>
				<!-- NO spacing -->

				<BulmaHeading size="1.0">1. Biggest Title</BulmaHeading>
				<BulmaHeading size="1.0" type="subtitle">1. and it's large subtitle counterpart</BulmaHeading>
			</BulmaBlock>
			<BulmaBlock>
				<BulmaHeading size="2" type="subtitle">2. Second largest subtitle, first</BulmaHeading>
				<BulmaHeading size="2">2. Big Title, second</BulmaHeading>
			</BulmaBlock>
			<BulmaBlock>
				<BulmaHeading :size="3">3. Pretty Big Title</BulmaHeading>
				<BulmaHeading :size="3" type="subtitle">3. Pretty Big SubTitle</BulmaHeading>
			</BulmaBlock>
		</BulmaBlock>

		<!-- Is spaced-->
		<BulmaBlock>
			<BulmaBlock>
				<BulmaHeading is-spaced size="4">4. Still a large title but</BulmaHeading>
				<BulmaHeading is-spaced size="4.0" type="subtitle">4. notice the spacing of this subtitle</BulmaHeading>
			</BulmaBlock>
			<BulmaBlock>
				<BulmaHeading is-spaced size="5">5. Smaller title</BulmaHeading>
				<BulmaHeading is-spaced size="5" type="subtitle">5. with its spaced Smaller subtitle</BulmaHeading>
			</BulmaBlock>
			<BulmaBlock>
				<BulmaHeading is-spaced size="6" type="subtitle">5. Smallest subtitle spaced on top of</BulmaHeading>
				<BulmaHeading is-spaced size="6">5. The Smallest title</BulmaHeading>
			</BulmaBlock>
		</BulmaBlock>
	</bulma-box>
</template>

<style scoped>

</style>

<script setup lang="ts">
import BulmaBox from "../components/containers/BulmaBox.vue";
import BulmaHeading from "../components/BulmaHeading.vue";</script>

