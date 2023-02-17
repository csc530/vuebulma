<template>
	<bulma-box style="background-image: linear-gradient(120deg, #009a7d 0%, #5cffb9 100%);">
		<bulma-tile context="ancestor">
			<bulma-tile is-vertical size="8.0">

				<bulma-tile>
					<bulma-tile context="parent" is-vertical>
						<bulma-tile context="child">
							<bulma-notification colour="primary">
								<p class="title">Vertical...</p>
								<p class="subtitle">Top tile</p>
							</bulma-notification>
						</bulma-tile>
						<article class="tile is-child notification is-warning">
							<p class="title">...tiles</p>
							<p class="subtitle">Bottom tile</p>
						</article>
					</bulma-tile>

					<bulma-tile context="parent">
						<bulma-tile context="child">
							<bulma-notification colour="info">
								<p class="title">Middle tile</p>
								<p class="subtitle">With an image</p>
								<figure class="image is-4by3">
									<img src="https://bulma.io/images/placeholders/640x480.png">
								</figure>
							</bulma-notification>
						</bulma-tile>
					</bulma-tile>
				</bulma-tile>

				<bulma-tile context="parent">
					<article class="tile is-child notification is-danger">
						<p class="title">Wide tile</p>
						<p class="subtitle">Aligned with the right tile</p>
						<div class="content">
							<!-- Content -->
						</div>
					</article>
				</bulma-tile>
			</bulma-tile>

			<bulma-tile context="parent">
				<article class="tile is-child notification is-success">
					<div class="content">
						<p class="title">Tall tile</p>
						<p class="subtitle">With even more content</p>
						<div class="content">
							<!-- Content -->
						</div>
					</div>
				</article>
			</bulma-tile>
		</bulma-tile>
	</bulma-box>
</template>
<script lang="ts" setup>
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
	import BulmaNotification from "../../vbComponents/elements/BulmaNotification.vue";
	import BulmaTile from "../../vbComponents/layouts/Tile/BulmaTile.vue";</script>