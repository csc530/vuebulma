# vbContainer

[Bulma documentation](https://bulma.io/documentation/layout/container/)

A container that keeps left and right margins relative to the screen size. If the screen size is large enough.

## Slots

### default

content to place within the container

## Props

### [tag](../../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `div`

### isFluid

Type: `boolean` | `undefined`

Maintains left and right margins on the container. Regardless of screen size

### breakpoint

Type: `auto` | `desktop` | `widescreen` | `fullhd`;

The breakpoint of the selected [modifier](#modifier)

The sizes represent media screen sizes of...
> Desktop Between 1024px and 1215px
>
> Widescreen Between 1216px and 1407px
>
> FullHD 1408px and above
>
> [Bulma docs](https://bulma.io/documentation/layout/container/#overview)

### modifier

Type: `narrow` | `fullwidth`

Default:  `narrow`

This will modify how the container centers it content.

**narrow**: box (center) content in the center to and below breakpoint

- _narrow_ will have left and right margins applied to and lower than it's modifier breakpoint
  **fullwidth**: **only** centered at and above breakpoint
- _fullwidth_ will have no left and right margins until the media breakpoint