<template>
	<bulma-box style="background-image: linear-gradient(120deg, #00d1b2 0%, #41b883 100%);">
		<bulma-level><!-- Main container -->
			<!-- Left side -->
			<template #left>
				<bulma-level-item>
					<p class="subtitle is-5">
						<strong>123</strong> posts
					</p>
				</bulma-level-item>
				<bulma-level-item>
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
				</bulma-level-item>
			</template>

			<!-- Right side -->
			<template #right>
				<bulma-level-item><strong>All</strong></bulma-level-item>
				<bulma-level-item><a>Published</a></bulma-level-item>
				<bulma-level-item><a>Drafts</a></bulma-level-item>
				<bulma-level-item><a>Deleted</a></bulma-level-item>
				<bulma-level-item><a class="button is-success">New</a></bulma-level-item>
			</template>
		</bulma-level>
	</bulma-box>
	<bulma-box style="background-image: linear-gradient(120deg, #00d1b2 0%, #41b883 100%);">
		<bulma-level is-mobile>
			<bulma-level-item>
				<div>
					<p class="heading">Tweets</p>
					<p class="title">3,456</p>
				</div>
			</bulma-level-item>
			<bulma-level-item>
				<div>
					<p class="heading">Following</p>
					<p class="title">123</p>
				</div>
			</bulma-level-item>
			<bulma-level-item>
				<div>
					<p class="heading">Followers</p>
					<p class="title">456K</p>
				</div>
			</bulma-level-item>
			<bulma-level-item>
				<div>
					<p class="heading">Likes</p>
					<p class="title">789</p>
				</div>
			</bulma-level-item>
		</bulma-level>
	</bulma-box>
</template>

<script setup lang="ts">

	import BulmaLevel from "../../vbComponents/layouts/Level/BulmaLevel.vue";
	import BulmaLevelItem from "../../vbComponents/layouts/Level/BulmaLevelItem.vue";
	import BulmaBox from "../../vbComponents/elements/BulmaBox.vue";
</script>