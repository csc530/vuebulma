# BulmaButton**s**

[Bulma documentation](https://bulma.io/documentation/elements/button/#list-of-buttons)
[Source code](../../src/components/button/BulmaButtons.vue)

A container for multiple [BulmaButton](BulmaButton.md) components.

## Slots

### default

[`BulmaButton`](BulmaButton.md) components.

## Props

### [tag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `div`

### [size](../types/common_types.md#bulmasize)

Type: [`BulmaSize`](../types/common_types.md#bulmasize) | `undefined`

Size of all enclosed buttons

### hasAddons

Type: `boolean` | `undefined`

When `true`, the buttons will be addon. The buttons will be placed next to one another with no spacing in between and
appear as a single, joined button element.

### alignment

Type: [BulmaAlignments](../types/common_types.md#bulmaalignments) | `undefined`

The alignment of the buttons.

### activateOnClick

*Requires button children to rendered with [items](#items) prop not passed in with [slot](#slots)*
Type: `boolean` | `singly'

When `true`, the buttons will be activated (adding `is-active` class to button) when clicked. When `singly`, only one
button can be active at a time.

### items

Type: `string[]` | `BulmaButton[]`

The items to be rendered as buttons.
