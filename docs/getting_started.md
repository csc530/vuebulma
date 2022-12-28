# Getting Started

The *vuebulma* package is made to make Bulma development easier simplify it's learning curve on where and which elements
do classes apply.

Developed with/for Vue v3.2.45 and Bulma v0.9.4

## WARNING

This package is still under very active development and is not stable by any means and is in pre-release stages. Feel
free to help or report any issues😄.

## Installation

This package is hosted on the npm registry open in new window, and it's source code is available on GitHub open in new
window.

```ps1:no-line-numbers
npm install @csc530/vuebulma
```

```bat:no-line-numbers
yarn add @csc530/vuebulma
```

## Usage

**Need scoped (or global) import/`<link/>` of Bulma's CSS/SASS/... when using components.** I kept the import of the
actual css separate (*for now*).

### Import a component

*Recommended*

This is a modular library allowing you to import a component from anywhere as needed. To do such is the same as
importing a locally defined component.

```vue

<template>
	<BulmaHeading>I'm a Bulma styled title</BulmaHeading>
</template>

<script setup lang="ts">
	//Import the desired component
	import {BulmaHeading} from '@csc530/vuebulma'
</script>
```

### Import the library

This is not the recommended approach as many of the IDE code hints (don't seem to be) aren't available.

```js
import {createApp} from 'vue';
import App from './App.vue';

//Import vuebulma package
import vuebulma from '@csc530/vuebulma';

const app = createApp(App)
//Import vuebulma package to Vue app
app.use(vuebulma);
app.mount('#app');
```

To learn more about specific components use and examples please refer to the components documentation

## Additional help

If you need help working with [Bulma](https://bulma.io/documentation/)
or [Vue](https://v3.vuejs.org/guide/introduction.html) please refer to their respective documentation.
