# Bulma component library for Vue3

[![Built with Love](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)[![Check it out](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com)[![Not a bug; a feature](https://forthebadge.com/images/badges/not-a-bug-a-feature.svg)](https://forthebadge.com)[![Powered by black magic](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)

[![Made with Bulma](https://img.shields.io/badge/made%20with-Bulma-00d1b2?style=roundyed-square)](https://bulma.io)
[![downloads](https://img.shields.io/npm/dt/@csc530/vuebulma?label=npm%20downloads)](https://www.npmjs.com/package/@csc530/vuebulma)
[![npm version](https://img.shields.io/npm/v/@csc530/vuebulma?label=npm%20version&color=teal)](https://www.npmjs.com/package/@csc530/vuebulma?activeTab=versions)
[![GitHub issues](https://img.shields.io/github/issues/csc530/vuebulma?color=goldenrod)](https://github.com/csc530/vuebulma/issues)
[![GitHub discussions](https://img.shields.io/badge/Contribute-Discussions-blueviolet)](https://github.com/csc530/vuebulma/discussions)

## [Changelog](https://csc530.github.io/vuebulma/changelog.html)

## Disclaimer

Developed with and for Vue 3 and Bulma v0.9.4

This package is very much still under active development.

My attempt at creating a Vue component library for Bulma elements (because I really love Bulma, and it's styling/style)
that's compatible with Vue 3.

## Installation

`npm install @csc530/vuebulma`

`yarn add @csc530/vuebulma`

## Use

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

easy😄

## Documentation

Refer to the [documentation website](https://csc530.github.io/vuebulma/) for more information and the latest updates.

### Bulma Styling

This library is like a wrapper for Bulma and does not modify any of its CSS if you need help using Bulma or its classes,
refer to the [Bulma documentation](https://bulma.io/documentation/).

### Working with Vue

If you need any help working with Vue components or understanding some of its features please refer
to [their documentation](https://vuejs.org/guide/introduction.html).

### Custom Additions

This library adds some built-in JS to make Bulma's styling and classes work seamlessly
like [appending is-active](/src/vbComponents/components/BulmaDropdown.vue#L4) to a
clicked [dropdown](https://bulma.io/documentation/components/dropdown/#hoverable-or-toggable)

---

Pronunciation

vuebulma = *vubblema*
