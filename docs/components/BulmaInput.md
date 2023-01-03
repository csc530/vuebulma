# BulmaInput

[Bulma documentation](https://bulma.io/documentation/form/input/)
[Source code](../../src/components/form/BulmaInput.vue)

An input element styled with Bulma for [supported types](https://bulma.io/documentation/form/input/).

`v-model` is supported.

## Props

### colour

Type: [BulmaColours](../types/common_types.md#bulmacolours) | `undefined`

### size

Type: [BulmaSizes](../types/common_types.md#bulmasizes) | `undefined`

### isRounded

Type: `boolean` | `undefined`

Wheter the input is rounded.

### isLoading

Type: `boolean` | `undefined`

Wheter the input is in a loading state and should show a spinner.

### isStatic

Type: `boolean` | `undefined`

When `true`, the input styled statically; like a label, uneditable

### modelValue

Type: `any` | `undefined`

The value of the input; used with `v-model`.

## Emits

### update:modelValue

Emitted when the input value changes.

```ts:no-line-numbers
(newValue: typeof props.modelValue) => void {}
```

- `newValue` - The new value of the input, which will be the same type as the `modelValue`.

[//todo:]: # (add form dir with overview link to custom prop vmodel and default prop name and emit)