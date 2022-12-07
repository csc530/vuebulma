<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img alt="Vite logo" class="logo" src="https://vitejs.dev/logo.svg" width="150"/>
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img alt="Vue logo" class="logo vue" src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
			     width="150"/>
		</a>
	</div>
	<a href="https://bulma.io/" target="_blank">
		<img alt="Bulma logo" src="https://bulma.io/images/bulma-logo.png" width="200"/>
	</a>
	<!--	Initial BulmaHeading display -->
	<BulmaBox>
		<BulmaHeading tag="h1">My Bulma Component Library</BulmaHeading>
		<BulmaHeading :type="'subtitle'">For Vue3 using Composition API and <code>setup</code>😁</BulmaHeading>
	</BulmaBox>

	<demo-message/>
	<demo-menu/>
	<demo-image/>
	<DemoIcon/>
	<demo-dropdown/>
	<demo-breadcrimb/>
	<demo-dropdown/>
	<demo-heading/>

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
import BulmaHeading from './components/BulmaHeading.vue';
import BulmaBox from './components/containers/BulmaBox.vue';

import {Link} from './types/types';
import DemoImage from "./demos/demoImage.vue";
import DemoDropdown from "./demos/demoDropdown.vue";
import DemoBreadcrimb from "./demos/demoBreadcrumb.vue";
import DemoHeading from "./demos/demoHeading.vue";
import DemoIcon from "./demos/demoIcon.vue";
import DemoMenu from "./demos/demoMenu.vue";
import DemoMessage from "./demos/demoMessage.vue";

// !* Card
const socks: (Link)[] = [
	{href: 'https://bulma.io', text: 'Bulma'},
	{href: 'https://vuejs.org', text: 'Vue'},
	{href: 'https://y.at/✝🧠🍁👽', text: 'Me'}
];
</script>