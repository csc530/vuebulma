# BulmaDropdown

[Bulma documentation](https://bulma.io/documentation/components/dropdown/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/containers/BulmaDropdown.vue)

A dropdown menu.

## Slots

### default

The default slot is the content to display as the dropdown's _trigger_; it is the element that will be clicked to open
the dropdown.

### dropdown-item

This slot is to be used to template the layout of the [dropdown's items](#content). The dropdown item is bound to
the `data`
property.

## Props

### alignment

Type: `string` | `undefined`

### content

**Required**

Type: `any[]`

Default: `[]`

The content of the dropdown; `null`, `undefined`, `NaN` will render a dropdown divider

### [tag](../types/common_types.md#tag)

Type: `string`

Default: `div`

The tag to hold all the dropdown items

### [itemTag](../types/common_types.md#tag)

Type: `string`

Default: `p`

The tag to wrap each dropdown item in.

### onClick

Type: `boolean`,

Default: `true`

Whether to toggle the dropdown when it's (trigger is) clicked

### is-hoverable

Type: `boolean`

Default: `false`

Whether the dropdown toggle when the mouse hovers over it

### is-dropup

Type: `boolean`

Default: `false`

Whether the dropdown is a dropup; opens upwards

## Emits

### itemClick

```ts:no-line-numbers
function itemClick(item: any, event: Event, element: HTMLElement): void {}
```

Emitted when a dropdown item is clicked

- `item` - the item value of the clicked dropdown item
- `event` - the click event
- `element` - the clicked dropdown item element