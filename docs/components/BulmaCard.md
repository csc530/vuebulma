# vbCard

[Bulma documentation](https://bulma.io/documentation/components/card/)

## Slots

### default

content for the card's [main] content; ideal for text content.

### icon

icon for card header, image or font-awesome icon, [see](https://bulma.io/documentation/components/card/#card-parts)

### image

image content

### footer

template for card footer items. Item is bound to slot `data` property

## Props

### [tag](../types/common_types.md#tag)

Type: `string`

Default: `div`

Root tag of the card component

### title

Type: `string`

Text for card header

### imageAfterContent

Type: `boolean`

Default: `false`

If true, image will be displayed after the content


### footerItems

Type: `any[]`

items to display in the card footer, or data for each footer item

### footerTag

Type: `string` | `undefined`

Default: `p`

tag to wrap footer items in

