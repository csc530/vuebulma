# BulmaButton

[Bulma documentation](https://bulma.io/documentation/elements/button/)
[Source code](https://github.com/csc530/vuebulma/blob/main/src/components/BulmaButton.vue)

## Slots

### default

The content of the button

## Props

### [tag](../../types/common_types.md#tag)

Type: `button` | `a` | `undefined`

Default: `button`

The element to style as a button

### label

Type: `string` | `undefined`

Text to display in the button instead of [slot](#default) content

### colour

Type: [`BulmaButtonColour`](../../types/BulmaButtonColour.md) | `undefined`

The button's colour

### isLight

*Requires [colour](#colour) prop*

Type: `boolean` | `undefined`

Modifies the colour of the button to be lighter

### size

Type: [`BulmaSize`](../../types/common_types.md#bulmasize) | `undefined`

Button's size

### isResponsive

Type: `boolean` | `undefined`

When true, the button will be responsive; having a more appropriate size based on the screen size

### isFullWidth

Type:  `boolean` | `undefined`

When true, the button will expand to the width of its container

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
> to remove the inner text, which allows the button to maintain its original size between its default and loading
> states.
>
> [Bulma docs](https://bulma.io/documentation/elements/button/#states)

### isStatic

Type:  `boolean` | `undefined`

When true, the button will be static; not responding to hover, focus or active states

### state

Type:  [`BulmaState`](../../types/BulmaState.md) | `undefined`

Change _only_ the look of the button based on state prop

### isSelected

Type:  `boolean` | `undefined`

Controls the `is-selected` class which will increase the button's z-index. useful when using
the [BulmaButtonGroup](../layouts/BulmaButtonGroup.md) component to ensure the button is on top for interaction and
viewing.
