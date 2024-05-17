# vbNotification

[Bulma Documentation](https://bulma.io/documentation/elements/notification)
[Source](https://github.com/csc530/vuebulma/blob/main/src/vbComponents/elements/BulmaNotification.vue)

A notification block

## Slots

### default

The main html content

### delete

A delete button to display within the corner of the notification
_Recommended_ to use the [vbButton](BulmaButton.md) component with the `isDelete` prop

## Props

### [tag](../../types/common_types.md#tag)

Type: `string` | `undefined`

### colour

Type: [`BulmaColour`](../../types/common_types.md#bulmacolour) | `undefined`
background colour of the notification

### isLight

_requires colour_
Type: `boolean` | `undefined`

Make the colour lighter