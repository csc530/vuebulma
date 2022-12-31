# Frequently used types and props

## Props

### `tag`

Type: `string` | undefined

The `tag` prop is used to specify the HTML tag to use for the component's parent wrapper or sub-element. It is a string,
and usually defaults to `div`.

## Types

### [`BulmaColours`](https://bulma.io/documentation/helpers/color-helpers/)

**string**

Type: `info` | `danger` | `warning` | `success` | `primary` | `link` |`white` | `black` | `light` | `dark` | `default`

The `BulmaColours` type is used to specify the colour of a component. Usually changing the background and/or text
colour.

### `BulmaSizes`

**string**

Type: `small` |  `default`|`medium` | `large`

The `BulmaSizes` type is used to specify the size of a component. Usually changing the font size.

For some Bulma elements an `is-normal` class is available which is represented by the `default` value.

[Bulma documentation example](https://bulma.io/documentation/components/message/#sizes)

### `ColourHelper`

**string**

Type:

```typescript
type ColourHelper = {
 shade?: 'white' | 'black' | 'light' | 'dark' | 'default';
 colour: 'info' | 'danger' | 'warning' | 'success' | 'primary' | 'link' | 'default';
};
```

This type is used to simply specify the colour and shade, used for classes such as `has-text-primary-light`
and `has-background-info-dark`.

### BulmaDimensions

**number**

Type: 16 | 24 | 32 | 48 | 64 | 96 | 128

[// todo]: # (todo: look for uses is it for more than just image..?)

### BulmaAspectRatio

**string**

Type: `square` | `1by1` | `5by4` | `4by3` | `3by2` | `5by3` | `16by9` | `2by1` | `3by1` | `4by5` | `3by4` | `2by3` | `3by5` | `9by16` | `1by2` | `1by3`

### BulmaAlignment

**string**

Type: `left` | `center` | `right`
