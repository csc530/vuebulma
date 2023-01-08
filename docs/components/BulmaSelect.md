# BulmaSelect

[Bulma documentation](https://bulma.io/documentation/form/select/)
[Source code](https://github.com/csc530/vuebulma/blob/main/src/components/form/BulmaSelect.vue)

An input select

## Slots

### default

The `option`s and `optgroup`s for the select element.

## Props

### [tag](../types/common_types.md#tag)

Type: `string` | `undefined`

### color

Type: [`BulmaColour`](../types/common_types.md#bulmacolour) | `undefined`

### size

Type: [`BulmaSize`](../types/common_types.md#bulmasize) | `undefined`

The size of the select and options

### isLoading

Type: `boolean` | `undefined`

When `true`, the select is in a loading state and shows a spinner.

### isRounded

Type: `boolean`| `undefined`

When `true`, the select is rounded.

### isStatic

Type: `boolean` | `undefined`

When `true`, the select is styled statically; like a label, un-editable

### options

Type: `{ text: string, value: any }[]` | `string[]` | `undefined`

The options for the select element.

If the options are strings, the value will be the same as the text. If the options are objects, the value will be
the `value` property of the object and the text will be the `text` property of the object.

Any slot content will override this prop.

### modelValue

Type: `any`

### isFullWidth

**Requires Must pair with [`BulmaFormControl`](BulmaFormInputs.md#bulmaformcontrol)
with [`isExpanded` prop](BulmaFormInputs.md#isexpanded) to work; makes select
expand to fill its parent**
Type: `boolean` | `undefined`

