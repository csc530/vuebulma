# BulmaButtonGroup

[Bulma documentation](https://bulma.io/documentation/elements/button/#list-of-buttons)
[Source code](../../src/components/containers/BulmaButtonGroup.vue)

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

