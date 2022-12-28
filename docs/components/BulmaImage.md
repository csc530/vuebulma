# BulmaImage

[Bulma documentation](https://bulma.io/documentation/elements/image/)
[Component source](../../src/components/BulmaImage.vue)

An element to display an image with Bulma classes; An img with a container to hold it's size allowing for no page
jumping when it's loaded.

## Props

### dimension

Type: [`BulmaDimensions`](../types/common_types.md#bulmadimensions) | `undefined`

Standard dimension for the image container to be from 16 to 128

### isRounded

Type: `boolean` | `undefined`

If the container should be rounder; clipping whatever does not fit into the image

### aspectRatio

Type: [`BulmaAspectRatios`](../types/common_types.md#bulmaaspectratio) | `undefined`

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
