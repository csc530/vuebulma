# vbNavbar

[Bulma Documentation](https://bulma.io/documentation/components/navbar/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/containers/navbar/BulmaNavbar.vue)

The Navbar component with native click handler to open and close
hamburger menus.

## Slots

- start-items
- middle-items
- end-items

Each of these slots are optional and are meant to format their related items within the navbar. the item themselves are
bound to `data` in the slot.

Example:

```vue

<template>
	<vbNavbar :start-items="items">
		<template #start-items="{ data }">
			<h1>{{ data.title }}</h1>
			<pre>{{ data.important }}</pre>
		</template>
	</vbNavbar>
</template>

<script setup>
	import {ref} from 'vue'
	import {vbNavbar} from '@csc530/vuebulma'

	const items = ref([
		{title: 'Hello', important: true},
		{title: 'World', important: false}
	]);
</script>
```

### Recommendation

If you'd like to pass different types of elements such as HTML or other vue components. You can use the `v-if` directive
to display the correct element.

Example: using dummy list

```vue

<template>
	<vbNavbar :end-items="items">
		<template #end-items="{ data }">
			<h1 v-if="data===1">{{ data.title }}</h1>
			<ul v-if="data === 2">
				<li>This is not a great way</li>
				<li>to do this</li>
				<li>But works for smaller and static elements</li>
			</ul>
		</template>
	</vbNavbar>
</template>

<script setup>
	import {ref} from 'vue'
	import {vbNavbar} from "@csc530/vuebulma";

	const items = ref([1, 2]);
</script>
```

## Props

### activateOnClick

Type: `boolean` | `'single'`| `undefined`

Default: `'single'`

Whether to activate the clicked navbar item. If `single` is passed, only one item will be active at a time.

### boxedDropdowns

Type: `boolean` | `undefined`

Whether all navbar dropdowns should have a boxed style.

### colour

Type: [`BulmaColour`](../types/common_types.md#BulmaColour) | `undefined`

The colour of the navbar.

### [startItems](https://bulma.io/documentation/components/navbar/#navbar-brand)

Type: `any[]`

Items which are always visible shown on the left hand side (start/brand) of the navbar. Corresponds to
the `navbar-brand`.



### middleItems

Type: `any[]`

The items to be displayed in the middle of the navbar. This refers to the `navbar-start` items in the `navbar-menu`
according to the [Bulma documentation](https://bulma.io/documentation/components/navbar/#navbar-start-and-navbar-end).

### endItems

Type: `any[]`

The items to be displayed in the end of the navbar. This refers to the `navbar-end` items in the `navbar-menu` according
to the [Bulma documentation](https://bulma.io/documentation/components/navbar/#navbar-start-and-navbar-end).

### startItemTag

Type: `div` | `a`

Default: `a`

Tag to wrap start items in

### middleItemTag

Type: `div` | `a`

Default: `a`

The tag to be used for the middle items

### endItemTag

Type: `div` | `a`

Default: `a`

The tag to be used for the end items.

### [isTransparent](https://bulma.io/documentation/components/navbar/#transparent-navbar)

_Requires [colour](#colour) to _really_ be noticed_

Type: `boolean` | `undefined`

Default: `false`

> This will remove any hover or active background from the navbar items.
>
> [Bulma Documentation](https://bulma.io/documentation/components/navbar/#transparent-navbar)

### [isSpaced](https://bulma.io/documentation/components/navbar/#navbar-helper-classes)

Type: `boolean` | `undefined`

Default: `false`

Whether the navbar should have increased spacing around its borders

### tabbedItems

Type: `boolean` | `('brand' | 'start' | 'end')[]`

Default: `false`

Determines if the navbar items will have a tabbed style. If true all items will be tabbed and if false all items will
not be tabbed.

If an array is passed, the items will be tabbed based on the navbar section names.

For example, if `['brand', 'end']` is passed, the brand items and end items will be tabbed.

### [isFixed](https://bulma.io/documentation/components/navbar/#fixed-navbar)

Type: `top` | `bottom` | `false`,

Default: `false`

Determines if the navbar should be fixed to the top or bottom of the page. If `false` the navbar will not be fixed. This
will also add the `is-fixed-top` or `is-fixed-bottom` class to the document's `html` element.

### hasShadow

Type: `boolean` | `undefined`

Whether the navbar should have a shadow.

## Additional information

### Active items

If any navbar item has an `isActive` attribute it will determine if the item is active or not. Like in
the [`NavbarItem`](../types/BulmaNavbarItem.md#isactive) type.

### Navbar items

When working with the `BulmaNavbar` component, you can use the [`BulmaNavbarItem`](../types/BulmaNavbarItem.md) type
when passing in items.
It can help render components, dropdowns, or html, while easily maximizing bulma's capabilities

Examples:

Component

```vue

<template>
	<vbNavbar :middle-items="items" />
</template>

<script lang="ts" setup>
	import {BulmaNavBarItem} from '@csc530/vuebulma/types'
		//If you are going to dynamically render component from component definitions, it must be explicitly imported
		import {vbImage, vbNavbar} from "@csc530/vuebulma";
		import myCustomComponent from "./MyCustomComponent.vue";

	const customComponent: BulmaNavBarItem = {
		type: 'component',
		display: myCustomComponent,
		// to apply component props/attributes, use the props property
		props: {
			customProp: true,
			cutomProp2: 'hello'
		}
	};
	const bulmaImg = {
			type: 'component',
			component: vbImage,
			props: {src: 'https://bulma.io/images/bulma-logo.png'},
	};

	const items: BulmaNavBarItem[] = [customComponent, bulmaImg];
</script>
```

HTML

```vue

<template>
	<vbNavbar :start-items="items" />
</template>

<script lang="ts" setup>
	import {BulmaNavBarItem} from '@csc530/vuebulma/types';
	import {vbNavbar} from "@csc530/vuebulma";

	const fancyButton = document.createElement('button');
	fancyButton.innerText = 'Fancy Button';
	fancyButton.classList.add('button', 'is-primary');
	fancyButton.style.border = 'thick #ccad46 ridge';

	const items: BulmaNavBarItem[] = [
		{type: 'html', display: document.createElement('a')},
		{type: 'html', display: fancyButton}
	];
</script>
```

This is  **not *highly* recommended** as the HTML
is [basically injected into the DOM](https://github.com/csc530/vuebulma/blob/main/./src/components/containers/navbar/BulmaNavbarItem.vue#L65).

Dropdown

```vue

<template>
	<vbNavbar :end-items="items" />
</template>

<script lang="ts" setup>
	import {BulmaNavBarItem} from '@csc530/vuebulma/types';
	import {vbNavbar} from "@csc530/vuebulma";

	const dropdown: BulmaNavBarItem = {
		type: 'dropdown',
		display: 'A Dropdown',
		dropdown: {
			items: ['item1', 'item2', 'item3'],
			isHoverable: true,
			isBoxed: true
		}
	};

	const items: BulmaNavBarItem[] = [dropdown];
</script>
```