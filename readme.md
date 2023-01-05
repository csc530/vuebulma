# Bulma component library for Vue3

[![Built with Love](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)[![Check it out](https://forthebadge.com/images/badges/check-it-out.svg)](https://forthebadge.com)[![Gluten free](https://forthebadge.com/images/badges/gluten-free.svg)](https://forthebadge.com)[![Not a bug; a feature](https://forthebadge.com/images/badges/not-a-bug-a-feature.svg)](https://forthebadge.com)[![Powered by black magic](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)

![Made with Bulma](https://img.shields.io/badge/made%20with-Bulma-00d1b2?style=roundyed-square)
![weekly npm downloads](https://img.shields.io/npm/dw/@csc530/vuebulma?label=npm%20downloads)

## [Changelog](/../gh-pages/docs/changelog.md)

## Disclaimer

Developed with and for Vue v3.2.45 and Bulma v0.9.4

This package is very much still under active development. It is not recommended to use this in production. Feel free to
help or report any issues😃.

My attempt at creating a Vue component library using Bulma that's compatible with Vue 3, *and* it's composition api
because I really love Bulma, and it's styling.

## Installation

`npm install @csc530/vuebulma`

`yarn add @csc530/vuebulma`

## Usage

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

Refer to the [documentation website](https://csc530.github.io/vuebulma/) for more information and the latest updates.

### Bulma Styling

This library is like a wrapper for Bulma and does not modify any of its CSS if you need help using Bulma or its classes,
refer to the [Bulma documentation](https://bulma.io/documentation/).

### Working with Vue

If you need any help working with Vue components or understanding some of its features please refer
to [their documentation](https://vuejs.org/guide/introduction.html).

### Custom Additions

This library adds some built-in JS to make Bulma's styling and classes work seamlessly
like [appending is-active](/src/components/containers/BulmaDropdown.vue#L4) to a
clicked [dropdown](https://bulma.io/documentation/components/dropdown/#hoverable-or-toggable)

---

Pronunciation

vuebulma = *vubblema*