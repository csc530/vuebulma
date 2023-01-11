# Frequently used types and props

## Props

### `tag`

Type: `string` | undefined

The `tag` prop is used to specify the HTML tag to use for the component's parent wrapper or sub-element. It is a string,
and usually defaults to `div`.

## Types

### [`BulmaColour`](https://bulma.io/documentation/helpers/color-helpers/)

**string**

Type: `info` | `danger` | `warning` | `success` | `primary` | `link` |`white` | `black` | `light` | `dark` | `default`

The `BulmaColour` type is used to specify the colour of a component. Usually changing the background and/or text
colour.

### `BulmaSize`

**string**

Type: `small` |  `default`|`medium` | `large`

The `BulmaSize` type is used to specify the size of a component. Usually changing the font size.

For some Bulma elements an `is-normal` class is available which is represented by the `default` value.

[Bulma documentation example](https://bulma.io/documentation/components/message/#sizes)

### `BulmaColourHelper`

**string**

Type:

```typescript:no-line-numbers
type BulmaColourHelper = {
	shade?: 'white' | 'black' | 'light' | 'dark' | 'default';
	colour: 'info' | 'danger' | 'warning' | 'success' | 'primary' | 'link' | 'default';
};
```

This type is used to simply specify the colour and shade, used for classes such as `has-text-primary-light`
and `has-background-info-dark`.

### BulmaAlignment

**string**

Type: `left` | `center` | `right`
