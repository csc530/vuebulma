<template>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00d1b2 0%, #41b883 100%);">
		<v-bulma-level><!-- Main container -->
			<!-- Left side -->
			<template #left>
				<v-bulma-level-item>
					<p class="subtitle is-5">
						<strong>123</strong> posts
					</p>
				</v-bulma-level-item>
				<v-bulma-level-item>
					<div class="field has-addons">
						<p class="control">
							<input class="input" type="text" placeholder="Find a post">
						</p>
						<p class="control">
							<button class="button">
								Search
							</button>
						</p>
					</div>
				</v-bulma-level-item>
			</template>

			<!-- Right side -->
			<template #right>
				<v-bulma-level-item><strong>All</strong></v-bulma-level-item>
				<v-bulma-level-item><a>Published</a></v-bulma-level-item>
				<v-bulma-level-item><a>Drafts</a></v-bulma-level-item>
				<v-bulma-level-item><a>Deleted</a></v-bulma-level-item>
				<v-bulma-level-item><a class="button is-success">New</a></v-bulma-level-item>
			</template>
		</v-bulma-level>
	</v-bulma-box>
	<v-bulma-box style="background-image: linear-gradient(120deg, #00d1b2 0%, #41b883 100%);">
		<v-bulma-level is-mobile>
			<v-bulma-level-item>
				<div>
					<p class="heading">Tweets</p>
					<p class="title">3,456</p>
				</div>
			</v-bulma-level-item>
			<v-bulma-level-item>
				<div>
					<p class="heading">Following</p>
					<p class="title">123</p>
				</div>
			</v-bulma-level-item>
			<v-bulma-level-item>
				<div>
					<p class="heading">Followers</p>
					<p class="title">456K</p>
				</div>
			</v-bulma-level-item>
			<v-bulma-level-item>
				<div>
					<p class="heading">Likes</p>
					<p class="title">789</p>
				</div>
			</v-bulma-level-item>
		</v-bulma-level>
	</v-bulma-box>
</template>

<script setup lang="ts">
	import VBulmaLevel from "../../vbComponents/layouts/Level/VBulmaLevel.vue";
	import VBulmaLevelItem from "../../vbComponents/layouts/Level/VBulmaLevelItem.vue";
	import VBulmaBox from "../../vbComponents/elements/VBulmaBox.vue";
</script>