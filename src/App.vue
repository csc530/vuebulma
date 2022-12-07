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
		<BulmaHeading :type="'subtitle'">For Vue3 using Composition API and `setup`😁</BulmaHeading>
	</BulmaBox>

	<!-- Dropdown -->
	<bulma-box tag="section">
		<bulma-heading tag="h2">Dropdown</bulma-heading>
		<bulma-dropdown :content="dropdownList" alignment="right" item-tag="a">
			<button>Click Me!</button>
			<!--			todo: make it less clunky to button dropwdown class to parent element-->
			<template v-slot:dropdown-item="value">
				{{ value.data }}
			</template>
		</bulma-dropdown>
		<BulmaDropdown :content="['we\'re','left', 'aligned', 'and','🆙']" dropUp is-hoverable tag="p">
			<p class="button"><code>p</code> trigger</p>
		</BulmaDropdown>
		<bulma-dropdown :content="['you got a hover to see me', null, 'hey look a divider', undefined, '🤷🏿‍♂️']"
		                :on-click="false" is-hoverable>
			<p class="button">Hoverable but not clickable</p>
		</bulma-dropdown>
		.
	</bulma-box>

	<!--	Breadcrumb display -->
	<BulmaBox>
		<BulmaHeading tag="h2">Breadcrumbs</BulmaHeading>
		<BulmaBreadcrumb :list="breadcrumbList" alignment="is-centered" last-crumb-is-active separator="succeeds"
		                 size="large"/>
	</BulmaBox>

	<!--	Bulma Headings display -->
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

	<!--	Bulma Icons-->
	<BulmaBox>
		<BulmaHeading size="2">Icons</BulmaHeading>
		<bulma-heading size="3" type="subtitle">Using FontAwesome<small></small></bulma-heading>
		<!-- Icon basics-->
		<BulmaBlock>
			<BulmaIcon :icon="['fa-cross','fa-spaghetti-monster-flying','fa-brain','fa-brands fa-canadian-maple-leaf']"
			           prefix="fa-solid"/>
			<br/>
			<BulmaIcon icon="fa-solid fa-hat-wizard">Magically prefixes text with icons.</BulmaIcon>
			<br/>
			<BulmaIcon after-text icon="fa-solid fa-car">Or at the end of your content, however you'd like</BulmaIcon>
		</BulmaBlock>
		<!-- Flex Icons -->
		<BulmaBlock>
			<BulmaIcon flex icon="fa-person-running fa-solid">Flex Icons with text</BulmaIcon>
			<BulmaIcon flex icon="fa-square fa-solid">Essentially making them take up a line, flex instead of inline-flex,
				elements
			</BulmaIcon>
		</BulmaBlock>
		<!-- Icon colours-->
		<BulmaBlock>
			<!--				todo wrap light icons in dark background-->
			<BulmaHeading size="4">Icon Colours</BulmaHeading>
			<BulmaHeading size="5.0" type="subtitle">Default</BulmaHeading>
			<BulmaIcon v-for="colour in getColours()" :colour="colour" icon="fa-solid fa-star"/>
			<BulmaHeading size="5.0" type="subtitle">Dark</BulmaHeading>
			<BulmaIcon v-for="colour in getColours('dark')" :colour="colour" icon="fa-solid fa-phone"/>
			<BulmaHeading size="5.0" type="subtitle">Light</BulmaHeading>
			<BulmaIcon v-for="colour in getColours('light')" :colour="colour" icon="fa-solid fa-worm"/>

			<BulmaHeading size="4.0" type="title">Background Colours</BulmaHeading>
			<BulmaHeading size="5" type="subtitle">Default</BulmaHeading>
			<BulmaIcon v-for="colour in getColours('default')" :bg-colour="colour" icon="fa-solid fa-leaf"/>
			<BulmaHeading size="5" type="subtitle">Dark</BulmaHeading>
			<BulmaIcon v-for="colour in getColours('dark')" :bg-colour="colour" icon="fa-solid fa-bible"/>
			<BulmaHeading size="5" type="subtitle">Light</BulmaHeading>
			<BulmaIcon v-for="colour in getColours('light')" :bg-colour="colour" icon="fa-solid fa-earth"/>

			<BulmaHeading size="4.0" type="title">Mix N' Match</BulmaHeading>
			<template v-for="colour in getColours()">
				<BulmaIcon v-for="bg in getColours('dark')" :bg-colour="bg" :colour="colour" icon="fa-solid fa-atom"/>
			</template>
		</BulmaBlock>
		<!-- Icons Sizes-->
		<BulmaHeading size="4">Icon Sizes</BulmaHeading>
		<p>The <a href="https://bulma.io/documentation/elements/icon/#sizes">size prop</a> only affect the container and
			will position the icon within the center of it. To resize the icon is up to you.</p>
		<BulmaIcon container-size="small" icon="fa-solid fa-coffee fa-2xs"/>
		<BulmaIcon container-size="small" icon="fa-solid fa-coffee fa-xs"/>
		<BulmaIcon container-size="" icon="fa-solid fa-coffee fa-sm"/>
		<BulmaIcon container-size="default" icon="fa-solid fa-coffee"/>
		<BulmaIcon container-size="medium" icon="fa-solid fa-coffee fa-lg"/>
		<BulmaIcon container-size="large" icon="fa-solid fa-coffee fa-xl"/>
		<BulmaIcon container-size="large" icon="fa-solid fa-coffee fa-2xl"/>
		<br/>
		<bulma-block>
			<BulmaIcon :icon="['fas fa-camera fa-stack-1x',{icon:'fas fa-ban fa-stack-2x',colour:{colour:'danger'}}]"
			           afterText
			           container-size="large" stacked="fa-stack">
				Also support FontAwesome stacked icons
			</BulmaIcon>
		</bulma-block>
	</BulmaBox>
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
import {ref} from 'vue';
import BulmaBreadcrumb from './components/BulmaBreadcrumb.vue';
import BulmaHeading from './components/BulmaHeading.vue';
import BulmaIcon from './components/BulmaIcon.vue';
import BulmaBlock from './components/containers/BulmaBlock.vue';
import BulmaBox from './components/containers/BulmaBox.vue';
import BulmaDropdown from './components/containers/BulmaDropdown.vue';

import {BreadcrumbItem, Link, getColours} from './types/types';

//! Dropdown
const dropdownList = ['I', 'have', 'a', 'button', 'trigger', '😎'];

// !* BreadCrumb
const path = ref(window.location.pathname.split('/'));
path.value.shift();
//remove trailing slash if present and empty
if (path.value[path.value.length - 1] === '')
	path.value.pop();
path.value.unshift(window.location.hostname);
const breadcrumbList: BreadcrumbItem[] = path.value.map((item, index) => {
	const breadcrumb: BreadcrumbItem = {
		text: item,
		href: '/' + path.value.slice(1, index + 1).join('/'),
		isActive: false,
	};
	return breadcrumb;

});
breadcrumbList[0].href = '/';
breadcrumbList[breadcrumbList.length - 1].isActive = true;
//? generate long url path

if (window.location.pathname.split('/').length <= 4)
	window.location.href = '/my/Vue3/Bulma/component-library?value=foo&great=true';


// !* Card
const socks: (Link)[] = [
	{href: 'https://bulma.io', text: 'Bulma'},
	{href: 'https://vuejs.org', text: 'Vue'},
	{href: 'https://y.at/✝🧠🍁👽', text: 'Me'},
];
</script>