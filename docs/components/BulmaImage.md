# BulmaImage

[Bulma documentation](https://bulma.io/documentation/elements/image/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/BulmaImage.vue)

An img with a container to hold maintain its size allowing for no page jumping when it's loaded.

## Slots

### default

The image to display.

### figcaption

The caption to display for the image.

## Props

### dimensions

Type: [`BulmaDimension`](../types/BulmaDimension) | `undefined`

Standard dimensions for the image container to be from 16 to 128

### isRounded

Type: `boolean` | `undefined`

If the container should be rounder; clipping whatever does not fit into the image

### aspectRatio

Type: [`BulmaAspectRatio`](../types/BulmaAspectRatio.md) | `undefined`

_Requires **width** attribute to be set_
Sets the height based on given width and aspect ratio.

### src

Type: `string` | `undefined`

Src attribute for the img element

### alt

_Use recommended_

Type: `string` | `undefined`

Alt attribute for the img element;

### caption

Type: `string` | `undefined`

Optional caption text to display in figcaption

## Additional information

The `src` and `alt` will be used if there is no present slot content.