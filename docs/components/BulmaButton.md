# BulmaButton

[Bulma documentation](https://bulma.io/documentation/elements/button/)
[Source code](../../src/components/button/BulmaButton.vue)

## Slots

### default

The content of the button

## Props

### [tag](../types/common_types.md#tag)

Type: `button` | `a` | `undefined`

Default: `button`

The element to style as a button

### label

Type: `string` | `undefined`

Text to display in the button instead of [slot](#default) content

### colour

Type: [`ButtonColours`](../types/BulmaButtonColours.md) | `undefined`

Button colour

### isLight

*Requires [colour](#colour) prop*

Type: `boolean` | `undefined`

Modifies the colour of the button to be lighter

### size

Type: [`BulmaSize`](../types/common_types.md#bulmasize) | `undefined`

Button size

### isNormal

Type: `boolean` | `undefined`

When true, the button will be normal size

### isResponsive

Type: ``boolean` | `undefined`

When true, the button will be responsive; having a more appropriate relate size based on the screen size

### isFullWidth

Type:  `boolean` | `undefined`

When true, the button will be the full width of its container

### isOutlined

Type:  `boolean` | `undefined`

When true, the button will have a transparent (default) background and a coloured text and border

### isInverted

Type:  `boolean` | `undefined`

When true, the button will be inverted; where the text color becomes the background color, and vice-versa

### isRounded

Type:  `boolean` | `undefined`

When true, the button will have rounded corners

### isLoading

Type:  `boolean` | `undefined`

When true, the button will have a loading spinner

> You can very easily turn a button into its loading version by appending the is-loading modifier. You don't even need
> to remove the inner text, which allows the button to maintain its original size between its default and loading states.
>
> [Bulma docs](https://bulma.io/documentation/elements/button/#states):

### isStatic

Type:  `boolean` | `undefined`

When true, the button will look non-interactive

### isActive

Type:  `boolean` | `undefined`

When true, the button will look active, as if it's currently being clicked

## Exposes

### isSelected

Type:  `boolean`

Controls the `is-selected` class which will increase the button's z-index
