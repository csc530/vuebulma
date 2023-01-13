# BulmaMenu

[Bulma documentation](https://bulma.io/documentation/components/menu/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/containers/BulmaMenu.vue)

## Slots

### default

A template to render the menu items, the menu item is bound to the `data` variable.

## Props

### [tag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `aside`;

### menu

Type: [`BulmaMenu`](../types/BulmaMenu.md);

The items to render in the menu.

### labelTag

Type: `string` | `undefined`

Default: `p`

## Additional information

To display a [sub menu](https://bulma.io\documentation/components/menu/#submenu) use
the [BulmaMenu](../types/BulmaMenu.md) type and `items` property of
a [BulmaSubMenu](../types/BulmaMenu.md#bulmasubmenuitem) in the `menu` prop.

The menu can display a *max of two* levels. 