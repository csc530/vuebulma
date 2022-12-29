# Bulma Heading

[Bulma Documentation](https://bulma.io/documentation/elements/title/)
[Component source](../../src/components/BulmaHeading.vue)

The component for the Bulma title and subtitle elements.

## Slots

### default

Text or HTML content you'd like to display as the title or subtitle.

## Props

### isSpaced

Type: `boolean` | `undefined`

Default: `false`

Adds a normalized space between the title and subtitle. Only visible if both title and subtitle are present
sequentially (one after another).

### [tag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `p`

### [size](https://bulma.io/documentation/elements/title/#sizes)

Type: [BulmaHeadingSizes](../types/BulmaHeadingSizes.md) | `undefined`

Default: `1`

The size of the header. An integer from 1 to 6.

### `type`

Type: [BulmaHeadingTypes](../types/BulmaHeadingTypes.md) | `undefined`

Default: `title`

The type of the header. Either `title` or `subtitle`.