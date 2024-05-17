# vbIcon

[Bulma documentation](https://bulma.io/documentation/elements/icon/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/BulmaIcon.vue)

An icon component container to display icons.
The icon can be a single icon or a stack of icons.

## Slots

### default

The icon to display

### pre-text / post-text

The text to display whether before or after the icon, respectively

## Props

### flex

Type: `boolean`

Default: `false`

Determines if the icon should be a flex box; changing the parent tag to a `div` or an inline `span`.
Occupy the full width of the parent container

### colour

Type: [`BulmaColourHelper`](../../types/common_types.md#bulmacolourhelper) | [`BulmaColour`](../../types/common_types.md#bulmacolour) | `undefined`

Colour of the icon

### containerSize

Type: [`BulmaSize`](../../types/common_types.md#bulmasize)

Determines the size of the [icon's container](https://bulma.io/documentation/elements/icon/#sizes)

### text

Type: `string` 

Text to display _after_ the icon

### colourText

Type: `boolean`

Default: `false`

Determines if the text should also be coloured the same as the [colour prop](#colour)