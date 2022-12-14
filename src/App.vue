<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img alt="Vite logo" class="logo" src="https://vitejs.dev/logo.svg" width="150" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img alt="Vue logo" class="logo vue"
			     src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="150" />
		</a>
	</div>
	<a href="https://bulma.io/" target="_blank">
		<img alt="Bulma logo" src="https://bulma.io/images/bulma-logo.png" width="200" />
	</a>

	<BulmaFormField is-horizontal label="Testing 123">
		<BulmaFormControlGroup has-addons>
			<BulmaFormControl>
				<BulmaInput placeholder="Enter your email" />
			</BulmaFormControl>
			<BulmaFormControl>
				<BulmaButton color="primary">Subscribe</BulmaButton>
			</BulmaFormControl>
		</BulmaFormControlGroup>
	</BulmaFormField>

</template>

<style scoped>
	.logo {
		height: 6em;
		padding: 1.5em;
		will-change: filter;
	}

	.logo:hover {
		filter: drop-shadow(0 0 2em #646CFFAA);
	}

	.logo.vue:hover {
		filter: drop-shadow(0 0 2em #42B883AA);
	}
</style>

<script lang="ts" setup>
	import BulmaButton from './components/button/BulmaButton.vue';
	import BulmaInput from './components/form/BulmaInput.vue';
	import BulmaFormControl from './components/form/groups/BulmaFormControl.vue';
	import BulmaFormControlGroup from './components/form/groups/BulmaFormControlGroup.vue';
	import BulmaFormField from './components/form/groups/BulmaFormField.vue';</script>