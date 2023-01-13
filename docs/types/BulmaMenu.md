# BulmaMenu

An array menu items

## BulmaMenuItem

**object**

### Values

#### label

Type: `string`

The label of the menu item.

#### items

Type: `any[]` | `undefined`

Items to display under the label.

To display a [sub menu](https://bulma.io\documentation/components/menu/#submenu) use am array
of [BulmaSubMenuItem](../types/BulmaMenu.md#bulmasubmenuitem)s

## BulmaSubMenuItem

A submenu item

**object**

### Values

#### label

Type: `string`

The label of the sub menu items.

#### items

Type: `any[]`

Items to display under the label.

Do not use another `BulmaSubMenuItem` or object of that form as it will not be displayed as another level of the menu.