# vbInput

[Bulma documentation](https://bulma.io/documentation/form/input/)
[Source code](https://github.com/csc530/vuebulma/blob/main/src/components/form/BulmaInput.vue)

An input element styled with Bulma for [supported types](https://bulma.io/documentation/form/input/).

## Props

### colour

Type: [BulmaColour](../../types/common_types.md#bulmacolour) | `undefined`

### size

Type: [BulmaSize](../../types/common_types.md#bulmasize) | `undefined`

### isStatic

Type: `boolean` | `undefined`

When `true`, the input styled statically; like a label, un-editable

### state

Type: [BulmaState](../../types/BulmaState.md#bulmastate-1) | `undefined`

Visual state of the input

### modelValue

Type: `any` | `undefined`

The value of the input; used with `v-model`.

## Emits

### update:modelValue

Emitted when the input value changes.

```ts:no-line-numbers
(name: 'update:modelValue', newValue: typeof props.modelValue) => void {}
```

- `newValue` - The new value of the input, which will be the same type as the `modelValue`.

[//]: # (todo)

[//todo:]: # (add form dir with overview link to custom prop vmodel and default prop name and emit)