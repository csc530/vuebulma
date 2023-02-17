# vbTag and vbTagGroup

[Bulma documentation](
"ancestor" | "tile" | "child" | "parent")

## vbTag

### Slots

#### default

the text to display within the tag

#### Props

##### tag

Type: `string` | `undefined`

Default: `span`

###### label

Type: `string` | `undefined`

text to display as the tag's content. _overwritten by slot content_

##### colour

Type: [`BulmaColour`](../../types/common_types.md#bulmacolour)

The colour (background) of the tag

##### size

Type: `default` | `medium` | `large` | `undefined`

The size of the tag

##### isRounded

Type: `boolean` | `undefined`

If the3e tags corners should be rounded

##### isDelete

if the content of the tag should be a cross `x`

## vbTagGroup

Helps to style a group of tags. To change the style of any singular tag item simply overwrite that style/prop on that
vbTag

### Slots

#### default

one or more vbTag components

#### Props

##### tag

Type: `string` | `undefined`

Default: `div`

##### size

Type: `default` | `medium` | `large` | `undefined`

The size of the child tags

##### hasAddons

Type: `boolean` | `undefined`

To display the tag connected to one another