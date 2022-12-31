# BulmaMenu

A menu item

## Values

**object**

- `label`: `string`
- `items`: `BulmaSubMenu`

## BulmaSubMenu

A submenu item

### Values

**object**

- `label`: `string`
- items: `any[]`

This type is to be used with the [`BulmaMenu` component](../components/BulmaMenu.md). As
the [Bulma menu](https://bulma.io/documentation/components/menu/) can only have **1** submenu, to access and render any
properties in the *sub menu* use the [slot](../components/BulmaMenu.md#slots) to properly display them.