# vbHeading

[Bulma Documentation](https://bulma.io/documentation/elements/title/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/BulmaHeading.vue)

The component for the Bulma title and subtitle elements.

## Slots

### default

Text or HTML content you'd like to display as the title or subtitle.

## Props

### isSpaced

Type: `boolean` | `undefined`

Default: `false`

_Apply on the heading **above** sibling heading component_

Adds a normalized space between the title and subtitle. Only visible if both title and subtitle are present
sequentially (one after another).

### [tag](../../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `p`

### [size](https://bulma.io/documentation/elements/title/#sizes)

Type: `1` | `2` | `3` | `4` | `5` | `6` | `undefined`

Default: `1`

The size of the header. An integer from 1 to 6.

### `type`

Type: `title` | `subtitle` | `undefined`

Default: `title`

The type of the header.