# vbModalCard

[Bulma documentation](https://bulma.io/documentation/components/modal/)

a modal popup

## Slots

### default

Modal content

## Props

### isActive

Type: `boolean` | `undefined`

When active the modal is visible

## Emits

### update:isActive

```ts:no-line-numbers
(name: 'update:isActive', value: boolean): void => {}
```

Emit the new status of the modal's visibiity

Recommended to use `v-model` with the `isActive` prop (`<vbModal v-model:is-active="active"/>`) to accurately display
and redisplay modal.