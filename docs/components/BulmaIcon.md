# BulmaIcon

[Bulma documentation](https://bulma.io/documentation/elements/icon/)
[Component source](../../src/components/BulmaIcon.vue)

An icon component only compatible with fontawesome

## Props

### icon

**Required**

[//]: # (todo: link to the type definition)
Type: `string` | `string[]` | [`ColourIcon[]`]()

The icon class name with style prefix

Example:

```js:no-line-numbers
'fa-solid fa-shield-cat'
['fa-solid', 'fa-shield-cat']
```

### flex

Type: `boolean` | `undefined`

Default: `false`

Determines if the icon should be a flex box; changing the parent tag to a `div`

### colour

Type: [`BulmaColourHelper`](../types/common_types.md#bulmacolourhelper) | [`BulmaColour`](../types/common_types.md#bulmacolour) | `undefined`

Colour of the icon

### bgColour

Type: [`ColourHelper`](../types/common_types.md#colourhelper) | `undefined`

Background colour of the icon

### containerSize

Type: [`BulmaSize`](../types/common_types.md#bulmasize) |`undefined`

Determines the size of the [icon's container](https://bulma.io/documentation/elements/icon/#sizes)

### prefix

Type: `string` | `undefined`

Adds this prefix as a separate class entry to icon element

### afterText

Type: `boolean` | `undefined`

Default: `false`

If the icon will be placed after the text (slot) element

### stacked

Type: `boolean` | `string` | `undefined`

If the icons will be stacked on top of each other rather than side by side

If the icon stack needs a class added to it (e.g. fa-stack) then the `string` value will be appended to the icon stack's
parent tag

### iconModifiers

Type: `string[]` | `string` | `undefined`

Additional modifiers for the icon, class names will be added to the icon's i element
