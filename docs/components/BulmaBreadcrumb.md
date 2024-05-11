# VBulmaBreadcrumb

[Bulma documentation](https://bulma.io/documentation/components/breadcrumb/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/BulmaBreadcrumb.vue)

## Slots

### default

_recommended: to accurately set href_

An `a` elements.
The slot item is a template for the given item in the [`items`](#items) prop.
The `items` item is bound to the slot item's `data` property.

## Props

### [tag](../types/common_types.md#tag)

Type: `string`

Default: `nav`

the tag to render as the breadcrumb's `ul` parent

### items

Type: `any[]`

List of items to render in the breadcrumb.
Recommended to be a list of strings or `{href: "...", toString(), ...}` objects to have a predictable behaviour and
display.
If the array is of strings, then the string is displayed and used as the breadcrumb's href: for
example `"stringValue`.
Likewise, if it's an array of the aforementioned object the href property is used for the href and `toString()` method
is displayed within the `a`.

If there is an `isActive` property on the object, then the breadcrumb will have an active display depending on its boolean value

### alignment

Type: [`BulmaAlignment`](../types/common_types.md#bulmaalignment)

Default: `center`

The alignment of the breadcrumbs within its container

### separator

Type: `arrow` | `bullet` | `dot` | `succeeds` | `slash`

Default: `slash`

The separator to use between breadcrumbs;

### size

Type: [`BulmaSize`](../types/common_types.md#bulmasize)

Default: `default`

The size of the breadcrumbs