# BulmaNavbar

[Bulma Documentation](https://bulma.io/documentation/components/navbar/)
[Component source](../../src/components/containers/navbar/BulmaNavbar.vue)

The Navbar component with native click handler to open and close
hamburger menus.

## Slots

- start-items
- middle-items
- end-items

Each of these slots are optional and are meant to format their related items within the navbar. the item themselves are
bound to `data` in the slot.

Example:

```vue:line-numbers
<template>
	<BulmaNavbar :start-items="items">
		<template #start-items="{ data }">
			<h1>{{ data.title }}</h1>
			<pre>{{ data.important }}</pre>
		</template>
	</BulmaNavbar>
</template>

<script setup>
	import {ref} from 'vue'
	import {BulmaNavbar} from '@csc530/vuebulma'

	const items = ref([
		{title: 'Hello', important: true},
		{title: 'World', important: false}
	]);
</script>
```

## Props

### colour

Type: [`BulmaColour`](../types/common_types.md#BulmaColour) | `undefined`

The colour of the navbar.

### [startItems](https://bulma.io/documentation/components/navbar/#navbar-brand)

Type: `any[]`

Items which are always visible shown on the left hand side (start/brand) of the navbar. Corresponds to
the `navbar-brand`.

### startItemTag

Type: `div` | `a`

Default: `a`

Tag to wrap brand items in

### middleItems

Type: `any[]`

The items to be displayed in the middle of the navbar. This refers to the `navbar-start` items in the `navbar-menu`
according to the [Bulma documentation](https://bulma.io/documentation/components/navbar/#navbar-start-and-navbar-end).

### endItems

Type: `any[]`

The items to be displayed in the end of the navbar. This refers to the `navbar-end` items in the `navbar-menu` according
to the [Bulma documentation](https://bulma.io/documentation/components/navbar/#navbar-start-and-navbar-end).

### middleItemTag

Type: `div` | `a`

Default: `a`

The tag to be used for the middle items. Defaults to `a`.

### endItemTag

Type: `div` | `a`

Default: `a`

The tag to be used for the end items.

### [isTransparent](https://bulma.io/documentation/components/navbar/#transparent-navbar)

Type: `boolean` | `undefined`

Default: `false`

Whether the navbar should have a transparent background (colour).

### [isSpaced](https://bulma.io/documentation/components/navbar/#navbar-helper-classes)

Type: `boolean` | `undefined`

Default: `false`

Whether the navbar should have an increased spacing between the items.

### isTab

Type: `boolean` | `menu` | `start` | `end` | `brand` | `brand&end` | `all`

Default: `false`

Determines if the navbar items will have a tabbed style. If true all items will be tabbed and if false all items will
not be tabbed. If a string is passed, the navbar items will be tabbed according to the string.

If the string is `menu` string will tab the `navbar-menu` items and the `start` string will tab the `navbar-start`
items and so on and so forth.

### [isFixed](https://bulma.io/documentation/components/navbar/#fixed-navbar)

Type: `top` | `bottom` | `false`,

Default: `false`

Determines if the navbar should be fixed to the top or bottom of the page. If `false` the navbar will not be fixed. This
will also add the `is-fixed-top` or `is-fixed-bottom` class to the document's `html` element.

### activateOnClick

Type: `boolean` | `singly`

Default: `false`

Whether to activate the navbar items on click. If `singly` is passed, only one item will be active at a time.

## Additional information

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
is [basically injected into the DOM](../.././src/components/containers/navbar/BulmaNavbarItem.vue#L39).