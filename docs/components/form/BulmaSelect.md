# BulmaSelect

[Bulma documentation](https://bulma.io/documentation/form/select/)
[Source](https://github.com/csc530/vuebulma/blob/main/src/components/form/BulmaSelect.vue)

A select input

## Slots

### default

The `option`s and `optgroup`s for the select element.

## Props

### colour

Type: [`BulmaColour`](../../types/common_types.md#bulmacolour) | `undefined`

The colour of the select element, colours the border

### size

Type: [`BulmaSize`](../../types/common_types.md#bulmasize) | `undefined`

The size of the select and options

### state

Type: [`BulmaInputState`](../../types/BulmaState.md#bulmaInputState) | `undefined`

The visual state of the select element

### isRounded

Type: `boolean`| `undefined`

When `true`, the select is rounded.


### options

Type: [`(BulmaOption | BulmaOptionGroup | string)[]`](../../types/BulmaOption.md#bulmaoption) | `undefined`

The options for the select element.

If the options are strings, the value will be the same as the text.

Any slot content will override this prop.

### modelValue

Type: `any`

Used for `v-model` binding.

### isFullWidth

Type: `boolean` | `undefined`

Whether the select element should take up the full width of the parent.

### isMultiple

Type: `boolean` | `number` | `undefined`

Whether the select element should allow multiple selections.

If the type is a number it will be used on
the [size](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select#attr-size) attribute.

## Emits

### update:modelValue

```ts
 (name: 'update:modelValue', newValue: any | any[]) => unknown
```

Emitted when the value of the select element changes.

If the select element [is multiple](#ismultiple), the value will be an array of the selected values.
Else the value will be the value of the selected option.
	
