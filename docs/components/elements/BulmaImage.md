# VBulmaImage

[Bulma documentation](https://bulma.io/documentation/elements/image/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/BulmaImage.vue)

A container to display an image.
Its size is fixed preventing page jumps when loading child image.

## Slots

### default

The image to display.
Recommended to use `img` element with `src` and `alt` attributes.

## Props

### size

Type: [`BulmaDimension`](../../types/BulmaDimension.md) |  [`BulmaAspectRatio`](../../types/BulmaAspectRatio.md)

Standard dimensions for the image container to be from 16 to 128, or an arbitrary ratio.
If an aspect ratio is used, a set width on the VBulmaImage is recommended.

> The only requirement is for the parent element to already have a specific width.
>
> The image container will usually take up the whole width while maintaining the perfect ratio.
> If it doesn't, you can force it by appending the is-fullwidth modifier.
> 
> – Bulma documentation

### isRounded

Type: `boolean`

If the container should be rounder; clipping whatever does not fit into the image.
If you [slot](#default) your own content this prop will have no effect.


### src

Type: `string`

src attribute for the img element

### alt

Type: `string`

Alt attribute for the img element;

### [tag](../../types/common_types.md#tag)

Type: `string`

Default: `figure`

The tag to use for the container element.

### isFullwidth

Type: `boolean`

Default: `false`

forcibly set the container to be full width, if 

## Additional information

The `src` and `alt`will be used, to create an img element, if there is no default slot content.