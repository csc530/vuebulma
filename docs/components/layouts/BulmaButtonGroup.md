# vbButtonGroup

[Bulma documentation](https://bulma.io/documentation/elements/button/#list-of-buttons)
[Source code](https://github.com/csc530/vuebulma/blob/main/src/components/containers/BulmaButtonGroup.vue)

A container for multiple [BulmaButton](../elements/BulmaButton.md) components.

## Slots

### default

[`BulmaButton`](../elements/BulmaButton.md) components.

## Props

### [tag](../../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `div`

### [size](../../types/common_types.md#bulmasize)

Type: [`BulmaSize`](../../types/common_types.md#bulmasize) | `undefined`

Size of all enclosed buttons

### hasAddons

Type: `boolean` | `undefined`

When `true`, the buttons will be addon. The buttons will be placed next to one another with no spacing in between and
appear as a single, joined button element.

### alignment

Type: [BulmaAlignment](../../types/common_types.md#bulmaalignment) | `undefined`

The alignment of the buttons.

