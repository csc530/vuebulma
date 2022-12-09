# Bulma component library for Vue3

![Made with Bulma](https://img.shields.io/badge/made%20with-Bulma-00d1b2?style=roundyed-square)

## Disclaimer

This package is very much still under active development. It is not recommended to use this in production. Feel free to
help or report any issues😃.

My attempt at creating a Vue component library using Bulma that's compatible with Vue 3, _and_ it's composition api.
I really love Bulma, and it's modern styling using CSS without JavaScript. It's definitely my bias over Bootstrap now😅.

## Installation

`npm install @csc530/vuebulma`

`yarn add @csc530/vuebulma`

## Usage

```javascript
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

## Documentation

### Navbar

When working with the `BulmaNavbar` component, you can use the `BulmaNavbarItem` helper type when passing in items. This
type has the isComponent property to render passed in Vue components as is to the navbar.
ex.

```vue

<template>
	<BulmaNavbar :start-items="items"/>
</template>

<script lang="ts" setup>
	// Import the type
	import {NavBarItem} from '@csc530/vuebulma/types';
	import {myCustomComponent} from './myCustomComponent.vue';

	const myComponent = myCustomComponent;
	// Add `isComponent` property to the component
	// This will render the component as is in the navbar
	myComponent.isComponent = true;

	const items: NavBarItem[] = [myComponent];
</script>
```

or you can create HTMLElements and render them as such.

```vue

<template>
	<BulmaNavbar :start-items="items"/>
</template>

<script lang="ts" setup>
	import {NavBarItem} from '@csc530/vuebulma/types';

	const fancyButton = document.createElement('button');
	fancyButton.innerText = 'Fancy Button';
	fancyButton.classList.add('button', 'is-primary');
	fancyButton.style.border = 'thick #ccad46 ridge';

	// Navbar will test if it's an HTMLElement
	// if so render it as is
	const items: NavBarItem[] = [
		document.createElement('a'),
		fancyButton
	];
</script>
```

This is  **not *highly* recommended** as the HTML
is [basically injected into the DOM](./src/components/containers/navbar/BulmaNavbarItem.vue?line=39).

---
I highly recommend setting the `tag` prop whenever possible to reduce the amount of **non-semantic** `div` tags in your
HTML.

**Need scoped (or global) import of Bulma's CSS/SASS/... when using components.** I kept the import of the actual css
separate (*now*).

## Components

- Dropdown
- Block
- Box
- Breadcrumb
- Icon
- Title => `BulmaHeading`

more coming soon