# BulmaFileInput

[Bulma documentation](https://bulma.io/documentation/form/file/)
[Source code](../../src/components/form/BulmaFileInput.vue)

A file upload input

## Props

### label

Type: `string`

Text to display with the file input

### fileName

Type: `string` | `undefined`

The name of the [selected] file to display

### size

Type: [`BulmaSizes`](../types/common_types.md#bulmasizes) | `undefined`

The size of the file input

### colour

Type: [`BulmaColours`](../types/common_types.md#bulmacolours) | `undefined`

The colour of the file input

### alignment

Type: [`BulmaAlignment`](../types/common_types.md#bulmaalignment) | `undefined`

### isBoxed

Type: `boolean` | `undefined`

If the file input should have a boxed display; contents are displayed one on top of one another

### isFullwidth

**Requires [is-boxed](#isboxed) or a [file name](#filename)**

Type: `boolean` | `undefined`

expand the name or input to fill up the available space
