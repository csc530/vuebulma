# vbDropdown

[Bulma documentation](https://bulma.io/documentation/components/dropdown/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/containers/BulmaDropdown.vue)

A dropdown menu.

## Slots

### default

The default slot is the element to display as the dropdown's _trigger_; it is the element that will be clicked/hovered
to open the dropdown.
By default, a (html) `button` element is used.

### dropdown-item

This slot is to be used to template the layout of the [dropdown's items](#content).
The dropdown item is bound to the `data` property.

## Props

### alignment

Type: `'left'`| `'right'`

The alignment of the dropdown menu.

### content

*Required*

Type: `any[]`

Default: `[]`

The content of the dropdown; `undefined` will render a dropdown divider, a horizontal line.

### [tag](../types/common_types.md#tag)

Type: `string`

Default: `div`

The tag to hold all the dropdown items

### [itemTag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `p`

The tag to wrap each dropdown item in.

### isHoverable

Type: `boolean` | `undefined`

Default: `false`

Whether the dropdown opens on mouse hover

### isDropup

Type: `boolean` | `undefined`

Default: `false`

Whether the dropdown opens upwards

## Emits

### itemClick

```ts:no-line-numbers
function itemClick(item: any, event: Event, element: HTMLElement): void {}
```

Emitted when a dropdown item is clicked

- `item` - the item value of the clicked dropdown item
- `event` - the click event
- `element` - the clicked dropdown item element