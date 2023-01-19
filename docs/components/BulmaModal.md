# vbModal

[Bulma documentation](https://bulma.io/documentation/components/modal/)

a modal popup

## Slots

### default

Main modal card content

### footer

Content to place in card footer

### title

text content for modal card's title. Priority over title prop

## Props

### isActive

Type: `boolean` | `undefined`

When active the modal is visible

### title

Type: `string` | `undefined`

The modal card's title. Slot title will override this

## Emits

### update:isActive

```ts:no-line-numbers
(name: 'update:isActive', value: boolean): void => {}
```

Emit the new status of the modal card's visibiity

Recommended to use `v-model` with the `isActive` prop (`<vbModalCard v-model:is-active="active"/>`) to accurately
display and redisplay modal.