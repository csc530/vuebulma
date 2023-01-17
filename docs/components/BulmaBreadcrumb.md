# vbBreadcrumb

[Bulma documentation](https://bulma.io/documentation/components/breadcrumb/)
[Component source](https://github.com/csc530/vuebulma/blob/main/src/components/BulmaBreadcrumb.vue)

## Slots

### default

Template formatting of the breadcrumb items.

The default is an `a` tag with the `href` attribute set to the `href` property of the item and text set to the `text`
property of the item or the item itself.

## Props

### [tag](../types/common_types.md#tag)

Type: `string` | `undefined`

Default: `nav`

the tag to render as the breadcrumb's `ul` parent

### lastCrumbIsActive

Type: `boolean` | `undefined`

Default: `true`

Whether the last breadcrumb item should be active

### list

Type: `any[]`

List of items to render in the breadcrumb

### alignment

Type: [`BulmaAlignment`](../types/common_types.md#bulmaalignment) | `undefined`

Default: `left`

The alignment of the breadcrumbs within its container

### separator

Type: `arrow` | `bullet` | `dot` | `succeeds` | `slash` | `undefined`

Default: `slash`

The separator to use between breadcrumbs;

### size

Type: [`BulmaSize`](../types/common_types.md#bulmasize) | `undefined`

Default: `default`

The size of the breadcrumbs