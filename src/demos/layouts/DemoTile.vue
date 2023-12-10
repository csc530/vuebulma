<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #009a7d 0%, #5cffb9 100%);">
		<v-bulma-tile context="ancestor">
			<v-bulma-tile is-vertical size="8.0">

				<v-bulma-tile>
					<v-bulma-tile context="parent" is-vertical>
						<v-bulma-tile context="child">
							<v-bulma-notification colour="primary">
								<p class="title">Vertical...</p>
								<p class="subtitle">Top tile</p>
							</v-bulma-notification>
						</v-bulma-tile>
						<article class="tile is-child notification is-warning">
							<p class="title">...tiles</p>
							<p class="subtitle">Bottom tile</p>
						</article>
					</v-bulma-tile>

					<v-bulma-tile context="parent">
						<v-bulma-tile context="child">
							<v-bulma-notification colour="info">
								<p class="title">Middle tile</p>
								<p class="subtitle">With an image</p>
								<figure class="image is-4by3">
									<img src="https://bulma.io/images/placeholders/640x480.png">
								</figure>
							</v-bulma-notification>
						</v-bulma-tile>
					</v-bulma-tile>
				</v-bulma-tile>

				<v-bulma-tile context="parent">
					<article class="tile is-child notification is-danger">
						<p class="title">Wide tile</p>
						<p class="subtitle">Aligned with the right tile</p>
						<div class="content">
							<!-- Content -->
						</div>
					</article>
				</v-bulma-tile>
			</v-bulma-tile>

			<v-bulma-tile context="parent">
				<article class="tile is-child notification is-success">
					<div class="content">
						<p class="title">Tall tile</p>
						<p class="subtitle">With even more content</p>
						<div class="content">
							<!-- Content -->
						</div>
					</div>
				</article>
			</v-bulma-tile>
		</v-bulma-tile>
	</v-bulma-box>
</template>
<script lang="ts" setup>
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
	import VBulmaNotification from "../../vbComponents/elements/VBulmaNotification.vue";
	import VBulmaTile from "../../vbComponents/layouts/VBulmaTile.vue";
</script>