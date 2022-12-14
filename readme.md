# Bulma component library for Vue3

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/not-a-bug-a-feature.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)

![Made with Bulma](https://img.shields.io/badge/made%20with-Bulma-00d1b2?style=roundyed-square)
![npm](https://img.shields.io/npm/dw/@csc530/vuebulma?label=npm%20downloads)

### [Changelog](docs/changelog.md)

## Disclaimer

Developed with/for Vue v3.2.45 and Bulma v0.9.4

This package is very much still under active development. It is not recommended to use this in production. Feel free to
help or report any issues😃.

My attempt at creating a Vue component library using Bulma that's compatible with Vue 3, _and_ it's composition api.
I really love Bulma, and it's modern styling using CSS without JavaScript. It's definitely my bias over Bootstrap now😅.

## Installation

`npm install @csc530/vuebulma`

`yarn add @csc530/vuebulma`

## Usage

### Global

```typescript
// main.js

import {createApp} from 'vue'
import App from './App.vue'

// Import the library
import {vuebulma} from '@csc530/vuebulma'

const app = createApp(App)
// Use the library
app.use(vuebulma)
app.mount('#app')
```

### Local

```vue

<template>
	<!-- Use Bulma component-->
	<BulmaHeading>I'm a Bulma styled heading</BulmaHeading>
</template>

<script lang="ts" setup>
	// import the component you want to use
	import {BulmaHeading} from '@csc530/vuebulma'
</script>
```

## Documentation

### Bulma CSS/style

This library is like a wrapper for Bulma and does not modify any of its CSS if you need help using Bulma or its classes,
refer to the [Bulma documentation](https://bulma.io/documentation/).

### Addition

This library adds some built-in JS to make Bulma's styling and classes work seamlessly
like [appending is-active](/src/components/containers/BulmaDropdown.vue#L4) to a
clicked [dropwdown](https://bulma.io/documentation/components/dropdown/#hoverable-or-toggable)

### Navbar

When working with the `BulmaNavbar` component, you can use the `BulmaNavbarItem` helper type when passing in items. This
type has the isComponent property to render passed in Vue components as is to the navbar.

```vue

<template>
	<BulmaNavbar :items="items" />
</template>

<script lang="ts" setup>
	import {BulmaNavBarItem} from '@csc530/vuebulma/types'
	//If you are going to dynamically render component from component definitions, it must be explicitly imported
	import {BulmaImage} from "@csc530/vuebulma";
	import myCustomComponent from "./MyCustomComponent.vue";

	const customComponent = {
		component: 'myCustomComponent',
		// to apply component props/attributes, use the props property
		isComponent: true,
		props: {
			customProp: true,
			cutomProp2: 'hello'
		}
	};
	const bulmaImg = {
		component: BulmaImage,
		props: {src: 'https://bulma.io/images/bulma-logo.png'},
		isComponent: true
	};

	const items: BulmaNavBarItem[] = [customComponent, bulmaImg];
</script>
```

Or, you can create
HTMLElements and render them as such.

```vue

<template>
	<BulmaNavbar :start-items="items" />
</template>

<script lang="ts" setup>
	import {BulmaNavBarItem} from '@csc530/vuebulma/types';

	const fancyButton = document.createElement('button');
	fancyButton.innerText = 'Fancy Button';
	fancyButton.classList.add('button', 'is-primary');
	fancyButton.style.border = 'thick #ccad46 ridge';

	// Navbar will test if it's an HTMLElement
	// if so render it as is
	const items: BulmaNavBarItem[] = [
		document.createElement('a'),
		fancyButton
	];
</script>
```

This is  **not *highly* recommended** as the HTML
is [basically injected into the DOM](./src/components/containers/navbar/BulmaNavbarItem.vue#L39).

---
I highly recommend setting the `tag` prop whenever possible to reduce the amount of [
*non-semantic*](https://developer.mozilla.org/en-US/docs/Glossary/semantics#semantics_in_html) `div` tags in your
HTML.

**Need scoped (or global) import/`<link/>` of Bulma's CSS/SASS/... when using components.** I kept the import of the
actual css
separate (*now*).

## Components

- Dropdown
- Block
- Box
- Breadcrumb
- Icon
- Title => [`BulmaHeading`](./src/components/BulmaHeading.vue)
- Navbar
- Image
- Menu
- Message

more coming soon