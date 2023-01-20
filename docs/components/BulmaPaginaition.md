# vbPagination

[Bulma Documentation](https://bulma.io/documentation/components/pagination/)

## Props

### list:

Type: `{vbLink?: string, vbTxt?: string}[]`

List of pagination links/items. Any falsy values will become an ellipsis

### prev

Type: `{vbLink?: string, vbTxt?: string}` | `undefined`

The previous pagination button's text and link, if not undefined it will not be displayed

### next

Type: `{vbLink?: string, vbTxt?: string}` | `undefined`

The next pagination button's text and link, if not undefined it will not be displayed

### size

Type: [`BulmaSize`](../types/common_types.md#bulmasize) | `undefined`

The size of all pagination items

### alignment

Type: [`BulmaAlignment`](../types/common_types.md#bulmaalignment) | `undefined`

The alignment of the pagination items. If they are previous and or next buttons this will align the main items in the
specified direction and move the next and previous to the opposite direction. `center` will place the pagination items
in between previous and next buttons

### isRounded

Type: `boolean` | `undefined`

Give all pagination items a round style