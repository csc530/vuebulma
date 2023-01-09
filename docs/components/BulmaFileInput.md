# BulmaFileInput

[Bulma documentation](https://bulma.io/documentation/form/file/)
[Source code](https://github.com/csc530/vuebulma/blob/main/src/components/form/BulmaFileInput.vue)

A file upload input

## Slots

### default

An icon placed before the file label

## Props

### label

Type: `string`

Text to display with the file input; prompt

### fileName

Type: `string` | `undefined`

The name of the file to display, i.e. the selected file

### size

Type: [`BulmaSize`](../types/common_types.md#bulmasize) | `undefined`

The size of the file input

### colour

Type: [`BulmaColour`](../types/common_types.md#bulmacolour) | `undefined`

The colour of the file input

### alignment

Type: [`BulmaAlignments`](../types/common_types.md#bulmaalignments) | `undefined`

The alignment of the file input

### isBoxed

Type: `boolean` | `undefined`

If the file input should have a boxed display; contents are displayed one on top of one another

### isFullwidth

**Requires [is-boxed](#isboxed) or a [file name](#filename)**

Type: `boolean` | `undefined`

expand the name or input to fill up the available space

## Emits

### update:modelValue

Emitted when the file input is changed

```ts
(name: 'update:modelValue', newValue: FileList | string) => void {}
```