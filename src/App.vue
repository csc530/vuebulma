<template>
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img alt="Vite logo" class="logo" src="/src/assets/vite.svg" />
		</a>
		<a href="https://vuejs.org/" target="_blank">
			<img alt="Vue logo" class="logo vue" src="/src/assets/vue.svg" />
		</a>
	</div>
	<a href="https://bulma.io/" target="_blank">
	<img alt="Bulma logo" src="https://bulma.io/images/bulma-logo.png" width="150"/>
	</a>
	<!--	Initial BulmaHeading display -->
	<BulmaBox>
		<BulmaHeading tag="h1">My Bulma Component Library</BulmaHeading>
		<BulmaHeading :type="'subtitle'">For Vue3 using Composition API and `setup`😁</BulmaHeading>
	</BulmaBox>
	
	<!--	Breadcrumb display -->
	<BulmaBox>
		<BulmaHeading tag="h2">Breadcrumbs</BulmaHeading>
		<BulmaBreadcrumb :list="breadcrumbList" alignment="is-centered" last-crumb-is-active separator="succeeds" />
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
		
		<BulmaBlock>
			<!-- Is spaced-->
			<BulmaBlock>
				<BulmaHeading is-spaced size="4.0">4. Still a large title but</BulmaHeading>
				<BulmaHeading is-spaced size="4.0" type="subtitle">4. notice the spacing of this subtitle</BulmaHeading>
			</BulmaBlock>
			<BulmaBlock>
				<BulmaHeading is-spaced size="5">5. Smaller title</BulmaHeading>
				<BulmaHeading is-spaced size="5" type="subtitle">5. with its spaced Smaller subtitle</BulmaHeading>
			</BulmaBlock>
			<BulmaBlock>
				<BulmaHeading is-spaced size="6" type="subtitle">5. Smallest subtitle on top of</BulmaHeading>
				<BulmaHeading is-spaced size="6">5. The Smallest title</BulmaHeading>
			</BulmaBlock>
		</BulmaBlock>
	</bulma-box>
	
	<BulmaBox>
		<BulmaHeading size="2">Icons</BulmaHeading>
		<BulmaIcon/>
	</BulmaBox>
</template>

<style scoped>
.logo {
	height      : 6em;
	padding     : 1.5em;
	will-change : filter;
}

.logo:hover {
	filter : drop-shadow(0 0 2em #646CFFAA);
}

.logo.vue:hover {
	filter : drop-shadow(0 0 2em #42B883AA);
}
</style>

<script lang="ts" setup>
	import {ref} from 'vue';
	import BulmaBreadcrumb from './components/BulmaBreadcrumb.vue';
	import BulmaCard from './components/BulmaCard.vue';
	import BulmaHeading from './components/BulmaHeading.vue';
	import BulmaIcon from './components/BulmaIcon.vue';
	import BulmaImage from './components/BulmaImage.vue';
	import BulmaBlock from './components/containers/BulmaBlock.vue';
	import BulmaBox from './components/containers/BulmaBox.vue';
	
	import {BreadcrumbItem, Link} from './models';
	
	const png = import('./assets/made-with-bulma.png');
	
	// !* BreadCrumb
	const path = ref(window.location.pathname.split('/'));
	path.value.shift();
	//remove trailing slash if present and empty
	if(path.value[path.value.length - 1] === '')
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
	if(window.location.pathname.split('/').length < 5)
		window.location.href = '/my/Bulma/component-library/made=by=yours=truly/Christofer-Cousins/Notice.how.obsencenly.long.this.path.is/wow_this_is_a_alot/0/1/234/55/66/7/8/9?value=foo&great=true';
	
	
	// !* Card
	const socks: (Link)[] = [
		{href: 'https://bulma.io', text: 'Bulma'},
		{href: 'https://vuejs.org', text: 'Vue'},
		{href: 'https://y.at/✝🧠🍁👽', text: 'Me'},
	];
	console.log(socks);
</script>