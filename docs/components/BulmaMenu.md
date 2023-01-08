# BulmaMenu

[Bulma documentation](https://bulma.io/documentation/components/menu/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/containers/BulmaMenu.vue)

## Slots

### default

The default slot is used to render the menu items.

## Props

### [tag](../types/common_types.md#tag)

Type: `string`;

Default: `aside`;

### menu

Type: [`Menu`](../types/BulmaMenu.md);

The items to render in the menu.

### labelTag

Type: `string`

Default: `p`

## Additional information

To display a [sub menu](https://bulma.io\documentation/components/menu/#submenu) use
the [BulmaMenu](./../types/BulmaMenu.md) type and `items` property of
a [BulmaSubMenu](./../types/BulmaMenu.md#bulmasubmenu) in the `menu` prop.