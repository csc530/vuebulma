# vbPanel

[Bulma documentation](https://bulma.io/documentation/components/panel/)

## Slots

### header

content for panel header. Overrides [title](#title) prop.

### tab-text

Content to use instead of object `vbTxt` property.

### tab#

where `#` is a number

A dynamic slot name used to input content for the panel _tab_ item at index `#` from the [items](#items) array.
The item at index `#` is bound to the slot.

_Recommended to use an `a` tag as the root element_

### block#

where `#` is a number

A dynamic slot name used to input content for the panel _block_ item at index `#` from the [items](#items) array
The item at index `#` is bound to the slot.

_Bulma recommended to use an `a` or `label` as the root element_

## Props

### tag

Type: `string` | `undefined`

Root tag for the prop

### title

Type: `string`| `undefined`

Text to display in panel header

### items

Type: [`BulmaPanelType[]` | `BulmaPanelOptions` | `BulmaPanelItem[]`](../types/BulmaPanel.md)

Items to display within the panel

### colour

Type: `BulmaColour` | `undefined`

colour of the panel header